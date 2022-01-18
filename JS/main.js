/**
 * @file index.js
 * @brief Script for index.html.
 * 
 * This script builds the website dynamically, by adding HTML content and
 * making effect. It permits to be an interactive website.
 * 
 * @author Anto Benedetti (Opixelum)
 * @bug No known bugs.
 */


// <----------------------- I N T E R A C T I V I T Y ------------------------>

// Get document elements
const header = document.getElementById("header")
const title = document.getElementById("title")
const mainMenu = document.getElementById("main-menu")
const goBackBtn = document.getElementById("go-back-btn")
const aboutDiv = document.getElementById("about-div")
const professionalExperienceDiv = document.getElementById("professional-experience-div")
const diplomasDiv = document.getElementById("diplomas-div")
const skillsDiv = document.getElementById("skills-div")
const contactDiv = document.getElementById("contact-div")

// Group all divisions in one array
const pageContent = [aboutDiv, professionalExperienceDiv, diplomasDiv, skillsDiv, contactDiv]


// Hide menu, display "Go back" button & change page title
function showDivision(division) {
    division.style.display = "block"
    goBackBtn.style.display = "block"
    mainMenu.style.display = "none"
}

// Hide divisions
function hideDivisions() {
    for (let i = 0; i < pageContent.length; i++) {
        pageContent[i].style.display = "none"
    }
}
// Call above function to hide divisions when opening page
hideDivisions()

goBackBtn.addEventListener("click", function() {
    hideDivisions()
    title.style.display = "block"
    goBackBtn.style.display = "none"
    mainMenu.style.display = "block"
})

// Show divisions when clicking on respective button
const aboutBtn = document.getElementById("about-btn")
aboutBtn.addEventListener("click", function() {
    hideDivisions()
    showDivision(aboutDiv)
})

const professionalExperienceBtn = document.getElementById("professional-experience-btn")
professionalExperienceBtn.addEventListener("click", function() {
    hideDivisions()
    showDivision(professionalExperienceDiv)
})

const diplomasBtn = document.getElementById("diplomas-btn")
diplomasBtn.addEventListener("click", function() {
    hideDivisions()
    showDivision(diplomasDiv)
})

const skillsBtn = document.getElementById("skills-btn")
skillsBtn.addEventListener("click", function() {
    hideDivisions()
    showDivision(skillsDiv)
})

const contactBtn = document.getElementById("contact-btn")
contactBtn.addEventListener("click", function() {
    hideDivisions()
    showDivision(contactDiv)
})


// <############################# C O N T E N T ##############################>

// <------------- P R O F E S S I O N A L   E X P E R I E N C E -------------->

// Job list
const professionalExperience = [
    {
        title:   "Web development assistant",
        company: "Kreoli SARL",
        place:   "Saint Martin",
        date:    "April 2019"
    },
    {
        title:   "Video games sector sales intern",
        company: "FNAC SA",
        place:   "Limoges",
        date:    "January 2018"
    },
    {
        title:   "IT technician",
        company: "Kreoli SARL",
        place:   "Saint Martin",
        date:    "Mars 2017"
    }
]

// Taking container from the DOM
const professionalExperienceUl = document.getElementById("professional-experience-ul")

// Reset jobs list
let professionalExperienceUlContent = ""

// Add jobs to the list
for (let i = 0; i < professionalExperience.length; i++) {
    professionalExperienceUlContent += `
    <li>
      <h3>${professionalExperience[i].title}</h3>
      <p>${professionalExperience[i].company}<br>
      ${professionalExperience[i].place}<br>
      ${professionalExperience[i].date}</p>
    </li>`
}

// Modify HTML with new jobs list
professionalExperienceUl.innerHTML = professionalExperienceUlContent


// <---------------------------- D I P L O M A S ----------------------------->

// Diplomas list
const diplomas = [
    {
        title:  "Computer science european bachelor",
        school: "ESGI Paris",
        result: "Ongoing",
        date:   "2021 - 2024"
    },
    {
        title:  "Diplôme du baccalauréat",
        school: "LGT Robert Weinum Saint Martin",
        result: "Mention Très bien",
        date:   "2018 - 2021"
    },
    {
        title:  "Diplôme National du Brevet des collèges",
        school: "Collège Jean Moulin Ambazac",
        result: "Mention Très bien",
        date:   "2017-2018"
    }
]

// Taking container from the DOM
const diplomasUl = document.getElementById("diplomas-ul")

// Reset diplomas list
let diplomasUlContent = ""

// Add diplomas to the list
for (let i = 0; i < diplomas.length; i++) {
    diplomasUlContent += `
    <li>
      <h3>${diplomas[i].title}</h3>
      <p>${diplomas[i].school}<br>${diplomas[i].result}<br>
      ${diplomas[i].date}</p>
    </li>`
}

// Modify HTML with new diplomas list
diplomasUl.innerHTML = diplomasUlContent 


// <------------------------------ S K I L L S ------------------------------->

// Skills list
const skills = ['C', "Python", "HTML", "CSS", "JavaScript", "PHP"]

// Taking container from the DOM
const skillsUl = document.getElementById("skills-ul")

// Reset skills list
let skillsUlContent = ""

// Add skills to the list
for (let i = 0; i < skills.length; i++) {
    skillsUlContent += `
    <li><h3>${skills[i]}</h3></li>`
}

// Modify HTML with new skills list
skillsUl.innerHTML = skillsUlContent 