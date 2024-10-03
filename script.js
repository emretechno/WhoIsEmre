function showTab(tabId) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.style.display = 'none');
    
    // Show the selected tab content
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.style.display = 'block';
        tabContent.scrollIntoView({ behavior: 'smooth' });
    }
}
let currentIndex = 0;

function showProject(index) {
    const projects = document.querySelectorAll('.project');
    
    // Hide all projects
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });

    // Update button visibility
    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = index === projects.length - 1 ? 'none' : 'inline-block';
}

function showNextProject() {
    const projects = document.querySelectorAll('.project');
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        showProject(currentIndex);
    }
}

function showPreviousProject() {
    if (currentIndex > 0) {
        currentIndex--;
        showProject(currentIndex);
    }
}

// Initially show the first project
showProject(currentIndex);

