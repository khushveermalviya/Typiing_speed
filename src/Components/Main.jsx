import {useState} from "react";
import { faker } from '@faker-js/faker';
import Timer from "./Timer";
import Generate from "./Generate";
import RestartButton from "./Restart";




const Main = () => {
  const words = faker.lorem.words(100);
  const [word, setWord] = useState(words);
  const handdlRestart =()=>{
  setWord(words)
}

    return (
        <div className="w-screen">
            <Timer timeLeft={30} />
            <Generate words={words} />
            <RestartButton
                className="mx-auto mt-10 text-slate-500"
                onRestart={handdlRestart}
            />
        </div>
    );
};

export default Main;
