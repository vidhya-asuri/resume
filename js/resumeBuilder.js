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

var bio = {
  "name" :"Vidhya Asuri",
  "role" :"Web Developer",
  "contacts" : {
                "mobile" : "703-964-6274",
                "email" : "vid.sigsoln@gmail.com",
                "github" : "https://github.com/vidhya-asuri",
                "twitter" : "",
                "location" : "Lexington, KY"
               },
  "welcomeMessage" : "Hi! I'm a web developer living and working in Lexington, KY",
  "skills" : ["Web development", "PHP","Javascript","Python(Intermediate level)"],
  "biopic" : "images/vid-logo.svg",
  "display" : function(){

    var contact = HTMLcontactGeneric.replace("%contact%", "Location");
    var contactGeneric = contact.replace("%data%", this.contacts.location);
    var mobile = HTMLmobile.replace("%data%",this.contacts.mobile);
    var email = HTMLemail.replace("%data%",this.contacts.email);
    var github = HTMLgithub.replace("%data%",this.contacts.github);
    var twitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
    var letsConnect = HTMLlocation.replace("%data%",this.contacts.location);
    var myLocation = letsConnect.replace("Contact me!","location");
    var welcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
    var bioPic = HTMLbioPic.replace("%data%",this.biopic);
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(mobile);
    $("#topContacts").append(email);
    $("#topContacts").append(github);
    $("#topContacts").append(contactGeneric);
    $("#header").append(bioPic);
    $("#header").append(welcomeMsg);
    if(this.hasOwnProperty("skills")){
      $("#header").append(HTMLskillsStart);
      for(var i=0; i < this.skills.length; i++){
        var mySkills = HTMLskills.replace("%data%",this.skills[i]);
        $("#skills").append(mySkills);
      }
    }

    $("#footerContacts").append(myLocation);
    $("#footerContacts").prepend(mobile);
    $("#footerContacts").append(email);
    $("#footerContacts").append(github);

  } 
};
bio.display();
