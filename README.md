
>## Project Screenshot

![scr](screenshot.png)


># Deploy NEXT JS into firebase
 </br>

 ## Step to follow
1. npx create next-app .
1. do all the code you want.
1. create a firebase project
1. upgrade to Pay as you go
1. login into firebase via cli
1. firebase init
1. setup project for hosting & functions
1. edit your firebase.json file like below

```json
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "function": "nextServer"
      }
    ]
  },
  "functions": {
    "source": ".",
    "runtime": "nodejs12"
  }
}
```

> ##### let me explain what we did </br>
* hosting setup<br>
make sure you set the public = public.</br>
* functions setup<br>
rewrite source = ** and function = nextServer(we will create our own function)</br>
set funcions source="."<br>
set the runtime =nodejs12

____


> ## Step: 9 Create our custom server.js file 
</br>

```javascript
const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
    dev: isDev,
    //location of .next generated after running -> yarn build
    conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
    return server.prepare()
        .then(() => {
            return nextjsHandle(req, res)
        });
});

/*
firebase-admin,firebase-functions
require these plugins,install them
*/
```

</br>

> ## Step: 10 install all dependency
```
npm i firebase-admin firebase-functions
```

> ## Step: 11 add server.js file in package.json file

So final package.json file will look like this.we added some custom scipt.
</br>

```json
{
  "name": "app",
  "main": "server.js",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "out": "next build && next export",
    "deploy2": "cross-env NODE_ENV=production firebase deploy --only functions,hosting",
    "deploy": "firebase deploy --only functions,hosting",
    "start": "next start"
  },
  "dependencies": {
    "cross-env": "^7.0.3",
    "firebase-admin": "^9.4.2",
    "firebase-functions": "^3.13.0",
    "next": "10.0.5",
    "react": "17.0.1",
    "react-dom": "17.0.1"
  }
}

```
</br>

> ### Step: 12 Delete index.html from the public directory
</br>
</br>

> ## Start Deploy

```
//build our Next.js project to generate .next folder
1. npm run build

//Now deploy 
2. npm run deploy

```



> [Reference Blog](https://medium.com/wesionary-team/deploying-next-js-application-on-firebase-platform-using-cloud-function-with-firebase-hosting-920157f03267)