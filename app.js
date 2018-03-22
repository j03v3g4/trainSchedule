// Initialize FireBase
var config = {
    apiKey: "AIzaSyAKQbcK2h7wVHkuGumpguLypT16E3bP6fI",
    authDomain: "trainschedule-42b7a.firebaseapp.com",
    databaseURL: "https://trainschedule-42b7a.firebaseio.com",
    storageBucket: "trainschedule-42b7a.appspot.com"
  };

  firebase.initializeApp(config);

var database = firebase.database();

// Button for adding trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstArrival = moment($("#firstArrival-input").val().trim(), "HH:mm").format("X");
  var frequency = $("#frequency-input").val().trim();

  // Creates local object for holding train information
  var newTrain = {
    trainName: trainName,
    destination: destination,
    firstArrival: firstArrival,
    frequency: frequency
  };

  console.log(newTrain);

  // Uploads train data to the database
  database.ref().push(newTrain);

// Clear inputs
  $("#trainName-input").val("");
  $("#destination-input").val("");
  $("#firstArrival-input").val("");
  $("#frequency-input").val("");
});