import { createSlice, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    darkMode: false,
    loading: false,
    error: null,
    countries: [],
    searchQuery: '',
    filterQuery: '',
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
    startFetching: (state) => {
      state.error = null
      state.loading = true
    },
    fetchSuccess: (state, action) => {
      state.loading = false
      state.countries = action.payload
    },
    fetchFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setFilterQuery: (state, action) => {
      state.filterQuery = action.payload
    },
  },
})

const {
  toggleDarkMode,
  startFetching,
  fetchSuccess,
  fetchFailure,
  setSearchQuery,
  setFilterQuery,
} = countriesSlice.actions

export const toggle = () => (dispatch) => {
  dispatch(toggleDarkMode())
}

export const fetchCountries = () => (dispatch) => {
  dispatch(startFetching())

  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchFailure(err.data))
    })
}

export const setSearch = (query) => (dispatch) => {
  dispatch(setSearchQuery(query))
}

export const setFilter = (query) => (dispatch) => {
  dispatch(setFilterQuery(query))
}

export default configureStore({
  reducer: { countries: countriesSlice.reducer },
})
