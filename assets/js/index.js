(() => {
    const form = document.getElementById('form-submit');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name')
        const phone = document.getElementById('phone')
        const pname = document.getElementById('p-name')
        const pphone = document.getElementById('p-phone')
        pname.innerText = name.value
        pphone.innerText = phone.value
    });

})();