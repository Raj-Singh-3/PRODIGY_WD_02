let [sec, mins, hour] = [0, 0, 0];
let value = document.getElementById("value1");
let x = null;

function increaser() {
  sec++;
  if (sec == 60) {
    sec = 0;
    mins++;
    if (mins == 60) {
      mins = 0;
      hour++;
    }
  }
  let h = hour < 10 ? "0" + hour : hour;
  let m = mins < 10 ? "0" + mins : mins;
  let s = sec < 10 ? "0" + sec : sec;
  value.innerHTML = h + ":" + m + ":" + s;
}

function startTimer() {
  if (x !== null) {
    clearInterval(x);
  }
  x = setInterval(increaser, 1000);
}

function stopTimer() {
  clearInterval(x);
}

function resetTimer() {
  clearInterval(x);
  [sec, mins, hour] = [0, 0, 0];
  value.innerHTML = "00:00:00";
}
