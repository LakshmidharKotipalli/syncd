const productsData = {
  necklace: Array.from({ length: 10 }, (_, i) => ({
    name: `NECKLACE ${i + 1}`
  })),
  earrings: Array.from({ length: 10 }, (_, i) => ({
    name: `EARRINGS ${i + 1}`
  })),
  bracelet: Array.from({ length: 10 }, (_, i) => ({
    name: `BRACELET ${i + 1}`
  }))
};

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const title = document.getElementById("pageTitle");
const grid = document.getElementById("productsGrid");

if (category && productsData[category]) {
  title.textContent = category.toUpperCase();

  productsData[category].forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image"></div>
      <div class="product-name">${product.name}</div>
    `;

    grid.appendChild(card);
  });
}
