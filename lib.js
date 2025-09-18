import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"


document.querySelectorAll(".img-container > div").forEach((item) => {
    scroll(animate(item, {
        opacity: [1, 0.25, 0.25, 1],
        filter: ["blur(100px)", "blur(0px)", "blur(0px)", "blur(100px)"],
    }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"],
    })
})


document.querySelectorAll(".img-container.v2").forEach((item) => {
    scroll(animate(item, {
        opacity: [0, 1, 1, 0],
        filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"],
    }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"],
    })
})

document.querySelectorAll(".img-container > .text-content").forEach((item) => {
    scroll(animate(item, {
        opacity: [0, 1, 1, 0],
        filter: ["blur(30px)", "blur(0px)", "blur(0px)", "blur(30px)"],

    }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"],
    })
})

