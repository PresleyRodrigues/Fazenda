document.addEventListener("DOMContentLoaded", function() {
  // Aqui você pode adicionar funcionalidades interativas extras
  console.log("Site carregado com sucesso.");
  
  // Exemplo: ação do botão de compartilhamento (atualmente apenas um alerta)
  const shareButtons = document.querySelectorAll('.share-btn');
  shareButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Compartilhamento via WhatsApp ainda não configurado.');
    });
  });
});