var work = {
   jobs: [
     {
       "company" : "Galmont-SQS USA",
       "dates" : "July 2014 - Current",
       "role": "Test automation engineer/Quality Assutrance engineer",
       "myLocation": "Kentucky, USA",
       "url": "http://www.sqs.com/us/",
       "description": "Create and run test scripts,test cases.Develop intranet website for interviewing and reviewing new employees"
     },
     {
       "company" : "Signal Solutions, LLC",
       "dates" : "June 2013 - July 2014",
       "role": "System administrator,Web developer",
       "myLocation": "Kentucky, USA",
       "url": "http://www.sigsoln.com/",
       "description": "Implement website using HTML/CSS/PHP; Write MATLAB scripts to analyze mouse EEG data;Set up and run experiments to validate and debug issues with company products."
     },
     {
       "company" : "Tata Consultancy Services",
       "dates" : "December 2004 - June 2005",
       "role": "Software engineer",
       "myLocation": "Chennai, India",
       "url": "http://www.tcs.com/software/Pages/default.aspx",
       "description": "Create and run shell scripts to monitor performance and activity of utilities designed to collect status of various bond markets."
     },
     {
       "company" : "Flint Hills Scientific, LLC",
       "dates" : "June 2001 - June 2004",
       "role": "Software engineer",
       "myLocation": "Chennai, India",
       "url": "http://www.fhs.lawrence.ks.us/",
       "description": "Implement alogirthms using MFC/C++;write MATLAB scripts for digital signal processing.   "
     }
  ]
};

var workHistory = work['jobs'];
var locations=[];
function displayWork(){
  for(var i = 0; i < workHistory.length; i++)
  {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%",workHistory[i].company);
    employer = employer.replace("#",workHistory[i].url);
    var title = HTMLworkTitle.replace("%data%",workHistory[i].role);
    var employerPlusTitle = employer + title; 
    $(".work-entry:last").append(employerPlusTitle);

    var date = HTMLworkDates.replace("%data%",workHistory[i].dates);
    $(".work-entry:last").append(date);

    var myLocation = HTMLworkLocation.replace("%data%",workHistory[i].myLocation);
    $(".work-entry:last").append(myLocation);
    locations.push(myLocation); 

    var desc = HTMLworkDescription.replace("%data%",workHistory[i].description);
    $(".work-entry:last").append(desc);  

  }
}
displayWork();
console.log(locations);
