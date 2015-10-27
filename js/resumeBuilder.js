var formattedRole = "Web Developer";
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
  "location" : "Lexington, KY 40504",
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
var skills = HTMLskills.replace("%data%",bio.skills);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").prepend(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#header").append(bioPic);
$("#header").append(welcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(skills);
$("#footerContacts").append(letsConnect);

/*
    <div id="header" class="center-content clearfix">
      <ul id="topContacts" class='flex-box'></ul>
    </div>
    <div style='clear: both;'></div>
    <div id="workExperience" class='gray'>
      <h2>Work Experience</h2>
    </div>
    <div id="projects">
      <h2>Projects</h2>
    </div>
    <div id="education" class='gray'>
      <h2>Education</h2>
    </div>
    <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2>
    </div>
    <div id="letsConnect" class='dark-gray'>
      <h2 class='orange center-text'>Let's Connect</h2>
        <ul id="footerContacts" class="flex-box">
      </ul>
    </div>
  </div>
var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3>';
var HTMLskillsUl = '<ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
*/
