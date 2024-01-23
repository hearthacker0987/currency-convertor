import React, { useId } from 'react'

function InputField({
    label,
    className = "",
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
}) {
    const uId = useId();
  return (
    <>
        <div className={`bg-white rounded-lg p-3 mb-3 shadow flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={uId} className='mb-2 text-black/60'>{label}</label>
                <input type="number" className='outline-none px-1 w-full py-1.5'
                id={uId}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                disabled= {amountDisable}
                placeholder='Enter Amount'/>
            </div>
            <div className="w-1/2 flex items-end flex-col text-right">
                <p className='text-black/60 mb-2'>Currency Type</p>
                <select className='outline-none rounded-lg px-1 py-1 bg-slate-300'
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                value={selectCurrency}
                disabled={currencyDisable}>
                {currencyOption.map((currency)=> (
                    <option value={currency} >{currency}</option>
                ))}
                </select>
            </div>
        </div>
    
    </>
  )
}

export default InputField
