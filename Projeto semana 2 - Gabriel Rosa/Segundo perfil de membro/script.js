const seletorTema = document.querySelector('#selectTema');

seletorTema.addEventListener('change', () => {
    if (seletorTema.value == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});