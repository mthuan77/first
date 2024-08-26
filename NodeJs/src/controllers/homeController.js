let getHomePage = (req, res) => {
  //dung ham render thay vi send
  return res.render("homepage.ejs");
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};
// object:{
//     key:"",
//     value:" "
// }
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
