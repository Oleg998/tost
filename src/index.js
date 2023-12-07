import axios from 'axios';
const productCard = document.querySelector('.product-list');
async function Product() {
  const { data } = await axios.get(
    `https://food-boutique.b.goit.study/api/products/`
  );
  return data;
}
Product()
  .then(data => (productCard.innerHTML = getProduct(data.results)))
  .catch(error => console.error(error));

function getProduct(arr) {
  return arr
    .map(
      ({ img, _id, name, price, size, category, popularity }) =>
        `<li class="product-item js-card " data-id="${_id}">  
       <div class="catolog-item js-info">
        <div class="conteiner-img">
          <img class = "item-img" src="${img}" alt="${name}" loading="lazy /></div>
        </div>
        <h3 class="item-name">${name}</h3>
        <div class="catalog-info">
          <p class="item-info">Category:<span class="span-info">${category.replace(
            '_',
            ' '
          )}</span></p>
          <p class="item-info" >Size:<span class="span-info">${size.replace(
            'oz',
            'g'
          )}</span></p>
          <p class="item-info">Popularity:<span class="span-info" >${popularity}</span></p>
        </div>
        <div class="catalog-price">
          <p>$${price}</p>
          <button type="button" class=" btn-item js-btn  "></button>
        </div> 
        </div>     
  </li>`
    )
    .join('');
}

productCard.addEventListener('click', onclick);
function onclick(event) {
  if (event.target.classList.contains('js-btn')) {
    const { _id } = event.target.closest('.js-card').dataset;
    console.log(_id);
  }
}
function findProduct(productId) {
  return data.results.find(({ _id }) => _id === productId);
}
