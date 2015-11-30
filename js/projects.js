var projects = {
   "prjList": [
     {
       "title" : "Profile page",
       "tech" : "HTML/CSS/Javascript",
       "description": "Page containing projects i have worked on.",
       "dates_worked": "Sep 2015",
       "images": ["./images/vid-logo.svg"]
     },
     {
       "title" : "Online resume",
       "tech" : "HTML/CSS/Javascript",
       "description": "Page containing an online version of my resume.",
       "dates_worked": "Sep 2015",
       "images": ["./images/vid-logo.svg"]
     },
  ],
  "display" : function(){
    $("#projects").append(HTMLprojectStart);
    for(var i=0; i < this.prjList.length; i++)
    {
      var title = HTMLprojectTitle.replace("%data%",this.prjList[i].title);
      $(".project-entry:last").append(title);
      var date = HTMLprojectDates.replace("%data%",this.prjList[i].dates_worked);
      $(".project-entry:last").append(date);
      var desc = HTMLprojectDescription.replace("%data%",this.prjList[i].description);
      $(".project-entry:last").append(desc);
      var image = HTMLprojectImage.replace("%data%",this.prjList[i].images[0]);
      $(".project-entry:last").append(image);
    }
  } 
};

projects.display();
