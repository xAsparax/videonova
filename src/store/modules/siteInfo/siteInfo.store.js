/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"
import telegram from "../../../assets/social/telegram.png"
import discord from "../../../assets/social/discord.png"
import twitter from "../../../assets/social/twitter.png"

const siteInfoSlice = createSlice({
  initialState: {
    siteIntro:
      "Create videos with a single click. Add subtitles, transcribe audio and more.",
    footerText: "All Rights Reserved 2022",
    social: [
      { name: telegram, to: "https://web.telegram.org" },
      { name: discord, to: "https://discord.com/" },
      { name: twitter, to: "https://twitter.com" },
    ],
    loading: false,
  },
  name: "siteInfo",
  reducers: {
    changeSiteIntro(state, action) {
      state.siteIntro = action.payload
    },
    changeFooterText(state, action) {
      state.footerText = action.payload
    },
    changeSocial(state, action) {
      state.social = action.payload
    },
    showLoading(state) {
      state.loading = true
    },
    hideLoading(state) {
      state.loading = false
    },
  },
})

const { reducer } = siteInfoSlice
const { changeSiteIntro, changeFooterText, changeSocial } =
  siteInfoSlice.actions
export { reducer, changeSiteIntro, changeFooterText, changeSocial }
