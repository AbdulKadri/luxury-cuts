import ProductCard from "./ProductCard";
import scw from "../assets/product-images/shampoo-conditioner-bodywash.jpg";
import beardOil from "../assets/product-images/beard-oil.jpg";
import clayPomade from "../assets/product-images/clay-pomade.jpg";
import Button from "./Button";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 md:pt-5 pb-3 bg-gray-200 text-black">
      <h3 className="text-[2rem]">Products</h3>
      <p className="md:hidden text-[0.7rem] text-center mx-[3rem] lg:mx-[6rem] pb-5 mb-5 border-b-[1px] border-black">
        Explore our curated selection of premium hair and beard care products at
        our Barbershop. We handpick the finest products from reputable brands to
        help you maintain your look with ease. Experience the difference of
        quality grooming essentials right at your fingertips.
      </p>
      <p className="hidden md:block text-[.9rem] text-center mx-[3rem] lg:mx-[6rem] pb-5 mb-5 border-b-[1px] border-black">
        Welcome to the products section of our Barbershop. Here, we've carefully
        curated an impressive range of top-tier hair and beard care essentials,
        sourced from the most trusted brands in the industry. Our selection is
        guided by our commitment to helping you maintain and enhance your style
        long after you've left our chair. Whether you're looking for nourishing
        shampoos, conditioners, robust styling gels, pomades, or beard oils, and
        balms, you'll find a product that fits your needs in our collection.
        <br />
        <br />
        We understand that everyone's hair and beard are unique, which is why we
        offer a diverse lineup of products to cater to different hair types,
        textures, and styling preferences. These products not just meet the
        highest standards of quality but also align with our ethos of providing
        an unparalleled grooming experience. Explore our selection and find your
        next grooming staple today.
      </p>

      <div className="flex flex-col md:flex-row md:justify-around gap-4 w-full md:gap-0">
        <ProductCard
          price="$45 - Shampoo, Conditioner & Body Wash"
          image={scw}
        />
        <ProductCard price="$15 - Beard Oil" image={beardOil} />
        <ProductCard price="$20 - Hair Clay & Pomade" image={clayPomade} />
      </div>
      <div className="mt-6 mb-3 text-white">
        <Button text="See All Products" />
      </div>
    </div>
  );
};

export default Products;
