document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.querySelector('.phone-mask');

    if (phoneInput) {
        IMask(phoneInput, {
            mask: '(00) 00000-0000'
        });
    }
});