import express from 'express';
import userRouter from './src/routes/user_info.routes.js';
let app = express();
let port = process.env.PORT || 3000;

app.listen(port);
app.use("/users", userRouter);
console.log('RESTful API server started on: ' + port);
