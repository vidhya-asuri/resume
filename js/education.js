var education =
  {
    "schools" : [
      {
        "name" : "Udacity",
        "city" : "California, USA",
        "degree" : "Front End Web developer",
        "major" : "Front end web development",
        "years" : "Sep 2015 - Jan 2016"
      },
      {
        "name" : "University of Kansas",
        "city" : "Kansas, USA",
        "degree" : "Masters",
        "major" : "Elec. Engg.",
        "years" : "Jan 1998 - Dec 2000"
      },
      {
        "name" : "Annamalai University",
        "city" : "India",
        "degree" : "BE",
        "major" : "Elec. Engg.",
        "years" : "1992-1996"
      }
    ]
 };


$("#education").append(HTMLschoolStart);

var educationSchools  = education["schools"];


for(var i=0; i < educationSchools.length; i++)
{
  var school = HTMLschoolName.replace("%data%",educationSchools[i].name);
  $(".education-entry").append(school);

  var degree = HTMLschoolDegree.replace("%data%",educationSchools[i].degree);
  $(".education-entry").append(degree);

  var city = HTMLschoolLocation.replace("%data%",educationSchools[i].city);
  $(".education-entry").append(city);

  var date = HTMLschoolDates.replace("%data%",educationSchools[i].years);
  $(".education-entry").append(date);

  var major = HTMLschoolMajor.replace("%data%",educationSchools[i].major);
  $(".education-entry").append(major);
}
