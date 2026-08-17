import React from 'react';
import { useParams } from 'react-router';
import { servicesData } from '../../../data/servicesData';
import CategoryHero from '../../../Components/common/CategoryHero';
import StatsSection from '../../../Components/common/StatsSection';
import Pricing from '../../../Components/common/Pricing';
import BetterInEveryWay from '../../../Components/common/BetterInEveryWay';
import HowItWorks from '../../../Components/common/HowItWorks';
import Faq from '../../../Components/common/Faq';
import MapSection from '../../../Components/common/MapSection';

const CategoryView = () => {
  const { id } = useParams();
  const data = servicesData[id];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-800 font-[Poppins]">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <CategoryHero heroData={data.hero} />
      <StatsSection />
      <Pricing plans={data.pricing} />
      <BetterInEveryWay rows={data.comparison} />
      <HowItWorks />
      <Faq />
      <MapSection />
    </div>
  );
};

export default CategoryView;
