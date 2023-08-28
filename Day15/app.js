var mockData = fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    
    //init
    var products = document.querySelector(".products");
    products.innerHTML = "";
    data.forEach((item) => {
      var newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = ` 
                              <img src="${item.image}" >
                                <div class="info">
                                   <div class="product_name">${item.title}</div>
                                   <div class="product_price">$${item.price}</div>
                               </div>`;
      products.appendChild(newProduct);
    });
  });

 var searchInput = document.querySelector('input') ; 
 searchInput.addEventListener('input' , function(e){
     let txtSearch = e.target.value.trim().toLowerCase();
     let listProductDom = document.querySelectorAll('.product');
     listProductDom.forEach(item =>{
       
         if(item.innerText.toLowerCase().includes(txtSearch)){
               item.classList.remove('hide');
         }
         else{
               item.classList.add('hide');
         }
     })

 })