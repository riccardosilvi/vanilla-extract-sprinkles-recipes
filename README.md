# vanilla-extract : sprinkles vs recipes

## Description

This project aims at:
- discovering practices for each library
- explore limits and ease of use of both libraries and vanilla extract in general

## Takeouts

### Theming

Creating a theme is pretty straightforward. It is well documented at [doc theming section](https://vanilla-extract.style/documentation/theming/). 
You have to create a "skeleton theme" and then build each theme upon it.

### limitations

Vanilla extract has a limitation that you have to be aware first of all

> You cannot target elements other than the current class

[complex selectors doc section](https://vanilla-extract.style/documentation/styling/#complex-selectors) explaines how you can overcome this.
Basically you have to apply a class to the other element (a parent or a children).
This came out as relevant in the creation of a Stack component since you have to manage child react component which you cannot internally apply a class ( and you don't want to append a class on every Stack child componet ) .

#### sprinkles

Responsive props can be (almost) easily achieved with sprinkles.
Using [defineProperties](https://vanilla-extract.style/documentation/packages/sprinkles/#defineproperties) you can pass a set of conditions (which will be your breakpoints) and have a group of properties which will be able to accept, between a set of defined values you choose, an array of prop values by condition(breakpoint).
You can also create shorthands ( like py for paddingBottom+paddingTop).
[createSprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/#createsprinkles) function then generate styles based on properties built with defineProperties ( and exposes easily types for all of that)

Components which need to compute compound properties internally ( like the Stack component that accepts a spacing rule and then translates it to a set of css properties) can take advantage of [createNormalizeValueFn](https://vanilla-extract.style/documentation/packages/sprinkles/#createnormalizevaluefn) to have a readable `{[breakpoint]: propValue}` object to work on.

#### recipes

Recipes is easier to grasp.
Has a simple structure and super convenient (and human readable ) entries.
- ``base``  styles that always apply
- ``variants`` a variant name is followed by a ``{[variantOptionName] : StyleObject }``
- `compoundVariants` lets you compute css properties by granting access to all variant values 
- `defaultVariants` basically default props for your element

The greatest pitfall of this package is that accepting responsive properties is not in their plan so this is not suitable where you have to accept responsive prop from the "user".
This is discussed on the [recipes package responsive issue](https://github.com/vanilla-extract-css/vanilla-extract/discussions/497)

### What to use for what? My take

Sprinkles is mandatory for components where you have to accept props like ``["sm", null, "md"]`` and gives all the apis to compute internally values from sprinkles props.
A perfect example of this are generic building blocks like Box and Stack components where you want to accept a responsive placement of child elements through props. 

Recipes is best for readability and components which accept variants that can manage responsive through css rules internally.
A button is a perfect example of that, the user can tell you if it is primary or secondary, if it is large or small but must not be able to customise it for each breakpoint ( otherwise having a desing system does not make sense).

## My process

You can find further documentation on my reasoning on PR descriptions.
Building a stack component helped me shape my idea on responsiveness.
- [1st step - stack with recipes (not responsive)](https://github.com/riccardosilvi/vanilla-extract-sprinkles-recipes/pull/2)
- [2nd step - adopt gap rule to avoid additional markup](https://github.com/riccardosilvi/vanilla-extract-sprinkles-recipes/pull/3)
- [3rd step - stack with sprinkles with responsivenes and no additional markup](https://github.com/riccardosilvi/vanilla-extract-sprinkles-recipes/pull/4)

## Packages

[Vite](https://vitejs.dev/)

[vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract)

[sprinkles](https://www.npmjs.com/package/@vanilla-extract/sprinkles)

[recipes](https://www.npmjs.com/package/@vanilla-extract/recipes/v/0.1.1#recipe)

Not mentioning storybook since it is here but it was not used

## Resources 

LekoArts articles:
- [Writing performant Css with Vanilla extract](https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract)
- [How to write theme aware styles with vanilla extract](https://www.lekoarts.de/garden/how-to-write-theme-aware-styles-with-vanilla-extract)
- [portfolio repository](https://github.com/LekoArts/portfolio-v2)

Docs
- [vanilla-extract](https://vanilla-extract.style/documentation/getting-started/)

Vanilla Extract site repository

- [Stack component](https://github.com/vanilla-extract-css/vanilla-extract/blob/master/site/src/system/Stack/Stack.tsx)
- [recipes package responsive issue](https://github.com/vanilla-extract-css/vanilla-extract/discussions/497)

MDN
- [row-gap css rule](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
- [gap shortand css rule](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://127.0.0.1:5173/
](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.<br>
