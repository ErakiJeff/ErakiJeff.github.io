let caleb = document.getElementById("Caleb");
const normal = "caleb.webp";
const thonk = "5head.webp";

window.addEventListener("mousemove", function(e) {
    let targetx = e.x - (caleb.getBoundingClientRect().left + caleb.getBoundingClientRect().right) / 2;
    let targety = e.y - (caleb.getBoundingClientRect().top + caleb.getBoundingClientRect().bottom) / 2;
    let angle = Math.atan2(targety, targetx) / Math.PI * 180;

    caleb.setAttribute("style", "transform: rotate(" + angle + "deg);");
});
window.addEventListener("mousedown", function(e) {
    caleb.src = thonk;
});
window.addEventListener("mouseup", function(e) {
    caleb.src = normal;
});

caleb.ondragstart = () => {return false;};
