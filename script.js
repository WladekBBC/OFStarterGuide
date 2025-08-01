window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const myButton = document.getElementById("myBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  }
  
  
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

  function toggleDropdown() {
    const menu = document.getElementById("dropdown-content");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].style.display === "block") {
          dropdowns[i].style.display = "none";
        }
      }
    }
  }

  