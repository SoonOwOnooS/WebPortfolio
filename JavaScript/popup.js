document.querySelectorAll(".button-panel").forEach(box => {

    box.addEventListener("click", (e) => {
        e.stopPropagation();

        const target = box.dataset.target;
        console.log("Target panel id:", target)

        document.querySelectorAll(".panel").forEach(panel=>{
            panel.classList.remove("active");
        });

        document.getElementById(target).classList.add("active")

        document.querySelector(".pop-up-background")
                .classList.add("active");
    });
});

document.querySelectorAll(".close-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.querySelector(".pop-up-background")
            .classList.remove("active");

        document.querySelectorAll(".panel")
            .forEach(p=>p.classList.remove("active"));
    });
});
