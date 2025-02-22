document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("image-gallery");

    // Chave de acesso pública do Unsplash
    const UNSPLASH_ACCESS_KEY = "SEU_UNSPLASH_ACCESS_KEY"; // Substitua pela sua chave

    // URL da API do Unsplash para buscar imagens de fazendas
    const unsplashURL = `https://api.unsplash.com/search/photos?query=farm&client_id=${UNSPLASH_ACCESS_KEY}&per_page=6`;

    // Função para carregar imagens
    async function loadImages() {
        try {
            const response = await fetch(unsplashURL);
            const data = await response.json();

            data.results.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.urls.regular;
                imgElement.alt = "Imagem da fazenda";
                imgElement.classList.add("farm-image");

                gallery.appendChild(imgElement);
            });
        } catch (error) {
            console.error("Erro ao carregar imagens:", error);
            gallery.innerHTML = "<p>Não foi possível carregar as imagens.</p>";
        }
    }

    // Carregar imagens ao abrir a página
    loadImages();
});