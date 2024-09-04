import db from "../models/index";
import CRUDService from "../services/CRUDService";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
    //dung ham render thay vi send
    //return res.render("homepage.ejs");
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
// object:{
//     key:"",
//     value:" "
// }
let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message); //du lieu tu form gui ve terminal
    return res.send("post crud from server"); //server gui phan hoi cho client
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error occurred");
  }
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("----------------");
  console.log(data);
  console.log("----------------");

  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;

  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // check user data not found
    //let userData
    //x<-y gan gia tri y cho x syntax a:b
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("user not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let allUsers = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUsers,
  });
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
};
