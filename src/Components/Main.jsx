import { useRef, useState } from "react";
import { faker } from '@faker-js/faker';

const words = faker.lorem.words(100);

function Generter({ words }) {
  return <h1 className="text-white text-2xl m-7">{words}|</h1>;
}

function Countimer({ timeLeft }) {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
}

export default function Main() {
  console.log(words);
  return (
    <div className="w-screen">
    
      <Countimer timeLeft={30} />
      <Generter words={words} />
    </div>
  );
}