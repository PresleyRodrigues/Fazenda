// Função para compartilhar produtos no WhatsApp
function compartilharWhatsApp(produto) {
    const mensagem = `Confira este produto da Fazenda Alberto Vidal: ${produto}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});