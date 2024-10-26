const menuContainer = document.querySelector(".menu-container");
  const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("active");
  menuContainer.classList.toggle("change");
}
