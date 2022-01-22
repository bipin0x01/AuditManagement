# Documentation

### Backend

API Routes Documentation

https://documenter.getpostman.com/view/14057887/UVXqDXyr




## How to host the project in localhost?

Create an .env file in the main folder and add following parameters:
```
MONGO_URI=
PORT=
JWT_SECRET=
```

In the project directory, you can run:

```
npm run dev
```

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:{PORT}](http://localhost:{PORT}) to view the client in the browser.

```
npm run client
```

Runs just the client app in development mode.<br>
Open [http://localhost:{PORT}](http://localhost:{PORT}) to view the client in the browser.

```
npm run build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>
