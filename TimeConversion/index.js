const time = "05:20:34AM";

function timeConverter(time) {
  const timeArr = [...time];
  const length = timeArr.length;
  let amPM = timeArr.splice(length - 2, 2).join("");
  let hour = timeArr.splice(0, 2).join("");
  let timeToBeConverted = parseInt(hour);
  if (amPM === "AM" || timeToBeConverted === 12) {
    let minuteAndSeconds = timeArr.join("");
    if (timeToBeConverted === 12 && amPM === "AM") {
      hour = "00";
    }
    return hour.concat(minuteAndSeconds);
  } else {
    let convertedTime = (timeToBeConverted + 12).toString();
    convertedTime.split("");
    let joinedTime = timeArr.join("");
    let answer = convertedTime.concat(joinedTime);
    return answer;
  }
}

timeConverter(time);
