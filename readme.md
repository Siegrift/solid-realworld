# ![RealWorld Example App](logo.png)

> Trusted Types compliant fork of https://github.com/solidjs/solid-realworld

This codebase was created to demonstrate a fully fledged fullstack application built with Solid.js including CRUD
operations, authentication, routing, pagination, and more. We've gone to great lengths to adhere to the Solid.js
community styleguides & best practices. For more information on how to this works with other frontends/backends, head
over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

## Getting started

Before running this forked Trusted Types compliant version of solid real world app, you need to first prepare all of the
dependencies. This means bulding `vite` and `solid` from sources (see instructions). Afterwards, the app can be run the
same way as any other solid.js + vite application.

The only difference is that this one is Trusted Types compliant 🎉 🎉 🎉 .

### One time dependencies setup

To prepare all dependencies locally during development:

1. Clone this repo:

```sh
git clone --branch trusted-types https://github.com/Siegrift/solid-realworld
```

2. Then, clone Trusted Types compliant `vite` and `solid` libraries

```sh
git clone --branch trusted-types https://github.com/Siegrift/vite/
git clone --branch trusted-types https://github.com/Siegrift/solid/
```

The tree projects should be alongside each other:

```sh
# tree -L 1 .
├── solid
├── vite
├── solid-realworld
...
```

3. Install and build both `solid` and `vite` frameworks (follow README instructions in the respective repos)

### Install dependencies and run app

1. `yarn install --force` to install all dependencies
2. `yarn dev` to build and serve app locally
3. Browse to http://localhost:3000/

### Run tests

The applications also contains a bunch of Cypress e2e tests which can be run via:

```sh
# Make sure the server is running
yarn dev
# Open the Cypress UI dashboard
yarn cypress:open
```
