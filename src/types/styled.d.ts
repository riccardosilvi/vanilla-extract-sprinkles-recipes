import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    spacing: {
      base: string | number;
      section: string | number;
    };
    color: {
      brand: string;
      background: string;
    };
    font: {
      body: string;
    };
  }
}
