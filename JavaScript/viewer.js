const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

const prevBtn = document.querySelector(".viewer-btn.prev");
const nextBtn = document.querySelector(".viewer-btn.next");

let images = [];
let currentIndex = 0;

document.querySelectorAll(
".panel-area-screenshot img, .panel-area-uv img, .main-area img"
).forEach(img=>{

    img.addEventListener("click",()=>{

        const panel = document.querySelector(".panel.active");

        images = [...panel.querySelectorAll(
        ".panel-area-screenshot img, .panel-area-uv img, .main-area img"
        )];

        currentIndex = images.indexOf(img);

        viewerImg.src = img.src;

        viewer.classList.add("active");

    });

});

nextBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % images.length;
    viewerImg.src = images[currentIndex].src;
});

prevBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImg.src = images[currentIndex].src;
});

viewer.addEventListener("click",(e)=>{
    if(e.target === viewer){
        viewer.classList.remove("active");
    }
});

prevBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
});

nextBtn.addEventListener("click",(e)=>{
    e.stopPropagation();
});

const closeBtn = document.querySelector(".image-viewer .close");

closeBtn.addEventListener("click", () => {
    document.getElementById("imageViewer").classList.remove("active");
});