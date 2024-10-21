

function changeimgOpe(changeimg){
    const product = document.getElementById('product-image');

    if('img1' == changeimg){
    product.src = './images/macbook.jpg';
    }else if('img2' == changeimg){
        product.src = './images/macbook-img-1.jpg';
    }else if('img3' == changeimg){
        product.src = './images/macbook-img-2.jpg';
    }else if('img4' == changeimg){
        product.src = './images/macbook-img-3.jpg';
    }else if('img5' == changeimg){
        product.src = './images/macbook-img-4.jpg';
    }else if('img6' == changeimg){
        product.src = './images/macbook-img-5.jpg';
    }

}