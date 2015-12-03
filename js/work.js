/*
jobs: array of objects with
     employer: string 
     title: string 
     location: string 
     dates: string (works with a hyphen between them)
     description: string 
display: function

*/


var work = {
   jobs: [
     {
       "employer" : "Galmont-SQS USA",
       "title": "Test automation engineer/Quality Assutrance engineer",
       "location": "Kentucky, USA",
       "dates" : "July 2014 - Current",
       "url": "http://www.sqs.com/us/",
       "description": "Create and run test scripts,test cases.Develop intranet website for interviewing and reviewing new employees"
     },
     {
       "employer" : "Signal Solutions, LLC",
       "title": "System administrator,Web developer",
       "location": "Kentucky, USA",
       "dates" : "June 2013 - July 2014",
       "url": "http://www.sigsoln.com/",
       "description": "Implement website using HTML/CSS/PHP; Write MATLAB scripts to analyze mouse EEG data;Set up and run experiments to validate and debug issues with company products."
     },
     {
       "employer" : "Tata Consultancy Services",
       "title": "Software engineer",
       "location": "Chennai, India",
       "dates" : "December 2004 - June 2005",
       "url": "http://www.tcs.com/software/Pages/default.aspx",
       "description": "Create and run shell scripts to monitor performance and activity of utilities designed to collect status of various bond markets."
     },
     {
       "employer" : "Flint Hills Scientific, LLC",
       "title": "Software engineer",
       "location": "Chennai, India",
       "dates" : "June 2001 - June 2004",
       "url": "http://www.fhs.lawrence.ks.us/",
       "description": "Implement alogirthms using MFC/C++;write MATLAB scripts for digital signal processing.   "
     }
  ],
  "displayWork" : function(){
     for(var i = 0; i < this.jobs.length; i++)
     {
       $("#workExperience").append(HTMLworkStart);
       var employer = HTMLworkEmployer.replace("%data%",this.jobs[i].employer);
       employer = employer.replace("#",this.jobs[i].url);
       var title = HTMLworkTitle.replace("%data%",this.jobs[i].title);
       var employerPlusTitle = employer + title;
       $(".work-entry:last").append(employerPlusTitle);
       var date = HTMLworkDates.replace("%data%",this.jobs[i].dates);
       $(".work-entry:last").append(date);
       var myLocation = HTMLworkLocation.replace("%data%",this.jobs[i].location);
       $(".work-entry:last").append(myLocation);
       //locations.push(myLocation);
       var desc = HTMLworkDescription.replace("%data%",this.jobs[i].description);
       $(".work-entry:last").append(desc);
     } 
  }
};
work.displayWork();
