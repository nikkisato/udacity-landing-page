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
const navList = [];
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
        console.log(item);

        console.log(section.dataset.nav);

        if (section.dataset.nav === item.dataset.nav) {
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
// Scroll to section on link click

// double checks that the DOM nav has loaded and then will check if not null
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 4; i++) {
    const sectionLink = document.querySelector(`a[data-nav="Section ${i + 1}"]`);

    if (sectionLink && sectionLink != null) {
      sectionLink.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionDOM = document.getElementById(`section${i + 1}`);
        sectionDOM.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }
});

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
  el.setAttribute("id", `section${i + 1}Link`);
  el.classList.add("menu__link", `section${i + 1}`);
  el.dataset.nav = `Section ${i + 1}`;
  // el.setAttribute("href", `#section${i + 1}`);

  // creating an li element and appending to the a tag element
  const li = document.createElement("li");
  li.appendChild(el);

  // Appending the li element to the navbar
  navLinks.appendChild(li);
  // pushing the li elements in to a array
  navList.push(li);
});

// Set sections as active
document.addEventListener("scroll", function () {
  makeActive();
});
