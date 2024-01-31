const myButton = document.getElementById("myButton");
   
     myButton.addEventListener("click", () => {
       const wrap = document.getElementById("wrap");  // Get the containing element
       const wrapWidth = wrap.offsetWidth;  // Get the width of the containing element
       const wrapHeight = wrap.offsetHeight; // Get the height of the containing element
   
       // Generate random coordinates within the containing element's boundaries
       const randomX = Math.random() * (wrapWidth - myButton.offsetWidth);
       const randomY = Math.random() * (wrapHeight - myButton.offsetHeight);
   
       // Set the button's position using absolute coordinates
       myButton.style.position = "absolute";
       myButton.style.left = randomX + "px";
       myButton.style.top = randomY + "px";
     });