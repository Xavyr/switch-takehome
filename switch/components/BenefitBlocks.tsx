"use client";
import { useEffect, useState } from "react";
import { LoadingBlock } from "./LoadingBlock";

type Benefit = { title: string; description: string };

export const BenefitBlocks = () => {
  const [data, setData] = useState<{ benefits: Benefit[] }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBenefits = async () => {
      const response = await fetch("http://localhost:3000/api/benefits");
      if (!response.ok) {
        throw new Error("Failed to fetch benefits");
      }
      const results = await response.json();
      setData(results);
      setLoading(false);
    };

    fetchBenefits();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {loading && new Array(16).fill(0).map((_, i) => {
        return <LoadingBlock key={`key-${i}`} />
      }) }
      {data?.benefits?.map(({ title, description }: Benefit) => {
        return (
          <BenefitBlock
            key={`${String(Math.random())}-key`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

const BenefitBlock: React.FC<Benefit> = ({ title, description }) => {
  return (
    <div className="flex flex-col border m-8 border-black max-w-[350px]">
      <div className="bg-red-600 text-white text-lg font-bold p-4">{title}</div>
      <div className="bg-white text-gray-800 p-4">{description}</div>
    </div>
  );
};


