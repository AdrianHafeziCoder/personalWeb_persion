// =====================================
// GSAP INITIALIZATION
// =====================================

gsap.registerPlugin(ScrollTrigger);

// =====================================
// SMART NAVBAR
// =====================================

const navbar = document.querySelector(".navbar");

let lastNavbarState = false;

function handleNavbarScroll() {
  const isScrolled = window.scrollY > 60;

  if (isScrolled !== lastNavbarState) {
    navbar.classList.toggle("is-scrolled", isScrolled);

    lastNavbarState = isScrolled;
  }
}

window.addEventListener("scroll", handleNavbarScroll, {
  passive: true,
});

handleNavbarScroll();

// =====================================
// INITIAL NAVBAR ANIMATION
// =====================================

gsap.from(".navbar", {
  y: -45,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

// =====================================
// HERO ANIMATION
// =====================================

const heroTimeline = gsap.timeline({
  delay: 0.25,
});

heroTimeline
  .from(".availability", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out",
  })

  .from(
    ".hero h1",
    {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=.35",
  )

  .from(
    ".hero-description",
    {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=.5",
  )

  .from(
    ".hero-buttons .btn",
    {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "back.out(1.5)",
    },
    "-=.4",
  )

  .from(
    ".hero-socials .social-icon",
    {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(2)",
    },
    "-=.4",
  )

  .from(
    ".profile-wrapper",
    {
      scale: 0.75,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.5)",
    },
    "-=1",
  );

// =====================================
// SCROLL REVEAL ANIMATIONS
// =====================================

gsap.utils.toArray(".reveal").forEach((element, index) => {
  gsap.fromTo(
    element,

    {
      y: 55,
      opacity: 0,
      scale: 0.97,
    },

    {
      y: 0,
      opacity: 1,
      scale: 1,

      duration: 0.9,

      ease: "power3.out",

      delay: element.classList.contains("skill-card") ? (index % 3) * 0.12 : 0,

      scrollTrigger: {
        trigger: element,

        start: "top 88%",

        once: true,
      },
    },
  );
});

// =====================================
// FLOATING BACKGROUND ANIMATION
// =====================================

gsap.to(".floating-blob", {
  y: -35,

  duration: 5,

  stagger: 1.5,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut",
});

// =====================================
// PROFILE FLOATING ANIMATION
// =====================================

gsap.to(".profile-wrapper", {
  y: -12,

  duration: 3,

  repeat: -1,

  yoyo: true,

  ease: "sine.inOut",
});

// =====================================
// SKILL CARD INTERACTION
// =====================================

document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.04,

      duration: 0.3,

      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,

      duration: 0.3,

      ease: "power2.out",
    });
  });
});

// =====================================
// REFRESH SCROLL TRIGGER
// =====================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
