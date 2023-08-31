function addingEventListener(string, func) {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}
