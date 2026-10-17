(() => {
    const backdrop = document.querySelector(".pop-up-background");
    const panels = [...document.querySelectorAll(".panel")];
    if (!backdrop) return;

    let trigger = null;
    let scrollLocked = false;
    let originalOverflow = "";
    const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    function isViewerOpen() {
        return Boolean(document.getElementById("imageViewer")?.classList.contains("active"));
    }

    function syncScrollLock() {
        const open = Boolean(document.querySelector(".panel.active")) || isViewerOpen();
        if (open && !scrollLocked) {
            originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            scrollLocked = true;
        } else if (!open && scrollLocked) {
            document.body.style.overflow = originalOverflow;
            scrollLocked = false;
        }
    }

    function focusableElements(container) {
        return [...container.querySelectorAll(focusableSelector)].filter(element =>
            element.getClientRects().length && !element.closest('[hidden], [aria-hidden="true"]')
        );
    }

    function focusWithin(container) {
        (focusableElements(container)[0] || container).focus({ preventScroll: true });
    }

    function trapFocus(event, container) {
        if (event.key !== "Tab") return;
        const focusable = focusableElements(container);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) {
            event.preventDefault();
            container.focus({ preventScroll: true });
        } else if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
            event.preventDefault();
            last.focus({ preventScroll: true });
        } else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) {
            event.preventDefault();
            first.focus({ preventScroll: true });
        }
    }

    function closePanel() {
        window.portfolioImageViewer?.close(false);
        if (trigger?.isConnected) trigger.focus({ preventScroll: true });
        panels.forEach(panel => {
            panel.classList.remove("active");
            panel.setAttribute("aria-hidden", "true");
            panel.querySelectorAll("video, audio").forEach(media => media.pause());
        });
        backdrop.classList.remove("active");
        backdrop.setAttribute("aria-hidden", "true");
        backdrop.inert = true;
        syncScrollLock();
        trigger = null;
    }

    function openPanel(button) {
        const panel = document.getElementById(button.dataset.target);
        if (!panel || !panel.classList.contains("panel")) return;
        trigger = button;
        panels.forEach(item => {
            item.classList.toggle("active", item === panel);
            item.setAttribute("aria-hidden", String(item !== panel));
        });
        backdrop.classList.add("active");
        backdrop.inert = false;
        backdrop.setAttribute("aria-hidden", "false");
        syncScrollLock();
        focusWithin(panel);
    }

    panels.forEach(panel => {
        panel.tabIndex = -1;
        panel.setAttribute("aria-hidden", "true");
        panel.querySelector(".close-btn")?.addEventListener("click", closePanel);
    });
    backdrop.setAttribute("aria-hidden", "true");
    backdrop.inert = true;
    document.querySelectorAll(".button-panel").forEach(button => {
        button.addEventListener("click", () => openPanel(button));
    });
    backdrop.addEventListener("click", event => {
        if (event.target === backdrop) closePanel();
    });
    document.addEventListener("keydown", event => {
        const panel = document.querySelector(".panel.active");
        if (!panel || isViewerOpen()) return;
        if (event.key === "Escape") {
            event.preventDefault();
            closePanel();
        } else {
            trapFocus(event, panel);
        }
    });

    window.portfolioDialogs = { syncScrollLock, focusWithin, trapFocus };
})();
