'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import drip from "../../../public/assets/vector.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card';

const Page = () => {
  // State to store result from localStorage
  const [summaryResult, setSummaryResult] = useState({});
  const [tryonResult, setTryonResult] = useState({});

  // Effect to retrieve data from localStorage once the component has mounted
  useEffect(() => {
    // Check if localStorage is available
    if (typeof window !== "undefined") {
      const storedSummaryResult = localStorage.getItem('summary_result')
      const storedTryonResult = localStorage.getItem('tryon_result')
      if (storedSummaryResult && storedTryonResult) {
        setSummaryResult(JSON.parse(storedSummaryResult));
        setTryonResult(JSON.parse(storedTryonResult));
      }
    }
  }, []);

  console.log('Result:', summaryResult);

  return (
    <div className='w-full bg-wet'>
      <section className='flex flex-col gap-6 items-center w-full h-[1000px]'>
        <Image src={drip} width={2047} height={600} alt={""} className="absolute z-[-1]" />
        {/* Display result (optional) */}
        <div>
          {summaryResult ? (
            <pre>{JSON.stringify(summaryResult, null, 2)}{JSON.stringify(tryonResult, null, 2)}</pre>
          ) : (
            <p>No result found in localStorage</p>
          )}
        </div>
          <div className='mt-[100px]'>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          </div>
      </section>
    </div>
  );
};

export default Page;
