var skills = ["Web development", "PHP","Javascript","Python(Intermediate level)"];
var bio = {
  "name" :"Vidhya Asuri",
  "role" :"Web Developer",
  "email": "vid.sigsoln@gmail.com",
  "contact_info" : "1757 Cold Harbor Dr, Lexington, KY 40504",
  "mobile" : "703-964-6274",
  "github" : "https://github.com/vidhya-asuri",
  "biopicUrl" : "images/vid-logo.svg",
  "welcomeMessage" : "Hi! I'm a web developer living and working in Lexington, KY",
  "location" : "Lexington, KY",
  "letsConnect" : "Please email me with your enquiries/questions!",
  "skills" : skills
};

var contact = HTMLcontactGeneric.replace("%data%", bio.contact_info);
var mobile = HTMLmobile.replace("%data%",bio.mobile);
var email = HTMLemail.replace("%data%",bio.email);
var github = HTMLgithub.replace("%data%",bio.github);
var letsConnect = HTMLlocation.replace("%data%",bio.letsConnect);
var welcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
var bioPic = HTMLbioPic.replace("%data%",bio.biopicUrl);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#header").append(bioPic);
$("#header").append(welcomeMsg);

if(bio.hasOwnProperty("skills")){
  $("#header").append(HTMLskillsStart);
  for(var i=0; i < bio.skills.length; i++){
    var mySkills = HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(mySkills);
  }
}

$("#footerContacts").append(letsConnect);
