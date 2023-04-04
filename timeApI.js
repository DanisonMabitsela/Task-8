async function updateTime() {
  try {
    let timeElement = document.getElementById("time");
    let response = await fetch("https://worldtimeapi.org/api/ip");
    let data = await response.json();
    let dateTimeData = data.datetime;
    timeElement.innerHTML = dateTimeData;
  } catch (error) {
    console.log(error);
  }
}

setInterval(updateTime, 1000);
updateTime();
