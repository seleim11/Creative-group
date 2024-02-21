const toggleSidebarButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
