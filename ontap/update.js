const updateForm = document.querySelector("#update-form");
const params = new URLSearchParams(document.location.search);
// console.log(params);
const id = params.get("id");
// console.log(id);
fetch(`http://localhost:3000/products`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data)
    const currentProduct = data.find((product) => {
      return product.id == id;
    });
    updateForm.innerHTML = `
        <form action="index.html">
        <div class="mb-3">
            <input type="text" id="product-name" placeholder="Product Name" value="${currentProduct.name}">
        </div>
        <div class="mb-3">
            <input type="text" id="product-desc" placeholder="Product Desc" value="${currentProduct.desc}">
        </div>
        <div class="mb-3">
            <input type="text" id="product-image" placeholder="Product Name" value="${currentProduct.image}">
        </div>
        <button type="submit" id="btn-submit">Update</button>
    </form>
        `;
    const btnSubmit = document.querySelector("#btn-submit");
    btnSubmit.addEventListener("click", () => {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          name: document.querySelector("#product-name").value,
          desc: document.querySelector("#product-desc").value,
          image: document.querySelector("#product-image").value,
        }),
      });
    });
  });
