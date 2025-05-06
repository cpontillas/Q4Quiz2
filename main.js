function calculateAverage() {
  // Get the values of each subject and convert them to numbers
  var science = parseFloat(document.getElementById('science').value);
  var math = parseFloat(document.getElementById('math').value);
  var english = parseFloat(document.getElementById('english').value);

  // Calculate the average of the grades
  var average = (science + math + english) / 3;

  // Assign a rating based on the average
  var rating;
  if (average >= 94) {
    rating = "Excellent";
  } else if (average >= 87) {
    rating = "Above Satisfactory";
  } else if (average >= 80) {
    rating = "Satisfactory";
  } else if (average >= 75) {
    rating = "Needs Improvement";
  } else {
    rating = "Poor";
  }

  // Display the result
  alert("Average: " + average.toFixed(2) + "\nRating: " + rating);
}