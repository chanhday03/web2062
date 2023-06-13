const app = document.querySelector("#app");
// console.log(app);
const removeProduct = (id) => {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};
const listProduct = () => {
  fetch(`http://localhost:3000/products`)
    .then((response) => {
      return response.json();
    }) //chuyen doi DL
    .then((data) => {
      // console.log(data);
      app.innerHTML = data
        .map((product, index) => {
          return `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${product.name}</td>
                <td>${product.desc}</td>
                <td><img src="${product.image}"></td>
                <td>
                    <a href="update.html?id=${product.id}"><button class="">Update</button></a>
                    <button class="btn-remove" data-id="${
                      product.id
                    }">Delete</button>
                </td>
            </tr>
                `;
        })
        .join("");
      //tim button remove
      const btnRemove = document.querySelectorAll(".btn-remove");
      //   console.log(btnRemove);
      for (let btn of btnRemove) {
        // console.log(btn)
        let id = btn.dataset.id;
        btn.addEventListener("click", () => {
          window.confirm("Ban co muon xoa khong ? ");
          return removeProduct(id);

          // console.log(btn.dataset.id); //lay ra duoc id
        });
        // alert("Xoa thong cong");
      }
    }); // nhan DL
};
listProduct();
