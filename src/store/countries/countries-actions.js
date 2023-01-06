export const SET_COUNTRIES = '@@countiry/SET_COUNTRIES';
export const SET_LOADING = '@@countiry/SET_LOADING';
export const SET_ERROR = '@@countiry/SET_ERROR';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((err) => dispatch(setError(err)));
  };
