let shiftColor_timer;
let colors = ['red', 'yellow','green', 'blue'];

// Function accepts array of colors. For the sake of readability I'll left this function like this :)
function shiftColor(colors) {
    document.body.style.backgroundColor = colors[0]
    colors.push(colors.shift())
} 

shiftColor_timer = setInterval(shiftColor, 1000, colors);

// Below line stops body color from changing.
// clearInterval(shiftColor_timer);
