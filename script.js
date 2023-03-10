function calculate() {
  var bedtimeInput = document.getElementById("bedtime");
  var wakeupInput = document.getElementById("wakeup");
  var resultElement = document.getElementById("result");

  var bedtime = bedtimeInput.value;
  var wakeup = wakeupInput.value;

  // Create date objects from input values
  var bedtimeDate = new Date(`2000-01-01T${bedtime}:00`);
  var wakeupDate = new Date(`2000-01-01T${wakeup}:00`);

  // Calculate difference in hours
  var hoursDiff = (wakeupDate.getTime() - bedtimeDate.getTime()) / 3600000;

  // Handle negative differences (when bedtime is after wakeup time)
  if (hoursDiff < 0) {
    hoursDiff += 24;
  }

  // Display result
  resultElement.innerHTML = `You slept for ${hoursDiff.toFixed(2)} hours.`;
}
