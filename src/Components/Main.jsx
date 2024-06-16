import { useRef,useState } from "react";
const randomWords =()=> "apple banana cherry date elderberry fig grapefruit huckleberry iceplant jackfruit kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ume vanilla watermelon xigua yew zucchini alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega".split(" ").sort(()=>Math.random()-0.5);

export default function Main() {
   const [useInput,setUserInput]=useState('');
   const cloud=useRef(randomWords());
    return (<div className=" ">
   
       <h1 className="text-white text-2xl">{cloud.current.toString()}|</h1>
       <input type='text' value={useInput} onChange={(e)=>setUserInput(e.target.value)} />
    </div>
    
    
  )
}
