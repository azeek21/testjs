let shiftColor_timer;
let colors = ['red', 'yellow','green', 'blue'];

// Function accepts array of colors
function shiftColor(colors) {
    document.body.style.backgroundColor = colors[0]
    colors.push(colors.shift())
}
shiftColor_timer = setInterval(shiftColor, 1000, colors);
