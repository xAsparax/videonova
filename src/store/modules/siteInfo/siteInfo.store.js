import React from "react"
import { createSlice } from "@reduxjs/toolkit"
import telegram from "../../../assets/social/telegram.png"
import discord from "../../../assets/social/discord.png"
import twitter from "../../../assets/social/twitter.png"

const siteInfoSlice = createSlice({
  initialState: {
    siteIntro: "Create videos with a single click. Add subtitles, transcribe audio and more.",
    footerText: "All Rights Reserved 2022",
    social: [
      { name: telegram, to: "https://web.telegram.org" },
      { name: discord, to: "https://discord.com/" },
      { name: twitter, to: "https://twitter.com" },
    ],
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
  }
})

const reducer = siteInfoSlice.reducer
const { changeSiteIntro, changeFooterText, changeSocial } = siteInfoSlice.actions
export { reducer, changeSiteIntro, changeFooterText, changeSocial }
