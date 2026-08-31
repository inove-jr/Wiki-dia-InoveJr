document.addEventListener('DOMContentLoaded', () => {
  const btnUsuario = document.querySelector('.btn-usuario');

  if (btnUsuario) {
    btnUsuario.addEventListener('click', () => {
      const novoNome = prompt('Digite o novo nome do membro:');
      
      if (novoNome) {
        // Altera o título H1 com o nome digitado
        const titulo = document.querySelector('h1');
        if (titulo) {
          titulo.innerHTML = novoNome.replace(' ', '<br>');
        }
        alert(`Nome alterado para: ${novoNome}`);
      }
    });
  }
});