import { createVar, style } from "@vanilla-extract/css";

//You can create var programmatically
export const blackVar = createVar();

export const appStyle = style({
  vars: {
    [blackVar]: "#000000",
    // or hardcode them
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
