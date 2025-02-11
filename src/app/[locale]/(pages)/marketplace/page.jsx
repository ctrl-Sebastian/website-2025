//import { useState } from "react";
//import Image from "next/image";
//import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

import { useTranslations } from "next-intl";

export default function Marketplace() {
  const t = useTranslations("Marketplace");
  //const [searchBar, setSearchBar] = useState("");
  //const [isOpen, setIsOpen] = useState(false);
  const categoryBtnStyle = `w-full text-left text-lg font-semibold px-3 py-1 my-2 hover:shadow-lg shadow-white hover:bg-[#666A95] rounded-xl transition-all ease-out`;
  const CategoryEnum = Object.freeze({
    T_SHIRT: "T-Shirt",
    HOODIE: "Hoodie",
    HATS: "Hats",
    ACCESSORIES: "Accessories",
    ALL: "All",
  });

  //const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.ALL);
  //const [selectedProduct, setSelectedProduct] = useState();

  const items = [
    // T-Shirts
    {
      id: 1,
      name: "Basic White T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Graphic Print T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 24.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Vintage Logo T-Shirt",
      category: CategoryEnum.T_SHIRT,
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },

    // Hoodies
    {
      id: 4,
      name: "Comfort Fit Hoodie",
      category: CategoryEnum.HOODIE,
      price: 39.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Zip-Up Hoodie",
      category: CategoryEnum.HOODIE,
      price: 44.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Heavyweight Hoodie",
      category: CategoryEnum.HOODIE,
      price: 49.99,
      image: "https://via.placeholder.com/150",
    },

    // Hats
    {
      id: 7,
      name: "Snapback Cap",
      category: CategoryEnum.HATS,
      price: 14.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Beanie",
      category: CategoryEnum.HATS,
      price: 12.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Bucket Hat",
      category: CategoryEnum.HATS,
      price: 19.99,
      image: "https://via.placeholder.com/150",
    },

    // Accessories
    {
      id: 10,
      name: "Leather Belt",
      category: CategoryEnum.ACCESSORIES,
      price: 29.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Sunglasses",
      category: CategoryEnum.ACCESSORIES,
      price: 15.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Watch",
      category: CategoryEnum.ACCESSORIES,
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  // const selectProduct = (product) => {
  //   setSelectedProduct(product);
  //   setIsOpen(true);
  // };

  return (
    <>
      <div
        className="z-10 w-full h-[400px] p-8 lg:p-0 text-center flex flex-col justify-center border-b border-blue-100"
        style={{
          backgroundImage: `url('/images/marketplace/banner2.webp')`,
          backgroundPosition: "center center", // Adjust position of image
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="font-extrabold text-white text-7xl lg:text-8xl pb-2">
          Apolo 27
        </p>
        <p className="font-bold text-white text-2xl">{t("banner.subtitle")}</p>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#121836] justify-center items-center w-full h-full h-screen">
        <div className="text-white font-bold text-4xl text-center p-8 lg:p-16 space-y-10">
          {/* <div className="flex flex-col lg:flex-row justify-center space-x-4">
            <Image
              alt="merch1"
              width={300}
              height={300}
              src="/images/marketplace/300.png"
              className="transition-all opacity-80 filter blur-sm hover:blur-0 hover:opacity-60"
            />
            <Image
              alt="merch2"
              width={300}
              height={300}
              src="/images/marketplace/300.png"
              className="transition-all opacity-80 filter blur-sm hover:blur-0 hover:opacity-60"
            />
            <Image
              alt="merch3"
              width={300}
              height={300}
              src="/images/marketplace/300.png"
              className="transition-all opacity-80 filter blur-sm hover:blur-0 hover:opacity-60"
            />
          </div> */}
          <p className="flex justify-center">
            Coming Soon
            <span className="block animate-bounce duration-75">.</span>
            <span className="block animate-bounce duration-100">.</span>
            <span className="block animate-bounce duration-150">.</span>
          </p>
        </div>

        {/* <div className="w-full flex flex-col lg:w-1/5 text-center items-center lg:items-start lg:text-left text-white px-4 py-2 lg:py-8 lg:border-r-2 border-b-2 lg:border-b-0 border-r-0 border-blue-100">
          <p className="px-3 text-2xl font-bold">Filter by</p>
          <div className="flex flex-row lg:flex-col">
            {
              [CategoryEnum.ALL, CategoryEnum.T_SHIRT, CategoryEnum.HOODIE, CategoryEnum.HATS, CategoryEnum.ACCESSORIES].map((category, i) => (
                <button key={i} className={
                  categoryBtnStyle +
                  (selectedCategory === category ? " bg-[#666A95]" : "")
                } onClick={() => setSelectedCategory(category)}>{category}</button>
              ))
            }
          </div>
        </div>
        <div className="w-full lg:w-4/5 p-8 space-y-5">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="w-12 h-12 pl-5 py-2 text-white text-opacity-50 bg-white bg-opacity-20 rounded-l-xl" />
            <input
              type="text"
              className="px-4 py-3 rounded-r-xl font-semibold w-full bg-white bg-opacity-20 text-white outline-none"
              placeholder="Search for your next fit"
              onChange={(e) => setSearchBar(e.target.value)}
            />
          </div>
          <section className="w-full grid grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {items
              .filter((item) =>
                selectedCategory !== CategoryEnum.ALL
                  ? item.category === selectedCategory
                  : true
              )
              .filter((item) => item.name.toLowerCase().includes(searchBar))
              .map((item, i) => (
                <div
                  key={i}
                  className="space-y-2 text-left items-center w-fit bg-black p-5 rounded-xl
                  hover:cursor-pointer z-10"
                  onClick={() => selectProduct(item)}
                >
                  <Image
                    src={"/images/250.webp"}
                    width={250}
                    height={250}
                    alt={item.name}
                    className="rounded-xl"
                  />
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-white font-semibold">${item.price}</p>
                </div>
              ))}
          </section>
        </div> */}
      </div>

      {/* <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">NAME</DialogTitle>
            <Description>Descripcion del producto</Description>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cerrar</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog> */}
    </>
  );
}
