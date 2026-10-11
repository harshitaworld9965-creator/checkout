import { useState } from "react";

const STEPS = ["Cart", "Payment", "Done"];

const STARTING_CART = [
  {id:1, name:"Fig & Cedar", price: 899, qty:1},
  {id:2, name:"Sea Salt Linen", price:749, qty:2},
  {id:3, name:"Midnight Rose", price:999, qty:1},
]

export default function App(){
  const[step, setStep] = useState(0);
  const[cart, setCart]= useState(STARTING_CART);
  const[details, setDetails] = useState({name:"", email:"", address:""});

  const next = () => setStep((s) => Math.min(s+1, STEPS.length -1));
  const back = () => setStep((s) => Math.max(s-1, 0));

  return (
    <main className="checkout">
      <h1 className="brand">Wick &amp; Co.</h1>
      <p>Step {step+1} of {STEPS.length}: {STEPS[step]}</p>

      {step === 0 && <p>Cart goes here</p>}
      {step ===1 && <p>Details form go here</p>}
      {step ===2 && <p>Payment goes here</p>}
      {step ===3 && <p>Success animation goes here</p>}

      <div className="nav">
        {step>0 && step<3 && <button onClick={back}>Back</button>}
        {step<3 && <button onClick={next}>Next</button>}
      </div>
    </main>
  );
}