// Get the current page URL and name
const currentPageURL = window.location.href.toLowerCase();
const currentPageName = currentPageURL.substring(currentPageURL.lastIndexOf('/') + 1);

// Get the navigation links
const navigationLinks = document.querySelectorAll('.navigation a');

// Loop through the navigation links and add the 'active' class to the current page's link
navigationLinks.forEach(link => {
  const linkURL = link.href.toLowerCase();
  const linkPageName = linkURL.substring(linkURL.lastIndexOf('/') + 1);

  if (linkPageName === currentPageName) {
    link.classList.add('active');
  }
});

const linkElements = document.querySelectorAll(".link");

// Loop through each link element
linkElements.forEach((link) => {
  // Add an event listener for the "mouseover" event
  link.addEventListener("mouseover", () => {
    // Change the background color to white
    link.style.backgroundColor = "white";
  });

  // Add an event listener for the "mouseout" event
  link.addEventListener("mouseout", () => {
    // Change the background color back to the original color (#BED4B7)
    link.style.backgroundColor = "#BED4B7";
  });
});

function updateProgressBar(progressBar, percentageLabel, completedCertificates, totalCertificates) {
  const progressPercentage = (completedCertificates / totalCertificates) * 100;
  const roundedPercentage = Math.round(progressPercentage);
  progressBar.style.width = `${roundedPercentage}%`;
  percentageLabel.textContent = `${roundedPercentage}%`;
}

const progressBars = document.querySelectorAll(".progress-bar");
const percentageLabels = document.querySelectorAll(".percentage-label");
const completedCertificates = [6, 3, 2]; // Add completed certificates for each progress bar
const totalCertificates = [8, 8, 12]; // Add total certificates for each progress bar

// Loop through all progress bars and update them
for (let i = 0; i < progressBars.length; i++) {
  updateProgressBar(progressBars[i], percentageLabels[i], completedCertificates[i], totalCertificates[i]);
}