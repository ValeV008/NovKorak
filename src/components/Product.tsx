import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

const Product = () => {
  const { t } = useTranslation("common");
  const product = t("product", { returnObjects: true }) as any;
  const [firstItem, secondItem] = (product.items || []) as any[];

  return (
    <section className={"bg-background py-8"} id="product">
      <div className={"container max-w-5xl mx-auto m-8"}>
        <div className={"flex flex-wrap mb-20"}>
          <div className={"w-full sm:w-1/2 p-6"}>
            <h3
              className={"text-3xl text-gray-900 font-bold leading-none mb-3 mt-10"}
            >
              {firstItem?.title}
            </h3>
            <p className={"mb-8"}>{firstItem?.description}</p>
            <Link
              href={"/otroci"}
              className="inline-block px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {firstItem?.gumbText}
            </Link>
          </div>
          <div className={"w-full sm:w-1/2 p-6"}>
            {firstItem?.img && (
              <Image
                className="h-6/6 rounded-lg"
                src={firstItem.img}
                alt={firstItem?.title}
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
        <div className={"flex flex-wrap flex-col-reverse sm:flex-row sm:items-stretch"}>
          <div className={"w-full sm:w-1/2 p-6 sm:flex sm:items-end"}>
            {secondItem?.img && (
              <Image
                className="h-6/6 rounded-lg sm:self-end"
                src={secondItem.img}
                alt={secondItem.title}
                width={500}
                height={500}
              />
            )}
          </div>
          <div className={"w-full sm:w-1/2 p-6 flex flex-col"}>
            <div className={"flex flex-col h-full"}>
              <h3
                className={"text-3xl text-gray-900 font-bold leading-none mb-3 mt-10"}
              >
                {secondItem?.title}
              </h3>
              <p className={"mb-8"}>{secondItem?.description}</p>
              <Link
                href={"/odrasli"}
                className="inline-block px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-secondary transition-colors duration-200 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-6 sm:mt-auto sm:self-start"
              >
                {secondItem?.gumbText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
