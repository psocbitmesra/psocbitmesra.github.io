window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.getElementById("instafeed-container").getElementsByTagName("*").setAttribute("target","_blank");
  });