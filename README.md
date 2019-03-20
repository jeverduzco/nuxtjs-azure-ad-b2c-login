# Azure AD B2C And Nuxt.js Template

## Instructions

Changes the following in the msal/msal.js file: <br />
clientID: Your AD B2C application ID<br />
authority: Your Azure AD B2C tenant's authority URL (https://login.microsoftonline.com/tfp/{{your-domain}}.onmicrosoft.com/{{your-user-flow}})


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
