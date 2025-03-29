import React from 'react';
import { Button } from "@/components/ui/button"; // Ensure you have the correct Button import

const Hero = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48 ">
      <h1 className="font-bold text-6xl text-center">
        AI YOUTUBE SHORT Video Generator
      </h1>

      <p className="mt-4 text-2xl text-center text-gray-500">
        AI-generated scripts, images, and videos help you create, edit, and publish engaging shorts with ease!
      </p>

      <div className="mt-7 flex gap-8 text-gray-500">
        <Button size="lg" variant="secondary">Explore</Button>
        <Button size="lg">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
