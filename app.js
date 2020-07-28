// query selector
const checkbox = document.getElementById('checkbox');
const label = document.getElementById('label');

// Event Listeners
checkbox.addEventListener('change', () => {
    // change the theme of the website.
    document.body.classList.toggle('dark');
    document.label.classList.toggle('dark');
});
