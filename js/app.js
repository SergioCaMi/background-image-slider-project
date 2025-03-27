// Estado inicial

const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];
const frameImage = document.querySelector(".img-container");
const btnSlider = document.querySelectorAll(".btn");
const directoryURL = "/img/";
const ext = ".jpeg";
let imageIndex = 0;


btnSlider.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-left")) {
      //Actualizamos variables
      if (imageIndex == 0){
        imageIndex = pictures.length - 1;
      } else {
        imageIndex--;
      }
      console.log(imageIndex + "/"+(pictures.length - 1));
    } else if (e.target.classList.contains("btn-right")) {
      //Actualizamos variables
      if (imageIndex == pictures.length - 1){
        imageIndex = 0;
      } else {
        imageIndex++;
      }
      console.log(imageIndex + "/"+(pictures.length - 1));
    }
    //Actualizamos DOM
    frameImage.style.backgroundImage = `url('${
      directoryURL + pictures[imageIndex] + ext
    }')`;
  });
});
