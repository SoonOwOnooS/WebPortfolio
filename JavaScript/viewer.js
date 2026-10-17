(() => {
    const viewer = document.getElementById("imageViewer");
    const viewerImg = document.getElementById("viewerImg");
    if (!viewer || !viewerImg) return;
    const previousButton = viewer.querySelector(".viewer-btn.prev");
    const nextButton = viewer.querySelector(".viewer-btn.next");
    const closeButton = viewer.querySelector(".close");
    const panelBackdrop = document.querySelector(".pop-up-background");
    const imageSelector = ".panel-area-screenshot img, .panel-area-uv img, .main-area img";
    let images = [];
    let currentIndex = 0;
    let trigger = null;

    viewer.tabIndex = -1;
    viewer.inert = true;
    viewer.setAttribute("aria-hidden", "true");
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.setAttribute("aria-label", "Project image viewer");
    previousButton?.setAttribute("aria-label", "Previous image");
    nextButton?.setAttribute("aria-label", "Next image");
    closeButton?.setAttribute("aria-label", "Close image viewer");

    function showImage() {
        const image = images[currentIndex];
        if (!image) return;
        viewerImg.src = image.currentSrc || image.src;
        viewerImg.alt = image.alt && image.alt !== "Lazy Load Image" ? image.alt : "Project image";
        viewer.setAttribute("aria-label", `Project image viewer, image ${currentIndex + 1} of ${images.length}`);
        if (previousButton) previousButton.hidden = images.length < 2;
        if (nextButton) nextButton.hidden = images.length < 2;
    }

    function openViewer(image) {
        const panel = image.closest(".panel.active");
        if (!panel) return;
        images = [...panel.querySelectorAll(imageSelector)].filter(item => item.getAttribute("src"));
        currentIndex = images.indexOf(image);
        if (currentIndex < 0) return;
        trigger = image;
        showImage();
        viewer.classList.add("active");
        viewer.inert = false;
        viewer.setAttribute("aria-hidden", "false");
        window.portfolioDialogs?.syncScrollLock();
        (closeButton || viewer).focus({ preventScroll: true });
        if (panelBackdrop) {
            panelBackdrop.inert = true;
            panelBackdrop.setAttribute("aria-hidden", "true");
        }
    }

    function closeViewer(restoreFocus = true) {
        if (!viewer.classList.contains("active")) return;
        if (panelBackdrop && document.querySelector(".panel.active")) {
            panelBackdrop.inert = false;
            panelBackdrop.setAttribute("aria-hidden", "false");
        }
        if (restoreFocus && trigger?.isConnected) trigger.focus({ preventScroll: true });
        else if (viewer.contains(document.activeElement)) document.activeElement.blur();
        viewer.classList.remove("active");
        viewer.setAttribute("aria-hidden", "true");
        viewer.inert = true;
        window.portfolioDialogs?.syncScrollLock();
        trigger = null;
        images = [];
    }

    function moveImage(direction) {
        if (!images.length) return;
        currentIndex = (currentIndex + direction + images.length) % images.length;
        showImage();
    }

    document.querySelectorAll(imageSelector).forEach(image => {
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", "View full-size project image");
        image.addEventListener("click", () => openViewer(image));
        image.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openViewer(image);
            }
        });
    });
    previousButton?.addEventListener("click", () => moveImage(-1));
    nextButton?.addEventListener("click", () => moveImage(1));
    closeButton?.addEventListener("click", () => closeViewer());
    viewer.addEventListener("click", event => {
        if (event.target === viewer) closeViewer();
    });
    document.addEventListener("keydown", event => {
        if (!viewer.classList.contains("active")) return;
        if (event.key === "Escape") {
            event.preventDefault();
            closeViewer();
        } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            moveImage(event.key === "ArrowLeft" ? -1 : 1);
        } else {
            window.portfolioDialogs?.trapFocus(event, viewer);
        }
    });
    window.portfolioImageViewer = { close: closeViewer };
})();
