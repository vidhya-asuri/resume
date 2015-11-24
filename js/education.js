var education =
  {
    "schools" : [
      {
        "name" : "Udacity",
        "location" : "California, USA",
        "degree" : "Front End Web developer",
        "major" : "Front end web development",
        "dates" : "2015-2016",
        "url" : "http://www.udacity.com"
      },
      {
        "name" : "University of Kansas",
        "location" : "Kansas, USA",
        "degree" : "Masters",
        "major" : "Elec. Engg.",
        "dates" : "1998-2000",
        "url" : "http://www.ku.edu"
      },
      {
        "name" : "Annamalai University",
        "location" : "India",
        "degree" : "Bachelor of Engg.",
        "major" : "Elec. Engg.",
        "dates" : "1992-1996",
        "url" : "http://www.annamalaiuniversity.ac.in"
      }
    ],
    "onlineCourses" : [
      {
        "title" : "Front end Web developer",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },
      {
        "title" : "Object Oriented Javascript",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },
      {
        "title" : "Javascript Basics",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },
      {
        "title" : "How to use Git and GitHub",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },
      {
        "title" : "Responsive web design fundamentals",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },
      {
        "title" : "Javascript Design Patterns",
        "school" : "Udacity",
        "date" : "2015",
        "url" : "http://www.udacity.com"
      },

    ],
    "display": function(){

      $("#education").append(HTMLschoolStart);
      var educationSchools  = education["schools"];

      for(var i=0; i < educationSchools.length; i++)
      {
        var school = HTMLschoolName.replace("#",educationSchools[i].url);
        var mySchool = school.replace("%data%",educationSchools[i].name);
        var degree = HTMLschoolDegree.replace("%data%",educationSchools[i].degree);
        $(".education-entry").append(mySchool + degree);
        var city  = HTMLschoolLocation.replace("%data%",educationSchools[i].location);
        $(".education-entry").append(city);
        var date = HTMLschoolDates.replace("%data%",educationSchools[i].dates);
        $(".education-entry").append(date);
        var major = HTMLschoolMajor.replace("%data%",educationSchools[i].major);
        $(".education-entry").append(major);
      }
      $(".education-entry").append(HTMLonlineClasses);
      var onlineClasses  = education["onlineCourses"];
      for(var i=0; i < onlineClasses.length; i++)
      {
        var title = HTMLonlineTitle.replace("%data%",onlineClasses[i].title);
        var school = HTMLonlineSchool.replace("%data%",onlineClasses[i].school);
        $(".education-entry").append(title + school);
        var date  = HTMLonlineDates.replace("%data%",onlineClasses[i].date);
        $(".education-entry").append(date);
        var url  = HTMLonlineURL.replace("%data%",onlineClasses[i].url);
        $(".education-entry").append(url);
      }
    } 

 };

/*
$("#education").append(HTMLschoolStart);

var educationSchools  = education["schools"];


for(var i=0; i < educationSchools.length; i++)
{
  var school = HTMLschoolName.replace("#",educationSchools[i].url);
  var mySchool = school.replace("%data%",educationSchools[i].name);

  var degree = HTMLschoolDegree.replace("%data%",educationSchools[i].degree);
  $(".education-entry").append(mySchool + degree);

  var city  = HTMLschoolLocation.replace("%data%",educationSchools[i].location);
  $(".education-entry").append(city);

  var date = HTMLschoolDates.replace("%data%",educationSchools[i].dates);
  $(".education-entry").append(date);

  var major = HTMLschoolMajor.replace("%data%",educationSchools[i].major);
  $(".education-entry").append(major);
}

$(".education-entry").append(HTMLonlineClasses);

var onlineClasses  = education["onlineCourses"];

for(var i=0; i < onlineClasses.length; i++)
{
  var title = HTMLonlineTitle.replace("%data%",onlineClasses[i].title);

  var school = HTMLonlineSchool.replace("%data%",onlineClasses[i].school);
  $(".education-entry").append(title + school);

  var date  = HTMLonlineDates.replace("%data%",onlineClasses[i].date);
  $(".education-entry").append(date);

  var url  = HTMLonlineURL.replace("%data%",onlineClasses[i].url);
  $(".education-entry").append(url);
}
*/

/*
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
*/


education.display(); 
