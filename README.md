# Description
This is a random jokes webapp built with Nuxtjs, Nodejs and Mongodb
 external api's used
- https://api.giphy.com for gifs
- https://official-joke-api.appspot.com and https://api.icndb.com for random jokes

Check it out -> https://kidmeapp.herokuapp.com/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# Further improvements

Index.vue
-	Prefetch data on the server instead of using the mount() method
-	Use async await instead of a thenable, this will keep the code clean and easy to read

Components/jokes
-	Remove jokes.styl as it only has one line, it would be better to implement an inline styling rather 
-	jokes.vue: remove unused and commented out code

Api
-	remove certificates from the repository as they shouldn’t be publicly accessible 
-	create a separate repository for the backend 
-	api/mongo.ts: split each database operation to its own classes, this will make the package easy to read and understand.

