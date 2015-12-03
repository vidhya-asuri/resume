var education =
  {
    "schools" : [
      {
        "name" : "Udacity",
        "location" : "California, USA",
        "degree" : "Front End Web developer",
        "majors" : ["Front end web development"],
        "dates" : "2015-2016",
        "url" : "http://www.udacity.com"
      },
      {
        "name" : "University of Kansas",
        "location" : "Kansas, USA",
        "degree" : "Masters",
        "majors" : ["Elec. Engg."],
        "dates" : "1998-2000",
        "url" : "http://www.ku.edu"
      },
      {
        "name" : "Annamalai University",
        "location" : "India",
        "degree" : "Bachelor of Engg.",
        "majors" : ["Elec. Engg."],
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
      var educationSchools  = this.schools;

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
        var majors = educationSchools[i].majors;
        for(var m = 0; m < majors.length; m++)
        {
          var major = HTMLschoolMajor.replace("%data%",majors[m]);
          $(".education-entry").append(major); 
        }
      }
      $(".education-entry").append(HTMLonlineClasses);
      var onlineClasses  = education.onlineCourses;
      for(var j=0; j < onlineClasses.length; j++)
      {
        var title = HTMLonlineTitle.replace("%data%",onlineClasses[i].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%",onlineClasses[i].school);
        $(".education-entry").append(title + onlineSchool);
        var onlineDate  = HTMLonlineDates.replace("%data%",onlineClasses[i].date);
        $(".education-entry").append(onlineDate);
        var url  = HTMLonlineURL.replace("%data%",onlineClasses[i].url);
        $(".education-entry").append(url);
      }
    } 

 };

education.display(); 
