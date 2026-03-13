const projects = document.querySelectorAll(".port-box");
const categoryButtons = document.querySelectorAll(".category-item");
const filterButtonContainer = document.querySelector(".filter-button");
const radios = document.querySelectorAll('.filter-person-or-group input[type="radio"]')

let currentCategory = "technical";
let currentType = "all";
let currentId = "all";

const buttonSets = {
    technical: `
    <button data-type="all" class="btn"><span>All</span></button>
    <button data-type="unity" class="btn"><span>Unity</span></button>
    <button data-type="unreal" class="btn"><span>Unreal</span></button>
    `,
    design: `
    <button data-type="all" class="btn"><span>All</span></button>
    <button data-type="2d" class="btn"><span>2D</span></button>
    <button data-type="3d" class="btn"><span>3D</span></button>
    `
};

function changeCategroy(category){
    filterButtonContainer.innerHTML = buttonSets[category];

    const newButtons = document.querySelectorAll(".filter-button button");

    newButtons.forEach(btn=>{
        btn.addEventListener("click",()=>{

            newButtons.forEach(b=>{
                b.querySelector("span").classList.remove("active");
            });

            btn.querySelector("span").classList.add("active");

            currentType = btn.dataset.type;
            filterProjects();
        });
    });
}

function filterProjects(){

    projects.forEach(project => {

        const category = project.dataset.category;
        const type = project.dataset.type;
        const id = project.id;

        if(category !== currentCategory){
            project.classList.add("hide");
            project.classList.remove("show");
            return;
        }

        if((currentType === "all" || currentType === type) &&
         (currentId === "all" || currentId === id)) {
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
        currentCategory = btn.dataset.category;
        changeCategroy(currentCategory)
        filterProjects();
    });
});


radios.forEach(radio => {
    radio.addEventListener("change",()=>{
        currentId = radio.id;
        filterProjects();
    })
})

changeCategroy(currentCategory)
filterProjects();
document.querySelector('.filter-button button[data-type="all"] span').classList.add("active");