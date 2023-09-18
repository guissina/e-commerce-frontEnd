import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){

    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div 
        class='border-solid rounded border-2 border-stone-200 w-48 m-5 bg-stone-200 p-3 flex flex-col justify-between shadow-slate-600 shadow-xl group ${produtoCatalogo.feminino ? "feminino" : "masculino" }'
        id="card-produto-${produtoCatalogo.id}">
    <img class='rounded group-hover:scale-110 duration-300 mb-3 shadow-slate-600 group-hover:shadow-lg' src="assets/img/${produtoCatalogo.imagem}" alt=""/>
    
    <p class="font-bold pl-2 pr-2">${produtoCatalogo.marca}</p>
    <p class="pl-2 pr-2">${produtoCatalogo.nome}</p>
    <p class="pl-2 pr-2">$${produtoCatalogo.preco}</p>
    <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-800 text-slate-200 ml-2 mr-2"
    ><i class="fa-solid fa-cart-plus"></i></button>
    
    </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalogo.id}`);

    }

    for (const produtoCatalogo of catalogo) {
        document
            .getElementById(`adicionar-${produtoCatalogo.id}`)
            .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }
}