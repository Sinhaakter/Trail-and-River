
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    perPage: 5,
    rewind: true,
    pagination: false
  });
  splide.mount();
});

const cartbtn = document.getElementById('add-cart')

function addcartfuncation(){
  cartbtn.innerHTML ="added to cart"
}