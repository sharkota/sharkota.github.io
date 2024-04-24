links = document.querySelectorAll("a.large")
colors = [
    "#eb6f92",
    "#f6c177",
    "#31748f",
    "#9ccfd8",
    "#a562f5"
]
index = -1
for (link of links) {
        index += 1
        if (index > colors.length - 1) {
            link.style.color = colors[index - colors.length + 1]
            link.style.backgroundColor = colors[index - colors.length]
        } else if (index == 0) {
            link.style.color = colors[4]
            link.style.backgroundColor = colors[3]
        } else {
            link.style.backgroundColor = colors[index-1]
            link.style.color = colors[index]
        }
    }