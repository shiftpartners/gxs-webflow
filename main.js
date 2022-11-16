ScrollTrigger.matchMedia({
  all: function () {
    gsap.to(".body", {
      scrollTrigger: {
        trigger: ".body",
        toggleActions: "play none reverse none",
        start: "top 0%",
        end: "bottom 100%",
        scrub: 2,
      },
    });

    //  text highlight
    gsap.fromTo(
      ".text-highlight",
      { width: "0%", backgroundColor: "#771fff00" },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none none none",
          start: `top center`,
          end: `top center`,
        },
        width: "100%",
        ease: "expo.out",
        display: "table-caption",
        backgroundColor: "#771fff",
        delay: 0.5,
      }
    );

    // Benefit gradient headers
    gsap.fromTo(
      ".benefit-content-header-1",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".benefit-1-image-block",
          toggleActions: "play none reverse none",
          start: "bottom 50%",
          end: "bottom 5%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );

    gsap.fromTo(
      ".benefit-content-header-2",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".benefit-2-image-block",
          toggleActions: "play none reverse none",
          start: "bottom 50%",
          end: "bottom 5%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );

    // Tech under Gradient\
    gsap.fromTo(
      ".tech-gradient",
      {
        backgroundPosition: "100% 50%",
        scaleY: 1,
      },
      {
        scrollTrigger: {
          trigger: ".tech-gradient",
          toggleActions: "play none reverse none",
          start: "bottom 75%",
          end: "bottom 25%%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
        ease: "expo.out",
        scaleY: 0.1,
      }
    );

    // Signup gradient headers
    gsap.fromTo(
      ".huge-signup-header",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".gradient-text-wrapper",
          toggleActions: "play none reverse none",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );
    // coming soon headers
    gsap.fromTo(
      ".coming-soon-gradient",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".coming-soon-gradient",
          toggleActions: "play none reverse none",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );

    // product gradient headers
    gsap.fromTo(
      ".product-content-gradient-header.a",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.a",
          toggleActions: "play none reverse none",
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );

    // product gradient headers
    gsap.fromTo(
      ".product-content-gradient-header.b",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.a",
          toggleActions: "play none reverse none",
          start: "top 45%",
          end: "top 5%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );

    // product gradient headers
    gsap.fromTo(
      ".product-content-gradient-header.c",
      { backgroundPosition: "100% 50%" },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.b",
          toggleActions: "play none reverse none",
          start: "top 45%",
          end: "top 5%",
          scrub: 1,
        },
        backgroundPosition: "0% 50%",
      }
    );
  },

  // large screens
  "(min-width: 1919px)": function () {
    // // product snap
    // // second snap
    // gsap.fromTo(
    //   ".product-details-wrapper",
    //   { y: -450 },
    //   {
    //     scrollTrigger: {
    //       trigger: ".product-scroll-spacer.b",
    //       toggleActions: "play none reverse none",
    //       start: `top 5%`,
    //       end: `top 5%`,
    //       scrub: 2,
    //     },
    //     y: -900,
    //     duration: 1,
    //     ease: "expo.inOut",
    //   }
    // );

    // // first snap
    // gsap.fromTo(
    //   ".product-details-wrapper",
    //   { y: 0 },
    //   {
    //     scrollTrigger: {
    //       trigger: ".product-scroll-spacer.a",
    //       toggleActions: "play none reverse none",
    //       start: `top 5%`,
    //       end: `top 5%`,
    //       scrub: 2,
    //     },
    //     y: -450,
    //     duration: 1,
    //     ease: "expo.inOut",
    //   }
    // );

    // third text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -420 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -630,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // second text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -210 },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -420,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -210,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // Benefit image parallax
    gsap.fromTo(
      ".benefit-1-image-block",
      { backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-1-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundPosition: "50% 70% ",
      }
    );

    gsap.fromTo(
      ".benefit-2-image-block",
      { backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-2-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundPosition: "50% 60% ",
      }
    );

    // home hero content
    gsap.to(".home-hero-wrapper", {
      scrollTrigger: {
        trigger: ".imgc-wrap",
        toggleActions: "play none reverse none",
        start: `top top`,
        end: `bottom 75%`,
        scrub: 1,
        pin: ".home-hero-content",
        pinSpacing: false,
      },
    });

    // Home hero parallax
    gsap.fromTo(
      ".hcb.a .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.a",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "80%",
      }
    );

    gsap.fromTo(
      ".hcb.b .hero-image-1",
      { backgroundPositionY: "60%" },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "100%",
      }
    );

    gsap.fromTo(
      ".hcb.c .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    gsap.fromTo(
      ".hcb.d .trigger-img",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    // Better banking
    gsap.fromTo(
      ".fixed-text",
      { fontSize: "90px", x: 160, y: -80 },
      {
        scrollTrigger: {
          trigger: ".better-banking-wrapper",
          toggleActions: "play none reverse none",
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
        fontSize: "45px",
        x: 0,
        y: 0,
      }
    );
  },

  // desktop
  "(max-width: 1919px) and (min-width: 992px)": function () {
    // // product snap
    // gsap.to(".home-product-wrapper", {
    //   scrollTrigger: {
    //     trigger: ".product-details-scroll",
    //     toggleActions: "play none reverse none",
    //     start: `top top`,
    //     end: `bottom bottom`,
    //     scrub: 1,
    //     pin: ".product-details-wrapper",
    //     pinSpacing: false,
    //   },
    // });

    // // product snap

    // second snap
    gsap.fromTo(
      ".product-details-wrapper",
      { y: -450 },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.b",
          toggleActions: "play none reverse none",
          start: `top 55%`,
          end: `top 45%`,
          scrub: 2,
        },
        y: -900,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first snap
    gsap.fromTo(
      ".product-details-wrapper",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.a",
          toggleActions: "play none reverse none",
          start: `top 55%`,
          end: `top 45%`,
          scrub: 2,
        },
        y: -450,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    /** Text Scrolls **/

    // home hero content
    gsap.to(".home-hero-wrapper", {
      scrollTrigger: {
        trigger: ".imgc-wrap",
        toggleActions: "play none reverse none",
        start: `top top`,
        end: `bottom 75%`,
        scrub: 1,
        pin: ".home-hero-content",
        pinSpacing: false,
      },
    });

    // Home hero parallax
    gsap.fromTo(
      ".hcb.a .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.a",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "80%",
      }
    );

    gsap.fromTo(
      ".hcb.b .hero-image-1",
      { backgroundPositionY: "60%" },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "100%",
      }
    );

    gsap.fromTo(
      ".hcb.c .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    gsap.fromTo(
      ".hcb.d .trigger-img",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    // third text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -420 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -630,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // second text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -210 },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -420,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top 50%`,
          end: `top 50%`,
        },
        y: -210,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // Better banking

    gsap.fromTo(
      ".fixed-text",
      { fontSize: "90px", x: 160, y: -80 },
      {
        scrollTrigger: {
          trigger: ".better-banking-wrapper",
          toggleActions: "play none reverse none",
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
        fontSize: "45px",
        x: 0,
        y: 0,
      }
    );

    // Benefit image parallax
    gsap.fromTo(
      ".benefit-1-image-block",
      { backgroundSize: "1800px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-1-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "1440px",
        backgroundPosition: "50% 70% ",
      }
    );

    gsap.fromTo(
      ".benefit-2-image-block",
      { backgroundSize: "1800px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-2-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "1440px",
        backgroundPosition: "50% 70% ",
      }
    );
  },

  // tablet
  "(max-width: 991px) and (min-width:767px)": function () {
    // // product snap

    // second snap
    gsap.fromTo(
      ".product-details-wrapper",
      { x: -450 },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.b",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
          scrub: 2,
        },
        x: -916,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first snap
    gsap.fromTo(
      ".product-details-wrapper",
      { x: 0 },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.a",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
          scrub: 2,
        },
        x: -458,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    /** Text Scrolls **/
    gsap.to(".home-hero-wrapper", {
      scrollTrigger: {
        trigger: ".imgc-inner-wrap",
        toggleActions: "play none reverse none",
        start: `top top`,
        end: `105% top`,
        scrub: 1,
        pin: ".home-hero-content",
        pinSpacing: false,
      },
      onComplete: () => {
        ScrollTrigger.refresh(true);
        console.log("ScrollTrigger refreshing! -1 ");
      },
    });

    // third text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -320 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
        },
        y: -480,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // second text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -160 },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
        },
        y: -320,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
        },
        y: -160,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // Home hero parallax
    gsap.fromTo(
      ".hcb.a .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.a",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "80%",
      }
    );

    gsap.fromTo(
      ".hcb.b .hero-image-1",
      { backgroundPositionY: "60%" },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "100%",
      }
    );

    gsap.fromTo(
      ".hcb.c .hero-image-1",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    gsap.fromTo(
      ".hcb.d .trigger-img",
      { backgroundPositionY: "00%" },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "60%",
      }
    );

    // Benefit image parallax tab
    gsap.fromTo(
      ".benefit-1-image-block",
      { backgroundSize: "2200px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-1-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "1780px",
        backgroundPosition: "50% 70% ",
      }
    );

    gsap.fromTo(
      ".benefit-2-image-block",
      { backgroundSize: "2200px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-2-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "1700px",
        backgroundPosition: "50% 50% ",
      }
    );

    // Better banking TAB

    gsap.fromTo(
      ".fixed-text",
      { fontSize: "90px", x: 140, y: -160 },
      {
        scrollTrigger: {
          trigger: ".better-banking-wrapper",
          toggleActions: "play none reverse none",
          start: "top 50%",
          end: "top 10%",
          scrub: true,
        },
        fontSize: "45px",
        x: 0,
        y: 0,
      }
    );
  },

  //Mobile Landscape
  "(max-width: 767px) and (min-width:477px)": function () {
    /** Text Scrolls **/
    gsap.to(".home-hero-wrapper", {
      scrollTrigger: {
        trigger: ".imgc-inner-wrap",
        toggleActions: "play none reverse none",
        start: `top top`,
        end: `105% top`,
        scrub: 1,
        pin: ".home-hero-content",
        pinSpacing: false,
      },
      onComplete: () => {
        ScrollTrigger.refresh(true);
        console.log("ScrollTrigger refreshing! -1 ");
      },
    });

    // third text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -240 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top 75%`,
          end: `top 75%`,
        },
        y: -360,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // second text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -120 },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top 75%`,
          end: `top 75%`,
        },
        y: -240,
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top 75%`,
          end: `top 75%`,
        },
        y: -120,
        duration: 1,
        ease: "expo.inOut",
      }
    );
  },

  // mobile
  "(max-width: 478px)": function () {
    // // product snap

    // second snap
    gsap.fromTo(
      ".product-details-wrapper",
      { x: "-100%" },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.b",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
          scrub: 2,
        },
        x: "-200%",
        duration: 1,
        ease: "expo.inOut",
      }
    );

    // first snap
    gsap.fromTo(
      ".product-details-wrapper",
      { x: 0 },
      {
        scrollTrigger: {
          trigger: ".product-scroll-spacer.a",
          toggleActions: "play none reverse none",
          start: `top center`,
          end: `top center`,
          scrub: 2,
        },
        x: "-100%",
        duration: 1,
        ease: "expo.inOut",
      }
    );

    /** Text Scrolls **/

    // home hero content
    gsap.to(".home-hero-wrapper", {
      scrollTrigger: {
        trigger: ".imgc-inner-wrap",
        toggleActions: "play none reverse none",
        start: `top top`,
        end: `150% top`,
        scrub: 1,
        pin: ".home-hero-content",
        pinSpacing: false,
      },
      onStart: () => {
        ScrollTrigger.refresh(true);
        console.log("ScrollTrigger refreshing! start ");
      },
      onComplete: () => {
        ScrollTrigger.refresh(true);
        console.log("ScrollTrigger refreshing! -1 ");
      },
    });

    // // home hero content moves after pinning
    // gsap.fromTo(
    //   ".home-hero-content",
    //   { translateY: 0, opacity: 1 },
    //   {
    //     scrollTrigger: {
    //       trigger: ".hcb.d",
    //       toggleActions: "play none reverse none",
    //       start: `bottom center`,
    //       end: `bottom center`,
    //       scrub: 3,
    //     },
    //     translateY: -340,
    //     opacity: 0,
    //     duration: 2,
    //     ease: "expo.inOut",
    //   }
    // );

    // gsap.fromTo(
    //   ".trigger-img",
    //   {
    //     width: document.querySelector(".trigger-img").offsetWidth,
    //     backgroundPositionY: "0%",
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".hcb.d",
    //       toggleActions: "play none reverse none",
    //       start: `top top`,
    //       end: `bottom top`,
    //       scrub: 2,
    //       pin: true,
    //       pinSpacing: false,
    //     },
    //     width: window.innerWidth,
    //     ease: "expo.inOut",
    //     backgroundSize: "750px",
    //     backgroundPosition: "40% 55% ",

    //     marginLeft: 0,
    //     onComplete: () => {
    //       ScrollTrigger.refresh(true);
    //       console.log("ScrollTrigger refreshing!-2");
    //     },
    //   }
    // );

    // home hero content moves after pinning
    gsap.fromTo(
      ".home-hero-content",
      { translateY: 0, opacity: 1 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `bottom 90%`,
          end: `bottom 90%`,
          scrub: 2,
        },
        translateY: -340,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    // Trigger img scaling
    gsap.fromTo(
      ".trigger-img",
      {
        width: document.querySelector(".trigger-img").offsetWidth,
        backgroundPositionY: "0%",
      },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `100% 90%`,
          end: `100% 90%`,
          scrub: 2,
        },
        width: window.innerWidth,
        ease: "none",
        duration: 2,
        backgroundSize: "750px",
        backgroundPosition: "40% 55% ",

        marginLeft: 0,
        onComplete: () => {
          ScrollTrigger.refresh(true);
          console.log("ScrollTrigger refreshing!-2");
        },
      }
    );

    // third text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -330 },
      {
        scrollTrigger: {
          trigger: ".hcb.d",
          toggleActions: "play none reverse none",
          start: `top 25%`,
          end: `top 25%`,
        },
        y: -495,
        duration: 1,
        ease: "power4.inOut",
      }
    );

    // second text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: -165 },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top 25%`,
          end: `top 25%`,
        },
        y: -330,
        duration: 1,
        ease: "power4.inOut",
      }
    );

    // first text
    gsap.fromTo(
      ".text-scroll  .text-wrap",
      { y: 0 },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top 25%`,
          end: `top 25%`,
        },
        y: -165,
        duration: 1,
        ease: "power4.inOut",
      }
    );

    // Home hero parallax
    gsap.fromTo(
      ".hcb.a .hero-image-1",
      { backgroundPositionY: "0%" },
      {
        scrollTrigger: {
          trigger: ".hcb.a",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "100%",
      }
    );

    gsap.fromTo(
      ".hcb.b .hero-image-1",
      { backgroundPositionY: "0%" },
      {
        scrollTrigger: {
          trigger: ".hcb.b",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "100%",
      }
    );

    gsap.fromTo(
      ".hcb.c .hero-image-1",
      { backgroundPositionY: "0%" },
      {
        scrollTrigger: {
          trigger: ".hcb.c",
          toggleActions: "play none reverse none",
          start: `top bottom`,
          end: `bottom top`,
          scrub: 2,
        },
        backgroundPositionY: "40%",
      }
    );

    // Better banking Intro MOB
    gsap.fromTo(
      ".fixed-text",
      { scale: 1.5, x: 55, y: "-15vh" },
      {
        scrollTrigger: {
          trigger: ".better-banking-wrapper",
          toggleActions: "play none reverse none",
          start: "top 50%",
          end: "top 10%",
          scrub: 1,
        },
        x: 0,
        y: 0,
        scale: 1,
        ease: Power2.easeOut,
      }
    );

    // Benefit image parallax MOB
    gsap.fromTo(
      ".benefit-1-image-block",
      { backgroundSize: "1400px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-1-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "960px",
        backgroundPosition: "50% 70% ",
      }
    );

    gsap.fromTo(
      ".benefit-2-image-block",
      { backgroundSize: "1400px", backgroundPosition: "50% 30% " },
      {
        scrollTrigger: {
          trigger: ".benefit-2-image-block",
          toggleActions: "play none reverse none",
          start: `top 100%`,
          end: `bottom 50%`,
          scrub: 2,
        },
        backgroundSize: "1100px",
        backgroundPosition: "50% 70% ",
      }
    );
  },
});

/** GXS CAROUSEL
 *
 * loops through each video itens in the carousel and set up events
 * and callbacks for a story-like effect
 **/
const videos = document.querySelectorAll(".gxs-carousel video");
const nextButton = document.querySelector(".gxsc-right");

videos.forEach((v, i) => {
  v.onended = () => {
    // move to the next slide
    nextButton.click();
    // play the next video
    videos[(i + 1) % videos.length].play();
  };
});
// play first video
videos[0].play();

ScrollTrigger.refresh();
