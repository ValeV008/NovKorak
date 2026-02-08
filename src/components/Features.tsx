import { useTranslation } from "next-i18next";

import Image from "next/image";

type FeatureItem = {
  name: string;
  description: string;
  icon: string;
};

type FeatureTranslations = {
  title?: string;
  subtitle?: string;
  description?: string;
  items?: FeatureItem[];
};

type FeaturesProps = {
  translationKey?: string;
};

const Features = ({ translationKey = "features" }: FeaturesProps) => {
  const { t } = useTranslation("common");
  const rawFeatures = t(translationKey, { returnObjects: true }) as
    | FeatureTranslations
    | string;
  const features: FeatureTranslations =
    rawFeatures && typeof rawFeatures === "object" ? rawFeatures : {};
  const { items } = features;
  const featuresList = Array.isArray(items) ? items : [];

  return (
    <div className={"py-12 bg-background"} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature: FeatureItem) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={"absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4"}
                  >
                    <Image
                      className={"inline-block"}
                      src={feature.icon}
                      alt={feature.name}
                      width={32}
                      height={32}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-justify">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
