const productImages = [];

const importImages = require.context('../../img/products', false, /\.(png|jpe?g|gif)$/);
importImages.keys().forEach((image) => {
  productImages.push(importImages(image));
});
const Product = () =>{
    return(
    <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="pro-container">
        {productImages.map((image, index) => (
            <div class="pro">
            <img key={index} src={image} alt={`Product ${index + 1}`} />
            <div class="des">
                <span>adidas</span>
                <h5>Cartoon Astronaut T-Shirts</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$78</h4>
            </div>
            <a href="#"><i class="fal fal-shopping-cart cart"></i></a>
        </div>        
        ))}
            
        </div>
    </section>

    );
}

export default Product;