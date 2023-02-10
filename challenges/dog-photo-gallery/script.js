async function getDogImages(){
    try {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const imageData = await response.json();
  return imageData.message
 
} catch(error){
console.log(error);
}
}

const button = document.getElementById("click-me");
button.addEventListener("click", async()=>{
    const getUl = document.getElementById("dog-photo-ul");
    const makeList = document.createElement("li");
    const displayImage = document.createElement("img");
    displayImage.src = await getDogImages()
    getUl.appendChild(makeList);
    makeList.appendChild(displayImage);
})