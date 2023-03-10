window.addEventListener("load", init);

function init(){

const images = document.querySelectorAll(".keretes");

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.border = "20px solid white";
  });
  
  img.addEventListener("mouseout", () => {
    img.style.border = "none";
  });
});
}