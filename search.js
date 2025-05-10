/*Codigo de pesquisa por divs*/
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const allFolders = document.querySelectorAll(".folder");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        allFolders.forEach(folder => {
            const folderText = folder.querySelector("p").textContent.toLowerCase();
            const matches = folderText.includes(searchTerm);

            folder.style.display = matches ? "flex" : "none"
        })
    })
})
/*Altere o ID caso for preciso!!!*/