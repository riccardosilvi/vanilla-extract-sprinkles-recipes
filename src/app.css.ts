import { style } from "@vanilla-extract/css";

export const appStyle = style({
  vars: {
    "--black": "#000000",
    "--yellow-300": "#ffcc00",
    "--green-300": "#35d77e",
    "--red-300": "#fe495c",
    "--orange-300": "#fc8c3c",
    "--white": "#fff",
  },
});

export const AppContainer = style({
  textAlign: "center",
});
