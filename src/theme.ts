import React, { useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

export const fontSizes = {
  extraSmall3: 16,
  extraSmall2: 18,
  extraSmall: 20,
  small: 22,
  medium: 24,
  large: 25,
  extraLarge: 26,
  extraLarge2: 28,
  extraLarge3: 30,
};

export const sizes = {
  xs10: 0,
  xs9: 4,
  xs8: 8,
  xs7: 10,
  xs6: 15,
  xs5: 16,
  xs4: 20,
  xs3: 24,
  xs2: 25,
  xs: 40,
  s: 50,
  m: 60,
  l: 75,
  xl: 80,
  xl2: 90,
  xl3: 100,
  xl4: 200,
  xl5: 245,
  xl6: 330,
  xl7: 350,
  xl8: 360,
  xl9: 370,
  xl10: 380,
  xl11: 400,
  xl12: 500,
  xl13: 550,
};

export const themes = {
  light: {
    colors: {
      white: "#fefefe",
      violetB: "#3e50b5",
      violetA: "#3e50a5",
      grey1: "#cccccc",
      grey2: "#979797",
      red: "#d00038",
      redHover: "#c30437",
      grey3: "#646464",
      grey4: "#fffafa",
      grey5: "#a1a1a1",
      grey6: "#ebebeb",
      black: "#0c0c0c",
    },
  },
  dark: {
    colors: {
      white: "#4f4f4f",
      violetB: "#3e50b5",
      violetA: "#3e50a5",
      grey1: "#cccccc",
      grey2: "#979797",
      red: "#d00038",
      redHover: "#c30437",
      grey3: "#646464",
      grey4: "#fffafa",
      grey5: "#a1a1a1",
      grey6: "#ebebeb",
      black: "#f9f9f9",
    },
  },
};
