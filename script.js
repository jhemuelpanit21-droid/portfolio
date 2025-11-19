const projectDetails = {
  1: {
    title: "Gundam Quiz",
    description: "An interactive mecha quiz game where users test their Gundam knowledge across multiple challenges.",
    link: "https://jhemuelpanit21-droid.github.io/GundamQuiz/"
  },
  2: {
    title: "Assignment 2",
    description: "A clean and structured web design assignment demonstrating mastery of HTML and CSS layouts.",
    link: "https://jhemuelpanit21-droid.github.io/asinment-2/"
  },
  3: {
    title: "Tasty Bites",
    description: "A delicious exploration of culinary delights.",
    link: "https://jhemuelpanit21-droid.github.io/exercise-4/"
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-project");
    const project = projectDetails[id];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;
    modal.style.display = "block";
  });
});

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };





document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  items.forEach(item => observer.observe(item));
});
