import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import InputField from './components/InputField'
import { InputField } from "./components";
import useCustomHook from "./hooks/useCustomHook";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCustomHook(from);
  const options = Object.keys(currencyInfo);

  const swapHandler = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const handleConvert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <h1 className="text-2xl  text-white text-center p-2" style={{background: "linear-gradient(#6190S8,#A7BFE8)"}}>
        Currency Convertor Heart Hacker 💖
      </h1>
      <div className="flex">
        <div className="img">
          <img src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="no image" />
        </div>
        <div className="flex justify-center items-center h-heightvh60 mt-20 flex-1 ">
          <div className="">
            <form className="bg-slate-300 rounded-lg pt-6 p-3" onSubmit={(e) => e.preventDefault()}>
              <InputField
                label={"From"}
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                currencyOption={options}
              />

              <div className="flex justify-center relative">
                <button
                  className="px-4 py-2 bg-gray-900 rounded text-white absolute bottom-[-20px] hover:bg-gray-950"
                  onClick={swapHandler}
                >
                  Swap
                </button>
              </div>

              <InputField
                label="To"
                className="mt-1"
                amount={convertedAmount}
                selectCurrency={to}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisable
              />
              <button
                className="w-full py-1 rounded bg-gray-900 text-white text-center hover:bg-gray-950"
                onClick={handleConvert}
              >
                {" "}
                Convert{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
