const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

function changeTrafficLight() {
    
    if (yellow.className === "light yellow-light") {
        yellow.className = "light light-off";
        red.className = "light red-light";
    } else if (red.className === "light red-light") {
        red.className = "light light-off";
        green.className = "light green-light";
    } else if (green.className === "light green-light") {
        green.className = "light light-off";
        yellow.className = "light yellow-light";
    }
    

}