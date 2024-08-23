# Select University

This is a `<select>` element that lets the user decide which university to choose for him or herself.

## User journey

The user lands on the page where he or she sees the Select University component.
The user types some text in the input field: when the are at least 3 characters typed, the Select University component will start to fetch all the matching universities.

## Technologies used

Here are the technologies being used

- [Vite.js](https://vitejs.dev/guide/) as the core frontend tool to build this user interface. I chose this tool over Next.js because this SPA is structured in such a way that using all the massive infrastructure offered by this framework is unnecessary
- [React](https://react.dev/) as the rendering library
- [React DOM](https://github.com/facebook/react/tree/main/packages/react-dom): this is the `React` package that acts as a bridge between `React` itself and the `DOM`, so it makes possibile to render `React` components into a web page's [DOM](https://www.w3.org/TR/WD-DOM/introduction.html) by using `React`'s own `virtual DOM` and diffing algorithm
- [Typescript](https://www.typescriptlang.org/) as the safety layer above JavaScript, to ensure less errors during development
- [Tanstack Query](https://tanstack.com/query/latest) as the main data-fetching library to handle the API call to the instructed endpoint: I chose this library over using the browser native fetch API with `useEffect` because `Tanstack Query` handles all the use cases and edge cases such as error, cache and so on
- [Jest](https://jestjs.io/) as the main unit test framework
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) for styling, plain and simple

### Run locally

1. Run `npm i`to install all the dependencies
2. Once installted, you can run `npm run dev` to start the local server on `http://localhost`. The default port used will be decided by Vite itsel
3. Other useful commands:
   - create a production build (useful to check for any error before creating a commit): `npm run build`
   - run unit tests (written in [Jest](https://jestjs.io/)): `npm run test`
