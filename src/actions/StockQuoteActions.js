import Types from './Types';

const receiveStockQuote = (response) => {
    return ({
        type: Types.API_RECEIVE_STOCK_QUOTE,
        stockQuoteData: response,
    });
}
const requestStockQuote = (stock) =>
    ({
        type: Types.API_REQUEST_STOCK_QUOTE,
        endPoint: `/stock/${stock}/quote/`,
        params: {},
        ajaxType: "GET",
        onSuccess: receiveStockQuote
    });


export {
    receiveStockQuote,
    requestStockQuote
}