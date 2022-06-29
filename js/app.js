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

const CLASSACTIVE = "menu__linK"
const CLASSMENULINK = "your-active-class"
const sectionIdMap = {}
const main = document.querySelector("main")
const navbarList = document.getElementById("navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * @description Get all section with data-nav attribute element from document
 * @returns {Array} sectionns
 */
function getSectionsWithDataNav() {
    return document.querySelectorAll('section')
}

function getSections() {
    return getSectionsWithDataNav()
}

/**
 * @description Add section to Id-Section Map
 * @param {HTMLElement} section 
 */
function setupSection(section) {
    sectionIdMap[section.id] = section
}

/**
 * @description Create new li element with text from section data-nav and 
 * id from section Id
 * @param {HTMLElement} section 
 * @returns {HTMLElement}
 */
function createNavLink(section) {
    const li = document.createElement("li")
    li.innerText = section.attributes["data-nav"].value
    li.setAttribute("id", `for-${section.id}`)
    li.classList.add(CLASSMENULINK)
    return li
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/**
 * @description create and setup the nav bar from sections 
 * on the page
 */
function buildNav() {
    const listSection = getSectionsWithDataNav()
    const fragment = document.createDocumentFragment()
    //for every sections create a new li and add it to fragment
    for(let section of listSection) {
        setupSection(section)
        li = createNavLink(section)
        fragment.appendChild(li)
    }
    navbarList.appendChild(fragment)
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function start() {
    buildNav()
}

start()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


