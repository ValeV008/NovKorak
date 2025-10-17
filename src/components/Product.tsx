import React from "react";

import { useTranslation } from "next-i18next";

import Image from "next/image";

import Divider from "./Divider";

const Product = () => {
  const { t } = useTranslation("common");
  const product = t("product", { returnObjects: true }) as any;
  const [firstItem, secondItem] = (product.items || []) as any[];

  return (
    <section className={"bg-background py-8"} id="product">
      <div className={"container max-w-5xl mx-auto m-8"}>
        <h1
          className={"w-2/3 mx-auto md:w-full my-2 text-5xl font-bold leading-tight text-center text-primary"}
        >
          {product.title.split(" ").map((word: string, index: number) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={"flex flex-wrap"}>
          <div className={"w-full sm:w-1/2 p-6"}>
            <h3
              className={"text-3xl text-gray-800 font-bold leading-none mb-3"}
            >
              {firstItem?.title}
            </h3>
            <p className={"text-gray-600"}>{firstItem?.description}</p>
          </div>
          <div className={"w-full sm:w-1/2 p-6"}>
            {firstItem?.img && (
              <Image
                className="h-6/6"
                src={firstItem.img}
                alt={firstItem?.title}
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
        <div className={"flex flex-wrap flex-col-reverse sm:flex-row"}>
          <div className={"w-full sm:w-1/2 p-6"}>
            {secondItem?.img && (
              <Image
                className="h-6/6"
                src={secondItem.img}
                alt={secondItem.title}
                width={500}
                height={500}
              />
            )}
          </div>
          <div className={"w-full sm:w-1/2 p-6"}>
            <div className={"align-middle"}>
              <h3
                className={"text-3xl text-gray-800 font-bold leading-none mb-3"}
              >
                {secondItem?.title}
              </h3>
              <p className={"text-gray-600 mb-8"}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
