function updateTime() {
  // Update the time on the webpage
  let timeElement = document.getElementById("time");
  //fetched time api
  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      let dateTimeData = data.datetime;
      timeElement.innerHTML = dateTimeData;
    })
    .catch((error) => console.log(error));
}
// Update the time every second
setInterval(updateTime, 1000);
updateTime();
