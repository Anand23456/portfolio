
function sendNotification(e) {
    var userEmail = e.values[1];
    var userName = e.values[0]; 
    var subject = "New Form Submission";
    var message = "New submission from " + userName + " with email " + userEmail;
    
  
    MailApp.sendEmail("avulaanand59@gmail.com", subject, message);

}

