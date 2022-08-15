import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"

const siteInfoSlice = createSlice({
  initialState: {
    test: "hello",
  },
  name: "siteInfo",
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
  },
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content inside block could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
