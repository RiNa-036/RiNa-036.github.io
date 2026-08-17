// ================= SECTION REVEAL ANIMATION =================

const sections = document.querySelectorAll(".content-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// ================= SMOOTH NAVIGATION =================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        }

    });

});


// ================= ACTIVE NAVIGATION =================

const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);

document.querySelectorAll("main section").forEach((section) => {
    navObserver.observe(section);
});


// ================= PAGE LOAD ANIMATION =================

window.addEventListener("load", () => {

    const home = document.querySelector(".home");

    if (home) {
        home.classList.add("loaded");
    }

});