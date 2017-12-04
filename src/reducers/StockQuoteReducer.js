import Types from '../actions/Types'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = {};

const receiveStockQuote = (state, action) => {
    return Object.assign({}, state, {
        fetching: false,
        error: null,
        stockQuoteData: action.stockQuoteData,
        dateReceived: Date.now()
    })
};

const requestStockQuote  = (state, action) =>
    Object.assign({}, state, {
        fetching: true,
        name: action.name,
    });

// map our types to our handlers
const ACTION_HANDLERS = {
    [Types.API_RECEIVE_STOCK_QUOTE]: receiveStockQuote,
    [Types.API_REQUEST_STOCK_QUOTE]: requestStockQuote
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)