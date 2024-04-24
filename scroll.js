scrolling = false
mouseY = 0
document.addEventListener('mousemove', (event) => {
    mouseY = event.clientY * 0.1;
});

mouse_scroll = function(mod) {
    window.scrollBy(0, -100 * mod);
    scrolling = true
    setTimeout(() => {
        scrolling = false
    }, 80);
}

setInterval(() => {
    if (mouseY <= 20 && scrolling == false) {
        mouse_scroll(1)
        console.log(scrolling)
    } else if (mouseY >=80 && scrolling == false) {
        mouse_scroll(-1)
    } else if (mouseY < 80 && mouseY > 20) {
        document.body.classList.add("stop-scrolling")
        setTimeout(() => {
            document.body.classList.remove("stop-scrolling")
        }, 1000);
    }
}, 50);