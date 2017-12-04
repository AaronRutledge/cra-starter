import { fork } from 'redux-saga/effects';
import markitDataSaga from './MarkitDataSaga';
import markitApi from '../services/MarkitApi';

const rootSaga = (apiUrl) => {
    // const userToken = `Bearer ${token}`;
    const MarkitDataApi = markitApi.create(apiUrl);
    function* root() {
        yield fork(markitDataSaga(MarkitDataApi).watcher);
        
    }

    return root;
};

export default rootSaga;