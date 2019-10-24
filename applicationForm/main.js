var firebaseConfig = {
    apiKey: "AIzaSyBODTQv24FC1h4HrS5EhQYlBKZB01un0Ak",
    authDomain: "wit-website-53a20.firebaseapp.com",
    databaseURL: "https://wit-website-53a20.firebaseio.com",
    projectId: "wit-website-53a20",
    storageBucket: "wit-website-53a20.appspot.com",
    messagingSenderId: "760069624425",
    appId: "1:760069624425:web:2355e16b477043b93dc8f8",
    measurementId: "G-H53W7SVNEP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var university = getInputVal('university');
  var uni_year = getInputVal('uni_year');
  var linkedin = getInputVal('linkedin');
  var email = getInputVal('email');
  var message1 = getInputVal('message1');
  var message2 = getInputVal('message2');
  var message3 = getInputVal('message3');

  // Save message
  saveMessage(name, university, uni_year, linkedin, email, message1, message2, message3);

  // Show alert
 document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
 setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, university, uni_year, linkedin, email, message1, message2, message3){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    university:university,
    uni_year:uni_year,
    linkedin:linkedin,
    email:email,
    message1:message1,
    message2:message2,
    message3:message3
  });
}