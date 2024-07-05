document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".dynamic-text", {
        strings: [
            "San Andreas Multiplayer Services",
            "TextDraw Designer",
            "Developer Services",
            "Fast Response, Great Service",
            "Trusted Since 2022",
            "50+ Testimoni"
        ],
      speed: 100,
      deleteSpeed: 50,
        breakLines: false,
        autoStart: true,
        nextStringDelay: 100,
        loop: true
    }).go();
  });