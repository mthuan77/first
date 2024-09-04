import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

//truyen ung dun vao server
let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  //ham da khai bao co mau vang nhat
  return app.use("/", router);
};

module.exports = initWebRoutes;
