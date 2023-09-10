// Displays days of the week in real time

function getDateTime() {
  const today = new Date();
  const day = today.getUTCDay();

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const displayDayEl = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  displayDayEl.innerHTML = dayList[day];

  // Display the current UTC time in milliseconds

  let hour = today.getUTCHours();
  let minute = today.getUTCMinutes();
  let second = today.getUTCSeconds();
  let milliseconds = today.getMilliseconds().toString().substring(0, 2);

  const prepend = hour >= 12 ? " PM" : " AM";
  hour = hour >= 12 ? hour - 12 : hour;
  minute = checkTime(minute);
  second = checkTime(second);
  // milliseconds = checkTime(milliseconds);

  if (hour === 0 && prepend === PM) {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepend = " noon";
    } else {
      hour = 12;
      prepend = " PM";
    }
  }

  if (hour === 0 && prepend === AM) {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepend = " midnight";
    } else {
      hour = 12;
      prepend = " AM";
    }
  }

  const displayTimeEl = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  displayTimeEl.innerHTML = today.getTime();
  // `${today.getTime()}:${minute}:${second}:${milliseconds}${prepend}`;

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  setTimeout(getDateTime, 100);
}

getDateTime();
