$(window)
  .scroll(function () {
    // selectors
    var $window = $(window),
      $body = $("body"),
      $panel = $(".panel");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function () {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        // $body.addClass("color-" + $(this).data("color"));
        document
          .querySelector("body")
          .style.setProperty("--bg-color", $(this).data("color"));
      }
    });
  })
  .scroll();

function goToUrl(url) {
  window.location.href = url;
}

/** Custom cursor code */
const cursor = document.getElementById("cursor");
window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
}
/** End of custom cursor code */

const buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("large");
  });
});
buttons.forEach((el) => {
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("large");
  });
});

const sr = ScrollReveal();

sr.reveal(".link-button", {
  origin: "right",
  distance: "55px",
  duration: 1000,
  interval: 300,
  delay: 500,
});

sr.reveal(".showcase-item h2", {
  origin: "right",
  distance: "35px",
  duration: 1000,
  delay: 300,
});

sr.reveal(".showcase-item button", {
  origin: "right",
  distance: "35px",
  duration: 1000,
  interval: 400,
  delay: 600,
});

sr.reveal(".introduction header", {
  delay: 500,
  duration: 3000,
  opacity: 0,
});

sr.reveal(".introduction .about-me", {
  origin: "right",
  distance: "35px",
  duration: 3000,
  delay: 1400,
});

sr.reveal(".project-showcase-arrow", {
  origin: "top",
  distance: "35px",
  duration: 3000,
  delay: 3500,
});
