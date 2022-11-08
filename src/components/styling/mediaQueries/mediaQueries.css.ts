import { style } from "@vanilla-extract/css";

// simple utils can be built upon media-queries
// this could obviously be expanded
function media() {
  return {
    result: "",
    screen: function () {
      this.result += "screen ";
      return this;
    },
    and: function () {
      this.result += "and ";
      return this;
    },
    minWidth: function (value: number) {
      this.result += `(min-width: ${value}px) `;
      return this;
    },
    maxWidth: function (value: number) {
      this.result += `(max-width: ${value}px) `;
      return this;
    },
  };
}

export const container = style({
  margin: "0 auto",
  width: "70vw",
  backgroundColor: "red",
  color: "white",
  "@media": {
    [media().screen().and().minWidth(768).result]: {
      width: "50vw",
      backgroundColor: "yellow",
      color: "red",
    },
    [media().screen().and().minWidth(1024).result]: {
      width: "75vw",
      backgroundColor: "blue",
      color: "white",
    },
  },
});
