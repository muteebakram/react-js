# React JS Tutorial

## Tools

1. NodeJS +v12 (use LTS, even version are LTS)
2. Vscode
3. Browser

## React Tools

1. CRA: create react app
2. Devtools: react devtools (extension) - <https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>

## Points

1. ReactJS is packages not a framework. Thus require many other packages to be used.
2. Next.js is react framework for frontend.
3. Nest.js is used for backend.
4. ReactJS is good for UI mainly for streaming, large UI content. Ex: Netflix, flipkart, facebook
5. AngularJS is framework no need to add many 3rdpaty library. No breaking changes since AngularJS 4. Angular is newer compared to react.

6. React uses virtual DOM. Angular uses incremental DOM. Performace is almost same. Goal of these framework are to solve rendering problem and fastly render pages.
7. Vue.js is best of react and angular js but its only 3 yrs old.
8. Future may be in web components and web assembly.
9. Javascript is single threaded but multi thread is possible by async and callbacks
10. JS runtime: <https://miro.medium.com/max/1400/1*iHhUyO4DliDwa6x_cO5E3A.gif>
11. React uses technique called "Reconcilation" to patch only the diff change to JS DOM.

## Learn

1. Callback queue
2. Hoisted scope
3. Immutabilty
4. Lexical scope
5. Context scope
6. Redux is for JS and react-redux is for react. Redux is developed by facebook technology called flux.

## React Points

1. Browserlist in package.json - <https://github.com/browserslist/browserslist>
2. Smallest components are more reuseablity.
3. Good practice to use filename and component to be same.
4. Each component should have one purpose called SRP.
5. Component must be in pascal class.
6. Components segrigation
   - Smart: Logical part backend API etc. Ex: ProductList - my-app/src/container/ProductList.js
   - Dumb: Presntation how it looks on screen. Ex: Product - my-app/src/components/Product.js
7. Communication via parent childs relation.
   - Ex: A is parent and BCD are siblings
     - A
       - B
       - C
       - D
   - B can only communicate to D via A. ie B-A the A-D

### Components

We have two types of components:

1. Class based (stateful)
2. Function based (stateless)

#### Class based

They support Component life cycle. ie, mounting, updating, unounting.

Mainly used for SMART components.

### Function based

They dont have component life cycle. They use React Hooks.

Mainly used for DUMB components.

### Props and State

Props and state are integral part of components.

**Props:** Used for data exchange btn comps.

**State:** UI updates or re-rendering.

- Must always be initailized.
- Should be immutable thus react provides setState
- **_setState_** keeps state immutable internally and call render internally and updates.

## Commands

1. Create a react project/app - `npx create-react-app <app-name>`

2. Start the develop server - `npm start`

3. Most of the commands are available in `my-app/README.md`
