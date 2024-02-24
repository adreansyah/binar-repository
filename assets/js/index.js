(() => {
    const btnOpen = document.getElementById('btn-open');
    const btnClose = document.getElementById('btn-close');
    const toggle = document.getElementById('toggle');
    const openbar = () => {
        toggle.style.display = 'block';
    }
    const closebar = () => {
        toggle.style.display = 'none';
    }
    btnOpen.addEventListener('click', openbar);
    btnClose.addEventListener('click', closebar);
})();