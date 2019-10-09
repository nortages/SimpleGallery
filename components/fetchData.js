import { fetchDataPending, fetchDataSuccess, fetchDataError, setPageNum, refresh } from '../store/actions';


export default function fetchData(url, data) {

  return (dispatch, getState) => {
    dispatch(fetchDataPending());
    fetch(url)
    .then(
          res => res.json(),
          error => dispatch(fetchDataError(error))
    )
    .then(res =>
      dispatch(fetchDataSuccess([...data, ...res]))
    )
  };
}
