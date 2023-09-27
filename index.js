const main = document.getElementById("main");
// main.innerHTML = "<H1>Tigers</H1>";
// const newHeader = document.querySelector("H1");

// Move the newHeader variable assignment before removing the main element from the DOM

main.parentNode.removeChild(main);

const newHeader=document.createElement("H1")
newHeader.setAttribute("id","victory");

newHeader.textContent= "SHAL is the champion"