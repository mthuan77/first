import express from "express";

//bien var:global let:local
let configViewEngine = (app) => {
  //arrow function
  //import de client co the truy cap vao file
  app.use(express.static("./src/public"));
  //set view engine co ten ejs (thu vien ejs,tuong tu jsp java va blade php)
  app.set("view engine", "ejs"); //go logic trong html
  //link den thu muc view
  app.set("views", "./src/views");
  //vi da goi thu muc src nen o controller khong can goi src/views
};

module.exports = configViewEngine;
