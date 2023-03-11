const burgerBtn = document.getElementById("burger-btn")
const closeBtn = document.getElementById("close-btn")
const burgerIconContainer = document.getElementById("burger-icon-container")


    burgerBtn.addEventListener("click", function(event) {
    event.preventDefault()
    burgerIconContainer.style.display = "block"
    burgerBtn.style.opacity = 0
    setTimeout(function() {
      burgerIconContainer.style.opacity = 1
    }, 10)
  })

  closeBtn.addEventListener("click", function(event){
    event.preventDefault()
    burgerIconContainer.style.opacity = 0
    burgerBtn.style.opacity = 1
  })

  burgerIconContainer.addEventListener("transitionend", function(){
    if (burgerIconContainer.style.opacity === "0") {
        burgerIconContainer.style.display = "none"
    }
  })

  window.addEventListener("resize", function() {
    if (window.innerWidth >= 800) {
      burgerIconContainer.style.display = "none";
      burgerIconContainer.style.opacity = 0;
      burgerBtn.style.opacity = 1
    }
  });

 

  






