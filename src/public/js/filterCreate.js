const form = document.getElementById('form');
const name = document.getElementById('name');

form.addEventListener('submit', e => {
    e.preventDefault();

    if(name.value.trim() === "") return;

    fetch('/admin/filter/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.value,
        }),
    });
})