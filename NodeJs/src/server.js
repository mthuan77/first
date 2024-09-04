import express from "express";
//thu vien lay tham so phia client
import bodyParser from "body-parser";
//user?id=7 lay id tu server gui len client
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
//goi ham config tu thu vien dotenv
require("dotenv").config();
//babel-node trinh bien dich complier nodemon --exec de tu dong chay lai

//npm start lenh start duoc cau hinh trong package.json
//lenh nodemon chay babel compiler
//nodemon chay main:server.js
//khoi tao app bang ham express();
let app = express();

//config app middleware phan tich yeu cau HTTP
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//thiet lap view
viewEngine(app);
//khoi tao router
initWebRoutes(app);
//ket noi database
connectDB();
//khoi dong server: cac request duoc gui ve cong duoc dinh nghia trong file .env
let port = process.env.PORT || 6969;
//Port === undefined=>port=6969

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port:" + port);
});

//test localhost:8080
