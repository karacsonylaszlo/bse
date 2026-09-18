/* ==========================================
   BETTER SOUND EUROPE
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   NAVBAR
========================================== */

const navbar = document.getElementById("navbar");


function updateNavbar() {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();



/* ==========================================
   MOBILE MENU
========================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileMenu.classList.toggle(
                    "open"
                );


            mobileMenuButton.classList.toggle(
                "active",
                isOpen
            );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /*
     * Close mobile menu when
     * clicking a navigation link.
     */

    const mobileLinks =
        mobileMenu.querySelectorAll(
            "a"
        );


    mobileLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );


                    mobileMenuButton.classList.remove(
                        "active"
                    );


                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}



/* ==========================================
   PROBLEM ACCORDION
========================================== */

const problemCards =
    document.querySelectorAll(
        ".problem-card"
    );


problemCards.forEach(
    (card) => {


        /*
         * Mouse click
         */

        card.addEventListener(
            "click",
            () => {

                toggleProblemCard(card);

            }
        );



        /*
         * Keyboard support
         *
         * Enter / Space
         */

        card.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    toggleProblemCard(card);

                }

            }
        );

    }
);



function toggleProblemCard(card) {

    const isActive =
        card.classList.contains(
            "active"
        );


    /*
     * Toggle the selected card.
     */

    card.classList.toggle(
        "active"
    );


    card.setAttribute(
        "aria-expanded",
        String(!isActive)
    );

}



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(
        ".problem-card, .standard, .roadmap-item"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) => {

        element.classList.add(
            "reveal-ready"
        );

        revealObserver.observe(
            element
        );

    }
);



/* ==========================================
   SMOOTH ANCHOR SCROLL
========================================== */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchorLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    !targetId
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    }
);



/* ==========================================
   DISCORD LINK
========================================== */

const discordLinks =
    document.querySelectorAll(
        'a[href*="discord.gg"]'
    );


discordLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening Better Sound Europe Discord..."
                );

            }
        );

    }
);