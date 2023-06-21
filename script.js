
class MeuErro extends Error {
  constructor(message){
  super(message);
  this.name = "Meu Erro";
  }
}


class Produto {
   constructor (nome, datadecadastro, descriçao, preco) {
   this.nome = nome;
   this.datadecadastro = datadecadastro;
   this.descriçao = descriçao;
   this.preco = preco;
   }


   mostrarAtributos() {
    try {
    return this.mostrardados();
  } catch (error) {
    return error
  }
  }
   

   mostrardados(){
   if (this.nome != "" && this.datadecadastro != "" && this.descriçao != "" && this.preco != "") {
   return `
   <div class="produto1-card">
   <div class = "rosa">${this.nome}</div>
   <div class = "rosa">${this.datadecadastro}</div>
   <div class = "rosa">${this.descricao}</div>
   <div class = "rosa">${this.preco}</div>
   </div>
   `;
}  else {
   throw new MeuErro("Mensagem de erro");
}
}
}


   class ProdutoDestaque extends Produto {
   constructor (nome, datadecadastro, descriçao, preco, produtoDestaque ){
   super(nome, datadecadastro, descriçao, preco);
   this.produtoDestaque = produtoDestaque;
}

   mostrarProdutoemDestaque(){
    if (this.nome != "" && this.datadecadastro != "" && this.descricao != "" && this.preco != ""){
    return `
    <div class="produto2-card">
    <img src = "${this.ProdutoDestaque}">
    <div class = "rosa">${this.nome}</div>
    <div class = "rosa">${this.datadecadastro}</div>
    <div class = "rosa">${this.descricao}</div>
    <div class = "rosa">${this.preco}</div>
    </div>
    `;
  } else {
      throw new MeuErro("Mensagem de erro");
   }
}
}
 

const primeiroProduto = new ProdutoDestaque("A Seleção", "19/04/2023", "Livro", 34.90);
console.log(primeiroProduto.mostrarProdutoemDestaque());
const div1 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbrgin', primeiroProduto.mostrarProdutoemDestaque());

const primeiroProduto1 = new ProdutoDestaque("A Seleção", "19/04/2023", "Livro", 34.90,"https://a-static.mlcdn.com.br/800x560/a-selecao-kiera-cass/magazineluiza/088626300/f505712a527a232076f0e4edd88a1c0a.jpg" );
console.log(primeiroProduto1.mostrarProdutoemDestaque());
const div11 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbrgin', primeiroProduto1.mostrarProdutoemDestaque());




const segundoProduto = new ProdutoDestaque("A Elite", "21/04/2023", "Livro", 33.90);
console.log(segundoProduto.mostrarProdutoemDestaque());
const div2 = document.getElementById('ProdutoDestaque');
div2.insertAdjacentHTML('afterbegin', segundoProduto.mostrarProdutoemDestaque());

const segundoProduto2 = new ProdutoDestaque("A Elite", "21/04/2023", "Livro", 33.90, "https://a-static.mlcdn.com.br/800x560/livro-a-elite-kiera-cass/magazineluiza/084996100/092572b8651f1e220eedb05d69962bb3.jpg" );
console.log(segundoProduto2.mostrarProdutoemDestaque());
const div22 = document.getElementById('ProdutoDestaque');
div2.insertAdjacentHTML('afterbegin', segundoProduto2.mostrarProdutoemDestaque());




const terceiroProduto = new ProdutoDestaque("A Escolha", "22/04/2023", "Livro", 32.90);
console.log(terceiroProduto.mostrarProdutoemDestaque());
const div3 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', terceiroProduto.mostrarProdutoemDestaque());

const terceiroProduto3 = new ProdutoDestaque("A Escolha", "22/04/2023", "Livro", 32.90, "https://a-static.mlcdn.com.br/800x560/livro-a-escolha-kiera-cass/magazineluiza/210760100/959841b776b297c92358c889cdfd8fec.jpg" );
console.log(terceiroProduto3.mostrarProdutoemDestaque());
const div33 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', terceiroProduto3.mostrarProdutoemDestaque());




const quartoProduto = new ProdutoDestaque("A Herdeira", "23/04/2023", "Livro", 31.90);
console.log(quartoProduto.mostrarProdutoemDestaque());
const div4 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', quartoProduto.mostrarProdutoemDestaque());

const quartoProduto4 = new ProdutoDestaque("A Herdeira", "23/04/2023", "Livro", 31.90, "https://a-static.mlcdn.com.br/800x560/livro-a-herdeira/magazineluiza/213288400/4507a15306066497d81807e4d4d140c5.jpg");
console.log(quartoProduto4.mostrarProdutoemDestaque());
const div44 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', quartoProduto4.mostrarProdutoemDestaque());



const quintoProduto = new ProdutoDestaque("A Coroa", "24/04/2023", "Livro", 30.90);
console.log(quintoProduto.mostrarProdutoemDestaque());
const div5 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', quintoProduto.mostrarProdutoemDestaque());

const quintoProduto5 = new ProdutoDestaque("A Coroa", "24/04/2023", "Livro", 30.90, "https://a-static.mlcdn.com.br/800x560/livro-a-coroa/magazineluiza/222850100/7c8cff72b14300f5ba3294d14dd8a25c.jpg" );
console.log(quintoProduto5.mostrarProdutoemDestaque());
const div55 = document.getElementById('ProdutoDestaque');
div1.insertAdjacentHTML('afterbegin', quintoProduto5.mostrarProdutoemDestaque());









