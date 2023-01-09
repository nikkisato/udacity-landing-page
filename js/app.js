/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sectionsList = ["Section 1", "Section 2", "Section 3", "Section 4"];
const sections = document.querySelectorAll("section");
const navLinks = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const anchor = document.querySelectorAll("a");

    if (box.top <= 150 && box.bottom >= 150) {
      section.classList.add("your-active-class");

      // For loop to through the Nodelist
      for (let i = 0; i < anchor.length; i++) {
        let item = anchor[i];

        if (section.id == item.id) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

sectionsList.forEach((item, i) => {
  //creating an a tag element and assigning innerText, Id and classnames
  const el = document.createElement("a");
  el.innerText = item;
  el.setAttribute("id", `#section${i + 1}`);
  el.classList.add("menu__link", `section${i + 1}`);
  el.dataset.nav = `Section ${i + 1}`;

  // creating an li element and appending to the a tag element
  const li = document.createElement("li");
  li.appendChild(el);

  // Appending the li element to the navbar
  navLinks.appendChild(li);
});

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", function () {
  makeActive();
});
