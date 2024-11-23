function alterarMenu() {
    const menu = document.querySelector('.menu');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
  
    menu.classList.toggle('show');
    menuHamburguer.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('checkout-form');
  const successDialog = document.getElementById('success-dialog');
  const closeDialogBtn = document.getElementById('close-dialog-btn');

  // Adiciona o evento de 'submit' para o formulário
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio real do formulário

      // Abre o diálogo
      successDialog.showModal();
  });

  // Adiciona evento para o botão "OK"
  closeDialogBtn.addEventListener('click', function() {
      // Fecha o diálogo
      successDialog.close();

      // Redireciona para a página principal
      window.location.href = 'principal.html'; // Redirecionamento para a página principal
  });
});