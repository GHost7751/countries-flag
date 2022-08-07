export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_COUNTY = 'SET_COUNTRY'
export const CLEAR_DETAILS = 'CLEAR_DETAILS'
export const SET_BOARDS = 'SET_BOARDS'


const setBoards = (country) => ({
    type : SET_BOARDS,
    payload : country
})


export const clearDetails = () => ({
    type : CLEAR_DETAILS
})

export const setLoading = () => ({
    type : SET_LOADING
})

export const setError = (err) => ({
    type : SET_ERROR,
    payload : err,
})

export const setCounty = (country) => ({
    type : SET_COUNTY,
    payload : country,
})

export const loadCountryByName = (name) => (dispatch , _ , {client , api}) => {
    dispatch(setLoading());


    client.get(api.searchByCountry(name))
    .then(({data}) => dispatch(setCounty(data[0])))
    .catch((err) => dispatch(setError(err.message)))
}

export const loadBoard = (borders) => (dispatch, _, {client,api}) => {
    client.get(api.filterByCode(borders))
    .then(({data}) => dispatch(setBoards(data.map((c) => c.name))))
    .catch(console.error);
}