import React, { useState } from "react";
import { faker } from '@faker-js/faker';
import Timer from "./Timer";
import Generate from "./Generate";
import RestartButton from "./Restart";
import Result from "./Result";
import UserTyping from "./UserTyping";

const Main = () => {
  const generateWords = () => faker.lorem.words(100);
  const [word, setWord] = useState(generateWords());

  const handleRestart = () => {
    setWord(generateWords());
  };

  return (
    <div className="w-screen">
      <Timer timeLeft={30} />
      {/* <UserTyping className="absolute text-yellow-500 z-1" userinput="Hello" /> */}
      <Generate words={word} />
      <RestartButton
        className="mx-auto mt-10 text-slate-500"
        onRestart={handleRestart}
      />
      <Result 
      error={0}
        total={100}
      accuracy={100}
      />
    </div>
  );
};

export default Main;
