document.addEventListener("DOMContentLoaded",function(){const l=document.getElementById("nav-toggle"),s=document.getElementById("nav-list"),c=document.getElementById("nav-overlay"),o=document.getElementById("search-toggle"),e=document.querySelector(".nav__search"),t=document.getElementById("search-toggle");function n(){return window.innerWidth<=850}function i(){n()?(s.classList.toggle("active"),c.classList.toggle("active"),e.classList.remove("active"),t.style.display="block"):(s.classList.remove("active"),c.classList.remove("active"))}function a(){n()&&(e.classList.toggle("active"),e.classList.contains("active")?t.style.display="none":t.style.display="block")}l.addEventListener("click",function(){i()}),c.addEventListener("click",function(){i()}),o.addEventListener("click",function(){a()}),e.addEventListener("focus",function(){t.style.display="none"}),e.addEventListener("blur",function(){n()&&(t.style.display="block")}),document.addEventListener("click",function(d){!d.target.closest(".nav__center")&&n()&&(e.classList.remove("active"),t.style.display="block")})});
