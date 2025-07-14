const productList = [
  { name: "Laptop", price: 800, category: "electronics" },
  { name: "Shirt", price: 20, category: "clothing" },
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Jeans", price: 40, category: "clothing" }
];

let filteredList = [...productList];

function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3><p>$${p.price}</p><p>${p.category}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  filteredList = productList.filter(p => category === "all" || p.category === category);
  sortProducts(); // re-sort after filtering
}

function sortProducts() {
  const sortBy = document.getElementById("sortPrice").value;
  let sorted = [...filteredList];
  if (sortBy === "asc") sorted.sort((a, b) => a.price - b.price);
  else if (sortBy === "desc") sorted.sort((a, b) => b.price - a.price);
  renderProducts(sorted);
}

window.onload = () => {
  renderProducts(productList);
};