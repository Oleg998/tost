import axios from 'axios';
const productCard= document.querySelector(".product-list")
 async function Product() {
  const { data } =  await axios.get(
    `https://food-boutique.b.goit.study/api/products/`
  );
  return data;
}
Product()
  .then(data =>productCard.innerHTML= getProduct(data.results))
  .catch(error => console.error(error));






function getProduct(arr) { 
    return arr.map(
    ({ img ,_id,name,price,size,category,popularity}) =>`<li class="product-item ">
    
    <a class="link" href="">
    <div class="catolog-item">
      <div class="bg-img">
        <img class = "item-img" src="${img}" alt="${name}" /></div>
       
          <h3 class="item-name">${name}</h3>
          <div class="catalog-info">
          <p class="item-info">Category:<span class="span-info">${category}</span></p>
          <p class="item-info" >Size:<span class="span-info">${size}</span></p>
          <p class="item-info">Popularity:<span class="span-info" >${popularity}</span></p>
        </div>
        <div class="catalog-price">
          <p>$${price}</p>
          <button type="button"></button>
        </div>
      </div>
    </a>
   
  </li>`
    ).join('')
}

