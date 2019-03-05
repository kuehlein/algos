// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// O(1) time | O(1) space --- *input size is fixed, thus constant time / space*
const timeConversion = s => {
  const amOrPm = s[8] === "P" ? 12 : 0
  let hour = Number(s[0] + s[1]) + amOrPm
  const minute = s[3] + s[4]
  const second = s[6] + s[7]

  if (hour % 12 === 0) hour = amOrPm ? "12" : "00"
  else if (hour < 10) hour = "0" + hour

  return [hour, minute, second].join(":") // .join() more optimal than reg str concatenation
}

console.log(timeConversion("07:05:45PM")) // "19:05:45"
console.log(timeConversion("12:40:22AM")) // "00:40:22"
console.log(timeConversion("06:40:03AM")) // "06:40:03"
console.log(timeConversion("12:45:54PM")) // "12:45:54"
