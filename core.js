


document.getElementById("toggle-menu").addEventListener("click", toggleClasses);

document.querySelectorAll(".nav-elements").forEach(function(element){
    element.addEventListener("touchstart", toggleColor);
})



function toggleColor(e){
    console.log(e.target);
    e.target.classList.toggle("element-click")
    e.target.classList.toggle("element-toggle-div")

}

function toggleClasses(){
    let menu = document.querySelectorAll(".toggle");
    let elements = document.querySelectorAll(".nav-elements");
    console.log(elements[0])
    elements.forEach(function (element){
        element.classList.toggle("elements-toggle");
    });
    menu[0].classList.toggle("toggle-nav");
    menu[1].classList.toggle("toggle-menu-container");
}
// function dropDownMenu(){
//     document.getElementById("menu").classList.toggle("show");
// }
// // let change = document.querySelector();

// function myFunction() {
//     document.getElementById("toggle-menu").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }