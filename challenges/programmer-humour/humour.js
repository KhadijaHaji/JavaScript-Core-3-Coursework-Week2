async function fetchProgrammeHumour() {
  try {
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    const humourData = await response.json();
    findImage = humourData.img;
    const displayImage = document.createElement("img");
    displayImage.src = findImage;
    const container = document.getElementById("container");
    container.appendChild(displayImage);
  } catch (error) {
    console.log(error);
  }
}
fetchProgrammeHumour();