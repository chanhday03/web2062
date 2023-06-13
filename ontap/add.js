const btnAdd = document.querySelector("#btn-submit")
btnAdd.addEventListener("click" , ()=>{
    fetch(`http://localhost:3000/products` , {
        method : "POST" , 
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify( {
            //du lieu day len la 1 object
            "name" : document.querySelector("#product-name").value,
            "desc" : document.querySelector("#product-desc").value,
            "image" : document.querySelector("#product-image").value,
        } ),
    })
})
// console.log(btnAdd);