import ProductCard from "../components/ProductCard";
import scw from "../assets/product-images/shampoo-conditioner-bodywash.jpg";
import beardOil from "../assets/product-images/beard-oil.jpg";
import clayPomade from "../assets/product-images/clay-pomade.jpg";

const productsPage = () => {
  return (
    <div className="flex flex-col gap-3 w-3/4 mx-auto py-5">
      <div>
        <h2 className="text-[2rem] font-bold">All Products</h2>
        <p className="text-gray-500 font-bold text-xs">
          Buy the products in store
        </p>
      </div>
      <div className="flex flex-col items-center justify-center font-semibold px-3 gap-3 border-2 border-primary">
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4 pt-3">
          <ProductCard
            price="$45 - Shampoo, Conditioner & Body Wash"
            image={scw}
          />
          <p className="text-sm md:text-base bg-primary text-white p-5 rounded">
            Our all-in-one shampoo, conditioner, and body wash is designed to
            cleanse, condition, and soften hair and skin. It's enriched with
            natural ingredients that leave your hair and skin feeling fresh and
            rejuvenated.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4">
          <ProductCard price="$15 - Beard Oil" image={beardOil} />
          <p className="text-sm md:text-base bg-primary text-white p-5 rounded">
            Our premium beard oil is formulated to soften and condition your
            beard, while moisturizing the skin underneath. It helps to eliminate
            itchiness and beardruff, promoting healthier beard growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4">
          <ProductCard price="$20 - Hair Clay & Pomade" image={clayPomade} />
          <p className="text-sm md:text-base bg-primary text-white p-5 rounded">
            Our hair clay and pomade provide a strong hold with a matte finish.
            They are perfect for achieving a variety of hairstyles while
            maintaining the hair's flexibility. Enriched with natural
            ingredients, they also nourish the hair and scalp.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4">
          <ProductCard
            price="$45 - Shampoo, Conditioner & Body Wash"
            image={scw}
          />
          <p className="text-sm md:text-base bg-primary text-white p-5 rounded">
            Our all-in-one shampoo, conditioner, and body wash is designed to
            cleanse, condition, and soften hair and skin. It's enriched with
            natural ingredients that leave your hair and skin feeling fresh and
            rejuvenated.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4">
          <ProductCard price="$15 - Beard Oil" image={beardOil} />
          <p className="text-sm md:text-base bg-primary text-white p-5 rounded">
            Our premium beard oil is formulated to soften and condition your
            beard, while moisturizing the skin underneath. It helps to eliminate
            itchiness and beardruff, promoting healthier beard growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-center w-3/4 pb-3">
          <ProductCard price="$20 - Hair Clay & Pomade" image={clayPomade} />
          <p className="text-sm md:text-base">
            Our hair clay and pomade provide a strong hold with a matte finish.
            They are perfect for achieving a variety of hairstyles while
            maintaining the hair's flexibility. Enriched with natural
            ingredients, they also nourish the hair and scalp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default productsPage;
