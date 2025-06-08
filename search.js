/*Codigo de pesquisa por divs*/
export function searchBar(){
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const allSearch = document.querySelectorAll(".search, .search-result, .folder");

    if(!searchInput){
        console.warn('[searchBar] Cammpo de input com "search-input" não encontrado.');
        return;
    }

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        allSearch.forEach(search => {
            const searchText = search.querySelector("p")?.textContent.toLowerCase();
            const matches = searchText.includes(searchTerm);

            search.style.display = matches ? "flex" : "none"
        })
    })
})
}