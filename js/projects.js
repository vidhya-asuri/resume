var project = {
   prjList: [
     {
       "title" : "Profile page",
       "tech" : "HTML/CSS/Javascript",
       "description": "Page containing projects i have worked on.",
       "dates": "Sep 2015",
       "image": "./images/vid-logo.svg"
     },
     {
       "title" : "Online resume",
       "tech" : "HTML/CSS/Javascript",
       "description": "Page containing an online version of my resume.",
       "dates": "Sep 2015",
       "image": "./images/vid-logo.svg"
     },
  ]
};

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/


var prjList  = project['prjList'];
project.display = function(){
  $("#projects").append(HTMLprojectStart);
  for(var i=0; i < prjList.length; i++)
  {
    var title = HTMLprojectTitle.replace("%data%",prjList[i].title);
    $(".project-entry:last").append(title);

    var date = HTMLprojectDates.replace("%data%",prjList[i].dates);
    $(".project-entry:last").append(date);

    var desc = HTMLprojectDescription.replace("%data%",prjList[i].description);
    $(".project-entry:last").append(desc);

    var image = HTMLprojectImage.replace("%data%",prjList[i].image);
    $(".project-entry:last").append(image);
  }
}

project.display();
