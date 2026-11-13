const button = document.getElementById("btn");
const dropdown = document.getElementById("dropdown");
const container = document.getElementById("container")

const toggleMenu = function (e) {
  e.stopPropagation();
  dropdown.classList.toggle("hidden");
  document.getElementById("arrow").classList.toggle("arrow");
};

const containerToggle = function(){
     dropdown.classList.remove("hidden");
     document.getElementById("arrow").classList.remove("arrow");
}

button.addEventListener("click", toggleMenu);
container.addEventListener("click", containerToggle) 



