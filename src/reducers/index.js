
import { combineReducers } from 'redux';
// import reducers
import StockQuoteReducer from './StockQuoteReducer.js';
import UtilityReducer from './UtilityReducer.js';

// create app reducer / combine reducers
const appReducer = combineReducers({
    stockQuoteData: StockQuoteReducer,
    utility: UtilityReducer
})

// create root reducer that can destroy state if necessary
const rootReducer = (state, action)=>{
    if(action.type === 'LOGOFF'){
        // destroy state when logging off
        state = undefined;
    }

    return appReducer(state,action)
}

export default rootReducer;