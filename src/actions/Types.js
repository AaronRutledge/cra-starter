// A list of all actions in the system.
import { createTypes } from 'reduxsauce';

export default createTypes(`
  KILL_ACTIVE_SAGA_WORKERS
  
  API_FAILURE
  API_REQUEST

  API_RECEIVE_STOCK_QUOTE
  API_REQUEST_STOCK_QUOTE

`);
