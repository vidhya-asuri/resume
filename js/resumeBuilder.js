var skills = ["Web development", "PHP","Javascript","Python(Intermediate level)"];
var contacts = {
                "mobile" : "703-964-6274",
                "email" : "vid.sigsoln@gmail.com",
                "github" : "https://github.com/vidhya-asuri", 
                "twitter" : "",
                "location" : "Lexington, KY"
               }; 
               

var display = function(){

  var contact = HTMLcontactGeneric.replace("%contact%", "Location");
  var contactGeneric = contact.replace("%data%", bio.contacts.location);
  var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  var email = HTMLemail.replace("%data%",bio.contacts.email);
  var github = HTMLgithub.replace("%data%",bio.contacts.github);
  var twitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
  var letsConnect = HTMLlocation.replace("%data%",bio.contacts.location);
  var myLocation = letsConnect.replace("Contact me!","location");
  var welcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
  var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").prepend(mobile);
  $("#topContacts").append(email);
  $("#topContacts").append(github);
  $("#topContacts").append(contactGeneric);
  $("#header").append(bioPic);
  $("#header").append(welcomeMsg);
  if(bio.hasOwnProperty("skills")){
    $("#header").append(HTMLskillsStart);
    for(var i=0; i < bio.skills.length; i++){
      var mySkills = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(mySkills);
    }
  }  

  $("#footerContacts").append(myLocation);
  $("#footerContacts").prepend(mobile);
  $("#footerContacts").append(email);
  $("#footerContacts").append(github);

};

var bio = {
  "name" :"Vidhya Asuri",
  "role" :"Web Developer",
  "email": "vid.sigsoln@gmail.com",
  "contacts" : contacts,
  "biopic" : "images/vid-logo.svg",
  "welcomeMessage" : "Hi! I'm a web developer living and working in Lexington, KY",
  "letsConnect" : "",
  "skills" : skills,
  "display" : display 
};
bio.display();
