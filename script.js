// Matrix rain effect
const canvas = document.getElementById("matrix-canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}"
const matrixArray = matrix.split("")

const fontSize = 14
const columns = canvas.width / fontSize

const drops = []
for (let x = 0; x < columns; x++) {
  drops[x] = Math.random() * -100
}

function drawMatrix() {
  ctx.fillStyle = "rgba(10, 14, 26, 0.05)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "#06b6d4"
  ctx.font = fontSize + "px monospace"

  for (let i = 0; i < drops.length; i++) {
    const text = matrixArray[Math.floor(Math.random() * matrixArray.length)]
    ctx.fillText(text, i * fontSize, drops[i] * fontSize)

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    }
    drops[i]++
  }
}

setInterval(drawMatrix, 35)

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// Tab functionality
function showTab(tabName) {
  const tabs = document.querySelectorAll(".tab-content")
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })

  const buttons = document.querySelectorAll(".tab-button")
  buttons.forEach((button) => {
    button.classList.remove("active")
  })

  document.getElementById(tabName).classList.add("active")
  event.target.closest(".tab-button").classList.add("active")

  if (tabName === "projects") {
    showProject(0)
  }
}

// Project navigation
let currentProjectIndex = 0

function showProject(index) {
  const projects = document.querySelectorAll(".project")

  if (index >= projects.length) {
    currentProjectIndex = 0
  } else if (index < 0) {
    currentProjectIndex = projects.length - 1
  } else {
    currentProjectIndex = index
  }

  projects.forEach((project, i) => {
    project.classList.remove("active")
    if (i === currentProjectIndex) {
      project.classList.add("active")
    }
  })

  updateNavigationButtons()
}

function showNextProject() {
  showProject(currentProjectIndex + 1)
}

function showPreviousProject() {
  showProject(currentProjectIndex - 1)
}

function updateNavigationButtons() {
  const projects = document.querySelectorAll(".project")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  prevBtn.disabled = currentProjectIndex === 0
  nextBtn.disabled = currentProjectIndex === projects.length - 1
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showTab("projects")
})
