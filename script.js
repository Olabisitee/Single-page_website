function updateTimeAndDay() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const dayOfWeek = now.toLocaleString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });

  document.getElementById("utc-time").textContent = utcTime;
  document.getElementById("current-day").textContent = dayOfWeek;
}
updateTimeAndDay();

setInterval(updateTimeAndDay, 1000);
