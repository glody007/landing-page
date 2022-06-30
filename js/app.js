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

const MENUACTIVECLASS = "menu__linK"
const SECTIONACTIVECLASS = "your-active-class"
const sectionIdMap = {}
let sectionActive = null;
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
 * setup active section
 * @param {HTMLElement} section 
 */
function setupSection(section) {
    sectionIdMap[section.id] = section
    if(section.classList.contains(SECTIONACTIVECLASS)) {
        sectionActive = section
    }
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
    li.classList.add(SECTIONACTIVECLASS)
    return li
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * @description build and setup the nav bar from sections 
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


/**
 * Add class 'active' to section when near top of viewport
 * @param {string} id of the section 
 */
function setActiveSection(id) {
    const section = sectionIdMap[id]
    //Add class 'active' to section only if it is not already active
    if(sectionActive !== section) {
        sectionIdMap[id].classList.toggle(SECTIONACTIVECLASS)
        sectionActive.classList.toggle(SECTIONACTIVECLASS)
        sectionActive = section
    }
}

/**
 * Make section active when near top of viewport
 */
function makeActive() {
    //Iterate over the SectionIdMap for each section
    //if it is near top of viewport make it active
    for(const [key, section] of Object.entries(sectionIdMap)) {
        const box = section.getBoundingClientRect()
        if(box.top <= 200 && box.bottom >= 200) {
            setActiveSection(section.id)
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

// Scroll to section on link click

// Set sections as active

function addScrollListener() {
    document.addEventListener('scroll', () => {
        makeActive()
    })
}


function start() {
    buildNav()
    setActiveSection('section3')
    addScrollListener()
}

start()