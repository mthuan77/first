import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

//truyen ung dun vao server
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  //ham da khai bao co mau vang nhat
  return app.use("/", router);
};

module.exports = initWebRoutes;
