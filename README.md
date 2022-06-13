## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# development mode
# yarn dev excution transferred to pages/_app.js which contains MyApp component
# MyApp Component get props Component and pageProps and return as part of the jsx
# Component prop will refer to the pages/index.js, home component

yarn build
# compoiles next js and prepare or production mode

yarn start
# compile application to production mode
# next js is full stack frmawork, so it can have server
# so scripts to start server is needed
# build script needs to run prior to running the start scripts
```

---

### What is Next.js ?

- The React Framework for Production

### React

- Not quite possible to build a full feature rich application ready to be deployed for production
- now if you think about building applications with just react
- you know that it's not quite possible to build a full feature-rich application ready to be deployed for production
- react is a library for building user interfaces
- it is responsible for only the view layer of an application and you as the developer have to make decisions on other features of the app
- for example how would you implement routing, styling authentication etc

### Next.js

- next.js on the other hand is a react framework
- so it is a package that uses react for building user interfaces
- but it also comes loaded with a lot more features that enable you to build full-fledged production ready applications
- features exactly like routing, styling, authentication, bundle optimization etc
- there's no need to install additional packages
- next.js provides everything for you
- you do have to keep in mind though that next.js living true to the name of being a framework does have opinions and conventions which need to be followed to implement the above set features
- however we don't have to worry much about that as there are conventions that have emerged from a team with years of experience writing react apps for production
- so to reiterate next.js is a react framework for building production ready applications

---

### Why learn Next.js ?

- all right now that we know what next.js is let's see why you might want to learn it
- the why again stems from the fact that next.js simplifies the process of building a react application for production
- let me list down some of the noteworthy features which you would probably want in a react application which next js provides out of the box
  1. File based routing
     - when building a react app you need to install a third-party routing package configure it and add code every time you need to create a route
     - next js provides what is known as file based routing to simplify this task
  2. Pre-rendering
     - this means that next js generates html for each page in advance
     - instead of having it all done by client-side javascript
     - pre-rendering can result in better performance and seo which is something we all want
  3. API routes
     - and this might be a surprise to most of you
     - but let me tell you that you can create apis with next js
     - so next js is really a full stack framework if you think about it
     - you can write the frontend code in react but also write apis that can be called by the react app
     - next js also supports css modules which saves you the time of choosing a css library
     - of course you are allowed to use a css framework like tailwind or even a css in js library like style components for example
     - but next js supports css modules out of the box
  4. Authentication
     - next js supports multiple authentication patterns
     - each designed for different use cases
  5. Dev and Prod build system
     - and a well optimized production build system so that you can focus more on the code and less on the configuration
  - it is a culmination of all these features which makes next.js an amazing framework to work with
  - and if you haven't guessed already these are the features you're going to learn in detail throughout the series
  - also just so you know i might refer to next js as just next many times in the series so please don't get confused

---

### Pre-requisites

- now then what are the prerequisites to get started with next.js
- html css and javascript fundamentals are absolutely necessary
- we will be making use of es6 plus
- so make sure you have an understanding of the modern javascript features as well
- next js a react framework which implies you also need to have a solid understanding of react fundamentals
- you don't have to be an expert by any means but concepts like function components props state jsx hooks and so on are required

---

## Reference

- [Next.js Tutorial for Beginners](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH)
