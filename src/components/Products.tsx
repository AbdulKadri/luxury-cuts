import ProductCard from "./ProductCard";
import scw from "../assets/product-images/shampoo-conditioner-bodywash.jpg";
import beardOil from "../assets/product-images/beard-oil.jpg";
import clayPomade from "../assets/product-images/clay-pomade.jpg";
import Button from "./Button";

const Products = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-1 md:pt-1 pb-3 bg-bgprimary text-tprimary">
      <h3 className="text-[3rem] text-primary">Products</h3>
      <p className="md:hidden text-[0.8rem] md:text-[0.9rem] text-center mx-[2rem] lg:mx-[6rem]">
        Explore our curated selection of premium hair and beard care products at
        our Barbershop. We handpick the finest products from reputable brands to
        help you maintain your look with ease. Experience the difference of
        quality grooming essentials right at your fingertips.
      </p>
      <p className="hidden md:block text-[0.9rem] text-center mx-[3rem] lg:mx-[6rem]">
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
      <hr className="w-[90%] my-5 border-primary" />
      <div className="flex flex-col md:flex-row md:justify-around gap-4 w-full md:gap-0">
        <ProductCard
          price="$45 - Shampoo, Conditioner & Body Wash"
          image={scw}
          classes="overflow-hidden overflow-ellipsis whitespace-nowrap"
        />
        <ProductCard
          price="$15 - Beard Oil"
          image={beardOil}
          classes="overflow-hidden overflow-ellipsis whitespace-nowrap"
        />
        <ProductCard
          price="$20 - Hair Clay & Pomade"
          image={clayPomade}
          classes="overflow-hidden overflow-ellipsis whitespace-nowrap"
        />
      </div>
      <div className="mt-6 mb-3 text-white">
        <Button text="See All Products" link="/products" />
      </div>
    </div>
  );
};

export default Products;
