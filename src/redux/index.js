import { createSlice, configureStore } from '@reduxjs/toolkit'
import axios from 'axios'

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    darkMode: false,
    loading: false,
    error: null,
    countries: [],
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
  },
})

const {
  toggleDarkMode,
  startFetching,
  fetchSuccess,
  fetchFailure,
} = countriesSlice.actions

export const toggle = () => (dispatch) => {
  dispatch(toggleDarkMode())
}

export const fetchCountries = () => (dispatch) => {
  dispatch(startFetching())

  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res) => {
      //   dispatch(fetchSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchFailure(err.data))
    })
}

export default configureStore({
  reducer: { countries: countriesSlice.reducer },
})
