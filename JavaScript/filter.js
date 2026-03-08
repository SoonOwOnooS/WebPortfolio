const projects = document.querySelectorAll(".port-box");
const categoryButtons = document.querySelectorAll(".category-item");
const filterButtons = document.querySelectorAll(".filter-button button");

let currentType = "technical";
let currentTime = "all";

function filterProjects(){

    projects.forEach(project => {

        const type = project.dataset.type;
        const time = project.dataset.time;

        if(type !== currentType){
            project.classList.add("hide");
            project.classList.remove("show");
            return;
        }

        if(currentTime === "all" || time === currentTime){
            project.classList.remove("hide")
            project.classList.add("show")
        }
        else{
            project.classList.add("hide");
            project.classList.remove("show");
        }
    });
}

categoryButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        currentType = btn.dataset.type;
        filterProjects();
    });
});

filterButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{

        filterButtons.forEach(b=>{
            b.querySelector("span").classList.remove("active");
        })

        btn.querySelector("span").classList.add("active");

        currentTime = btn.dataset.time;
        filterProjects();
    });
});

document.querySelector('.filter-button button[data-time="all"] span').classList.add("active");
filterProjects();