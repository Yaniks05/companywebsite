document.getElementById('searchButton').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const dish = document.getElementById('dish').value;

    if (location && dish) {
        alert(`Searching for ${dish} near ${location}...`);
    } else {
        alert('Please enter both location and dish.');
    }
});
