/*
schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
onlineCourses: array of objects with
     title: string
     school: string
     date: integer (date finished)
     url: string
display: function
*/

var education =
  {
    "schools" : [
      {
        "name" : "Udacity",
        "location" : "California, USA",
        "degree" : "Front End Web developer",
        "major" : "Front end web development",
        "dates" : "Sep 2015 - Jan 2016",
        "url" : "http://www.udacity.com"
      },
      {
        "name" : "University of Kansas",
        "location" : "Kansas, USA",
        "degree" : "Masters",
        "major" : "Elec. Engg.",
        "dates" : "Jan 1998 - Dec 2000",
        "url" : "http://www.ku.edu"
      },
      {
        "name" : "Annamalai University",
        "location" : "India",
        "degree" : "BE",
        "major" : "Elec. Engg.",
        "dates" : "1992-1996",
        "url" : "http://www.annamalaiuniversity.ac.in"
      }
    ]
 };



$("#education").append(HTMLschoolStart);

var educationSchools  = education["schools"];


for(var i=0; i < educationSchools.length; i++)
{
  var school = HTMLschoolName.replace("#",educationSchools[i].url);
  var mySchool = school.replace("%data%",educationSchools[i].name);
  $(".education-entry").append(mySchool);

  var degree = HTMLschoolDegree.replace("%data%",educationSchools[i].degree);
  $(".education-entry").append(degree);

  var city  = HTMLschoolLocation.replace("%data%",educationSchools[i].location);
  $(".education-entry").append(city);

  var date = HTMLschoolDates.replace("%data%",educationSchools[i].dates);
  $(".education-entry").append(date);

  var major = HTMLschoolMajor.replace("%data%",educationSchools[i].major);
  $(".education-entry").append(major);
}
