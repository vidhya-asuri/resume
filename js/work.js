var work = {
   workHistory: [
     {
       "company" : "Galmont-SQS USA",
       "dates" : "July 2014 - Current",
       "role": "Test automation engineer/Quality Assutrance engineer",
       "myLocation": "Kentucky, USA",
       "description": "Create and run test scripts,test cases.Develop intranet website for interviewing and reviewing new employees"
     },
     {
       "company" : "Signal Solutions, LLC",
       "dates" : "June 2013 - July 2014",
       "role": "System administrator,Web developer",
       "myLocation": "Kentucky, USA",
       "description": "Implement website using HTML/CSS/PHP; Write MATLAB scripts to analyze mouse EEG data;Set up and run experiments to validate and debug issues with company products."
     },
     {
       "company" : "Tata Consultancy Services",
       "dates" : "December 2004 - June 2005",
       "role": "Software engineer",
       "myLocation": "Chennai, India",
       "description": "Create and run shell scripts to monitor performance and activity of utilities designed to collect status of various bond markets."
     },
     {
       "company" : "Flint Hills Scientific, LLC",
       "dates" : "June 2001 - June 2004",
       "role": "Software engineer",
       "myLocation": "Chennai, India",
       "description": "Implement alogirthms using MFC/C++;write MATLAB scripts for digital signal processing.   "
     }
  ]
};


var workHistory = work['workHistory'];
var locations=[];
function displayWork(){
  for(job in work.workHistory)
  {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%",work.workHistory[job].company);
    var title = HTMLworkTitle.replace("%data%",work.workHistory[job].role);
    var employerPlusTitle = employer + title; 
    $(".work-entry:last").append(employerPlusTitle);

    var date = HTMLworkDates.replace("%data%",work.workHistory[job].dates);
    $(".work-entry:last").append(date);

    var myLocation = HTMLworkLocation.replace("%data%",work.workHistory[job].myLocation);
    $(".work-entry:last").append(myLocation);
    locations.push(myLocation); 

    var desc = HTMLworkDescription.replace("%data%",work.workHistory[job].description);
    $(".work-entry:last").append(desc);  

  }
}
displayWork();
console.log(locations);
