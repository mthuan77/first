import express from "express";
//thu vien lay tham so phia client
import bodyParser from "body-parser";
//user?id=7 lay id tu server gui len client
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
//goi ham config tu thu vien dotenv
require("dotenv").config();
//babel-node trinh bien dich complier nodemon --exec de tu dong chay lai

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;
//Port === undefined=>port=6969

app.listen(port, () => {
  //callback
  console.log("Backen Nodejs is runing on the port:" + port);
});

//test localhost:8080
