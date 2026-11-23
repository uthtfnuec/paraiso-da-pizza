// Cardápio do Paraíso da Pizza. Preços em reais conforme as imagens enviadas.
const whatsappNumber = "5563992118824";

const pizzaSizes = {
  tradicional: [
    { label: "Pequena (4 pedaços)", price: 63.90 },
    { label: "Média (6 pedaços)", price: 73.90 },
    { label: "Grande (8 pedaços)", price: 83.90 },
    { label: "Big (16 pedaços)", price: 166.00 }
  ],
  especial: [
    { label: "Pequena (4 pedaços)", price: 64.90 },
    { label: "Média (6 pedaços)", price: 79.90 },
    { label: "Grande (8 pedaços)", price: 89.90 },
    { label: "Big (16 pedaços)", price: 179.90 }
  ],
  premium: [
    { label: "Pequena (4 pedaços)", price: 77.90 },
    { label: "Média (6 pedaços)", price: 89.90 },
    { label: "Grande (8 pedaços)", price: 115.00 },
    { label: "Big (16 pedaços)", price: 219.90 }
  ]
};

const menu = [
  { category: "Pizzas tradicionais", id: "tradicionais", type: "pizza", priceGroup: "tradicional", items: [
    ["Calabresa","Molho de tomate fresco, mussarela, calabresa, cebola e orégano."],
    ["Frango Catupiry","Molho de tomate fresco, frango, creme de leite, milho, mussarela e catupiry original."],
    ["Portuguesa","Molho de tomate fresco, presunto, pimentão, cebola, mussarela, ovo, calabresa, azeitona e orégano."],
    ["Vegetariana","Molho de tomate fresco, mussarela, milho, palmito, pimentão, ervilha, cebola, tomate, azeitona e orégano."],
    ["Quatro Queijos","Molho de tomate fresco, mussarela, ricota, parmesão, catupiry original e orégano."],
    ["Margarita","Molho de tomate fresco, mussarela, tomate, manjericão e orégano."],
    ["A Moda da Casa","Molho de tomate fresco, presunto, frango, tomate, mussarela, calabresa, bacon, azeitona e orégano."],
    ["Americana","Molho de tomate fresco, mussarela, ovo, tomate, bacon, azeitona e orégano."],
    ["Atum","Molho de tomate fresco, mussarela, atum, cebola, tomate e orégano."],
    ["Alho e Óleo","Molho de tomate fresco, mussarela, regada por azeite de oliva, alho frito e orégano."],
    ["Bacon","Molho de tomate fresco, mussarela, milho, bacon e orégano."]
  ]},
  { category: "Pizzas especiais", id: "especiais", type: "pizza", priceGroup: "especial", items: [
    ["Brócolis com Bacon","Molho de tomate fresco, mussarela, brócolis, creme cheese, bacon e orégano."],
    ["Carne de Sol Oliviê","Molho de tomate fresco, mussarela, carne de sol, alho poró, bacon, creme cheese e orégano."],
    ["Carne de Sol com Rúcula","Molho de tomate fresco, carne de sol, mussarela, tomate seco, rúcula e orégano."],
    ["Carne de Sol Banana da Terra","Molho de tomate, carne de sol, mussarela, banana da terra frita e orégano."],
    ["Carne de Sol ao Creme","Molho de tomate fresco, carne de sol, creme de leite, mussarela, catupiry original, batata palha e orégano."],
    ["Cangaceira","Molho de tomate fresco, carne de sol, milho, tomate, cebola, mussarela, azeitona e orégano."],
    ["Palmito Premium","Molho de tomate fresco, mussarela, palmito salteado na manteiga, creme quatro queijo, catupiry original e orégano."],
    ["Paranaense","Molho de tomate fresco, mussarela, peito de peru, lombo, milho, ovo, catupiry original e orégano."],
    ["Estilo do Sul","Molho de tomate fresco, mussarela, lombinho de porco, salame do sul, bacon e orégano."],
    ["Toscana","Molho de tomate fresco, mussarela, lombo, tomate, calabresa, bacon, catupiry original e orégano."],
    ["Frิกassé","Molho de tomate fresco, frango, creme de leite, mussarela, catupiry original, batata palha e orégano."],
    ["Lombinho Catupiry","Molho de tomate fresco, mussarela, lombinho canadense, catupiry original e orégano."],
    ["Camponesa","Molho de tomate fresco, mussarela, milho, ervilha, ovo, palmito, tomate, calabresa, bacon, azeitona e orégano."],
    ["Provo Peru","Molho de tomate fresco, mussarela, peito de peru, provolone e orégano."]
  ]},
  { category: "Pizzas premium", id: "premium", type: "pizza", priceGroup: "premium", items: [
    ["Estrogonofe de Filé de Frango","Molho de tomate fresco, estrogonofe de filé de frango, mussarela, batata palha e orégano."],
    ["Champignon Rosé","Molho rosé, champignon salteado na manteiga, mussarela, parmesão, tomate cereja, azeitona e orégano."],
    ["Caspita de Camarão","Molho de tomate fresco, mussarela, camarão salteado no azeite, cebola, tomate cereja, azeitona e orégano."],
    ["Camarão ao Molho 4 Queijos","Molho de tomate fresco, mussarela, camarão salteado no azeite, creme de leite, creme de quatro queijo e orégano."],
    ["Filé Mignon ao Alho","Molho de tomate fresco, mussarela, filé mignon, alho e orégano."],
    ["Filé Mignon com Fritas","Molho de tomate fresco, mussarela, filé mignon, batata frita e orégano."],
    ["Estrogonofe de Filé Mignon","Molho de tomate fresco, estrogonofe de filé mignon, mussarela, batata palha e orégano."],
    ["Cinco Queijos","Molho de tomate fresco, mussarela, queijo provolone, queijo parmesão, gorgonzola, creme cheese e orégano."]
  ]},
  { category: "Pizzas doces", id: "doces", type: "pizza", priceGroup: "premium", items: [
    ["Banana com Canela","Creme de leite, mussarela, banana e canela."],
    ["Romeu e Julieta","Creme de leite, mussarela e goiabada."],
    ["Banoffee","Creme de leite, doce de leite e banana caramelizada."],
    ["Califórnia","Creme de leite, mussarela, lombinho canadense, figo, abacaxi e pêssego."],
    ["Chocolate ao Leite","Creme de leite, mussarela e ganache de chocolate ao leite."],
    ["Chocolate com Morango","Creme de leite, mussarela, morango e ganache de chocolate ao leite."],
    ["M&M’s","Creme cheese, chocolate ao leite e M&M’s."],
    ["Nutella","Nutella e morango."]
  ]},
  { category: "Refrigerantes e água", id: "bebidas", type: "single", items: [
    ["Coca-Cola Zero 2L",19],["Coca-Cola 2L",18],["Coca-Cola 1L",15],["Coca-Cola Zero 1L",16],
    ["Guaraná 1L",13],["Guaraná Zero 600ml",11],["Guaraná 2L",16],["Pepsi 2L",16],
    ["Coca-Cola 600ml",11],["Coca-Cola Zero 600ml",11],["Guaraná 600ml",11],
    ["Coca-Cola lata",8],["Coca-Cola Zero lata",8],["Guaraná lata",8],["Guaraná Zero lata",8],
    ["Sprite lata",8],["Fanta Laranja lata",8],["Fanta Uva lata",8],["Schweppes lata",8],
    ["H2O",9],["H2O Limoneto",9],["Água sem gás",6],["Água com gás",8],["Copo de água de coco",10],
    ["Sprite 600ml",null],["Fanta Laranja 600ml",11]
  ]},
  { category: "Sucos e cremes", id: "sucos", type: "single", items: [
    ["Suco (copo) — laranja, morango, abacaxi, abacaxi com hortelã, cajá, caju, maracujá, acerola, limão ou cupuaçu",13.90],
    ["Suco casado (copo) — dois sabores",15.90],
    ["Creme (copo) — morango, abacaxi, cajá, maracujá ou cupuaçu",15.90],
    ["Limonada suíça — 400 ml",16.90]
  ]},
  { category: "Adicionais", id: "adicionais", type: "single", items: [
    ["Palmito 100g",8],["Tomate seco 100g",15],["Tomate cereja 100g",8],["Milho 100g",8],
    ["Ervilha 100g",8],["Ovo frito 50g",5],["Catupiry original 50g",15],["Champignon",15],
    ["Cheddar 50g",15],["Cream cheese",15],["Banana frita",8],["Mussarela 100g",10],
    ["Calabresa 100g",10],["Camarão 100g",20],["Filé 100g",20],["Batata frita 100g",10],
    ["Bacon 100g",15],["Arroz branco",10],["Feijão tropeiro",15],["Vinagrete",10],
    ["Salada simples",20],["Purê",15],
    ["Borda — pequena",14.90],["Borda — média",19.90],["Borda — grande",24.90],["Borda — GG",29.90]
  ]}
];

let cart = [];

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function renderMenu() {
  const nav = document.getElementById("categoryNav");
  const list = document.getElementById("menuList");
  nav.innerHTML = menu.map(cat => `<a href="#${cat.id}">${cat.category}</a>`).join("");
  list.innerHTML = menu.map((cat, ci) => `
    <section class="menu-category" id="${cat.id}">
      <h3>${cat.category}</h3>
      <div class="product-grid">
        ${cat.items.map((item, ii) => {
          const isPizza = cat.type === "pizza";
          const priceText = isPizza
            ? `A partir de ${money(Math.min(...pizzaSizes[cat.priceGroup].map(s => s.price)))}`
            : (item[1] == null ? "Preço a confirmar" : money(item[1]));
          const options = isPizza
            ? `<select id="size-${ci}-${ii}" aria-label="Tamanho de ${item[0]}">${pizzaSizes[cat.priceGroup].map((s, si) => `<option value="${si}">${s.label} — ${money(s.price)}</option>`).join("")}</select>`
            : `<span class="price-line">${priceText}</span>`;
          const disabled = !isPizza && item[1] == null ? "disabled" : "";
          return `<article class="product-card">
            <h4>${item[0]}</h4>
            <p class="product-description">${isPizza ? item[1] : ""}</p>
            <div class="price-line">${priceText}</div>
            <div class="product-controls">
              ${options}
              <button class="add-button" ${disabled} onclick="addToCart(${ci},${ii})">${disabled ? "Consultar" : "Adicionar"}</button>
            </div>
          </article>`;
        }).join("")}
      </div>
    </section>`).join("");
}

function addToCart(ci, ii) {
  const cat = menu[ci];
  const item = cat.items[ii];
  let name = item[0], details = "", price;
  if (cat.type === "pizza") {
    const selected = Number(document.getElementById(`size-${ci}-${ii}`).value);
    const size = pizzaSizes[cat.priceGroup][selected];
    details = size.label;
    price = size.price;
  } else {
    price = item[1];
  }
  cart.push({ name, details, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const area = document.getElementById("cartItems");
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("cartCount").textContent = cart.length;
  if (!cart.length) {
    area.innerHTML = '<p class="empty-cart">Seu carrinho está vazio. Escolha algo gostoso no cardápio! 🍕</p>';
    return;
  }
  area.innerHTML = cart.map((item, i) => `
    <div class="cart-line">
      <div><strong>${item.name}</strong><small>${item.details || "Unidade"}</small>
      <button class="remove-button" type="button" onclick="removeFromCart(${i})">Remover</button></div>
      <strong>${money(item.price)}</strong>
    </div>`).join("");
}

document.getElementById("orderType").addEventListener("change", event => {
  const isDelivery = event.target.value === "Entrega";
  document.getElementById("addressWrap").style.display = isDelivery ? "flex" : "none";
});

document.getElementById("orderForm").addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) {
    alert("Adicione pelo menos um item ao pedido antes de continuar.");
    return;
  }
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const type = document.getElementById("orderType").value;
  const payment = document.getElementById("payment").value;
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("notes").value.trim();
  if (!name) {
    alert("Informe seu nome para continuar.");
    return;
  }
  if (type === "Entrega" && !address) {
    alert("Informe o endereço para entrega.");
    document.getElementById("customerAddress").focus();
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  let message = `🍕 *NOVO PEDIDO — PARAÍSO DA PIZZA*%0A%0A`;
  message = `🍕 *NOVO PEDIDO — PARAÍSO DA PIZZA*\n\n`;
  message += cart.map((item, i) => `${i + 1}. ${item.name}${item.details ? ` (${item.details})` : ""} — ${money(item.price)}`).join("\n");
  message += `\n\n*Total: ${money(total)}*`;
  message += `\n\n*Cliente:* ${name}`;
  if (phone) message += `\n*Telefone:* ${phone}`;
  message += `\n*Tipo:* ${type}`;
  if (type === "Entrega") message += `\n*Endereço:* ${address}`;
  message += `\n*Pagamento:* ${payment}`;
  if (notes) message += `\n*Observações:* ${notes}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

renderMenu();
renderCart();
