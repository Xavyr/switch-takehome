"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoadingBlock } from "./LoadingBlock";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/benefits";

type Benefit = { title: string; description: string };

export const BenefitBlocks = () => {
  const [data, setData] = useState<{ benefits: Benefit[] }>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBenefits = async () => {
      const response = await fetch(API_URL);
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
      {loading &&
      // eslint-disable-next-line no-unused-vars
        new Array(16).fill(0).map((_, i) => {
          return <LoadingBlock key={`key-${i}`} />;
        })}
      {data?.benefits?.map(({ title, description }: Benefit) => {
        return (
          <BenefitBlock
            key={`${title}-key`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

const BenefitBlock: React.FC<Benefit> = ({ title, description }) => {
  const [_, setRotate] = useState(0);
  const [didAcknowledge, setDidAcknowledge] = useState(false);

  return (
    <motion.div
      transition={{ type: "spring" }}
      className="box flex flex-col border m-8 border-black max-w-[350px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: [0, 0, 360, 360, 0], }}
    >
      <div className="bg-red-600 text-white text-lg font-bold p-4 flex flex-row justify-between">
        {title}
        {didAcknowledge && (
          <motion.svg
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 360, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="#4EF8D2"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </motion.svg>
        )}
      </div>
      <div className="bg-white text-gray-800 p-4">{description}</div>
      <div className="flex justify-center items-center">
        <motion.button
          disabled={didAcknowledge}
          onClick={() => {
            console.log('fired')
            if (!didAcknowledge) {
              setRotate(360);
              setDidAcknowledge(true);
            }
          }}
          whileHover={{ scale: !didAcknowledge ? 1.2 : 1 }}
          className={`${
            didAcknowledge ? `bg-gray-500` : `bg-customRed`
          } text-white py-2 px-4 rounded text-black m-4`}
        >
          Acknowledge
        </motion.button>
      </div>
    </motion.div>
  );
};
