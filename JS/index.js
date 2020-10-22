$( document ).ready(function() {
    $(".hero").animate({"opacity": "100%"}, {duration: 1500, queue: false});
    $(".hero").animate({"left": "150px"}, {duration: 1500, queue: false});


$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".nav").animate({"opacity": "100%"}, 1000)
      $(".navlinks").animate({"margin-top" : "10px"}, 1000)
      $(".logo").animate({"margin-top" : "10px"}, 1000)
    }
});



$("#hamburger").click(function(){
  $("#dropDown").slideToggle().css("display", "flex")
  $("#cancel").toggle();
  $("#hamburger").toggle();
})

$("#cancel").click(function(){
  $("#dropDown").slideToggle().css("display", "flex")
$("#cancel").toggle();
  $("#hamburger").toggle();
})


function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - diameter - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
})