export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const SET_PAGE_NUM = 'SET_PAGE_NUM';
export const REFRESH  = 'REFRESH';


export function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING
    }
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}

export function setPageNum(number_) {
    return {
        type: SET_PAGE_NUM,
        number: number_
    }
}

export function refresh() {
    return {
        type: REFRESH
    }
}
