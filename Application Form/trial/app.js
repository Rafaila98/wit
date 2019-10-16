// Initialize Firebase(2)
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
  firebase.analytics();


//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  let bio = document.querySelector('#bio').value;
  let job = document.querySelector('#job').value;
  let interest = document.querySelector('#interest').value;

  //send message values
  sendMessage(name, email, password, bio, job, interest);

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email, password, bio, job, interest) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    password: password,
    bio: bio,
    job: job,
    Interest: interest
  });
}