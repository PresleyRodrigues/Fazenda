document.addEventListener("DOMContentLoaded", function() {
    // 🔥 Busca imagens aleatórias do Unsplash
    const API_KEY = "Sua_API_Key_do_Unsplash"; // Insira sua chave da API do Unsplash
    const searchQuery = "farm";
    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=6&client_id=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const galeria = document.getElementById("galeria");
            data.results.forEach(photo => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <img src="${photo.urls.regular}" alt="${photo.alt_description}">
                    <h3>Produto da Fazenda</h3>
                    <p>Produto natural e fresco.</p>
                `;
                galeria.appendChild(card);
            });
        })
        .catch(error => console.error("Erro ao carregar imagens:", error));

    // 🎥 Busca um vídeo de fundo do Pexels
    const videoURL = "https://player.vimeo.com/external/469426890.sd.mp4?s=ff4d3c1a7871de24e8b9786268239e3ed95f9a58&profile_id=164&oauth2_token_id=57447761";
    document.getElementById("videoBackground").src = videoURL;
});