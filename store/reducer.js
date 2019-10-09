import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SET_PAGE_NUM,
  REFRESH
} from './actions';

const initialState = {
    page: 1,
    pending: false,
    data: [],
    error: null
}

function dataReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }
        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SET_PAGE_NUM:
            return {
                ...state,
                page: action.number
            }
        case REFRESH:
            return {
                ...state,
                page: 1,
                data: [],
            }
        default:
            return state;
    }
}

export default dataReducer;
