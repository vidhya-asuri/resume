var skills = ["Web development", "PHP","Javascript","Python(Intermediate level)"];
/*
name : string
role : string
contacts : an object with
      mobile: string
      email: string 
      github: string
      twitter: string 
      location: string
welcomeMessage: string 
skills: array of strings
biopic: url
display: function
*/
var contacts = {
                "mobile" : "703-964-6274",
                "email" : "vid.sigsoln@gmail.com",
                "github" : "https://github.com/vidhya-asuri", 
                "twitter" : "",
                "location" : "Lexington, KY"
               }; 
               
/*
var bio = {
  "name" :"Vidhya Asuri",
  "role" :"Web Developer",
  "email": "vid.sigsoln@gmail.com",
  "contact_info" : "1757 Cold Harbor Dr, Lexington, KY 40504",
  "mobile" : "703-964-6274",
  "github" : "https://github.com/vidhya-asuri",
  "biopic" : "images/vid-logo.svg",
  "welcomeMessage" : "Hi! I'm a web developer living and working in Lexington, KY",
  "location" : "Lexington, KY",
  "letsConnect" : "Please email me with your enquiries/questions!",
  "skills" : skills
};*/

var display = function(){
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
/*
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">Contact me!</span><span class="white-text">%data%</span></li>';
*/
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
