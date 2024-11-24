import Product from "../../Products/product";

const featureImages = [];

const tagLineFeatur = ["Free Shipping","Online Order","Save Money","Promotions","Happy Sell","F24/7 Support"];

const importImages = require.context('../../../img/features', false, /\.(png|jpe?g|gif)$/);
importImages.keys().forEach((image) => {
  featureImages.push(importImages(image));
});
const Home = () => {
    // console.log(featureImages);
    return (
        <>
        <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value deals</h2>
            <h1>On all products</h1>
            <p>Save more with coupons & up to 70% off! </p>
            <button>Shop Now</button>
        </section>

        <section id="feature" class="section-p1">
        {featureImages.map((image, index) => (
            <div class="fe-box">
            <img key={index} src={image} alt={`Product ${index + 1}`} />
            <h6>{tagLineFeatur[index]}</h6>
            </div>        
        ))}

        <Product/>
        
        
    </section>

        </>
    );
};

export default Home;