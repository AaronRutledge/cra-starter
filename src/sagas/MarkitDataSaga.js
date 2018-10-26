import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, cancel, fork } from 'redux-saga/effects';
import Types from '../actions/Types';
import { apiRequest, apiFailure } from '../actions/UtilityActions';

export default (api) => {
    function* worker(action) {
        var apiType;
        const params = action.params;

        // Pick request type based off the action
        switch (action.ajaxType) {
            case "POST":
                apiType = api.postData;
                break;
            case "PUT":
                apiType = api.putData;
                break;
            case "DELETE":
                apiType = api.deleteData;
                break;
            case "GETCREDS":
                apiType = api.getDataCreds;
                break;
            case "GETFILE":
                apiType = api.getDataDownload;
                break;
            default:
                apiType = api.getData;
                break;
        }
        try {
            let response;
            switch (action.type) {
                case "API_REQUEST_DOC":

                    //
                    // FILE DOWNLOADS ARE HANDLED UNIQUELY -- WAY NEED TO DOWNLOAD THE BLOB AND THEN OPEN IN A NEW TAB
                    //
                    response = yield (call(apiType, action.endPoint, params)) // Make API call to receive file
                    const blobData = response.data;
                    const fileName = `${action.documentName}.pdf`;
                    const isIe = typeof window.navigator.msSaveOrOpenBlob !== 'undefined';
                    //const isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

                    if (isIe) {
                        // if is IE or mobile - ask user for action - save or open
                        window.navigator.msSaveOrOpenBlob(blobData, fileName);
                    }
                    else {
                        // Other browsers
                        const objectUrl = window.URL.createObjectURL(blobData);

                        window.open(objectUrl);

                        // window.URL.revokeObjectURL(objectUrl);
                    }
                    break;
                // • • • • •

                default:

                    //
                    // DEFAULT API CALLS
                    //

                    response = yield call(apiType, action.endPoint, params); // API call

                    switch (response.status) {

                        // Success codes we are specifically looking for
                        case 304:
                        case 200:
                            yield put(action.onSuccess(response.data, action.responseDetails)); // call our success method to hand the data off
                            break;
                        // Unauthorized request - attempt a logout
                        case 401:
                            yield put(apiFailure("bad auth"));
                            // yield put(logout());
                            break;

                        // Generic Failed request
                        default:
                            yield put(apiFailure(`Bad data response from action: ${action.type}`));
                            break;
                    }
                    break;
                // • • • • •

            }
        } catch (error) {
            // Did we throw an error anywhere?
            yield put(apiFailure("bad call " + error));
        } finally {
            // Catchall to turn off the loader   
            if (action.loader) {
                yield put(apiRequest(false));
            }
        }



    }

    function* watcher() {
        const watcherTasks = yield fork(takeEvery, [
            Types.API_REQUEST_STOCK_QUOTE,
        ], worker);
        yield fork(takeLatest, Types.KILL_ACTIVE_SAGA_WORKERS, cancelWorkerSaga, watcherTasks);
    }
    function* cancelWorkerSaga(task) {
        yield cancel(task);
        yield fork(watcher);
    }

    return {
        watcher,
        worker
    }
}
