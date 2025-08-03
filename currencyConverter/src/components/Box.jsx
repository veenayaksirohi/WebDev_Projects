import React, { useState, useId } from 'react';
import { useCurrencyInfo, useAllCurrency } from '../hooks/useCurrencyInfo';

export default function Box({
  tell,
  currencies,
  amountid,
  currencyid,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange
}) {


  return (
    <div className="bg-white w-full h-36 mx-1 my-2 p-4 rounded flex flex-col justify-between">
      <div className="w-full flex items-center justify-between">
        <label htmlFor={amountid} className="font-medium">💬 {tell}</label>
        <label htmlFor={currencyid} className="font-medium">🌐 Currency Type</label>
      </div>

      <div className="w-full flex items-center justify-between">
        <input
          id={amountid}
          type="number"
          value={amount}
          className="border p-2 rounded"
          onChange={(e)=>{onAmountChange(e.target.value)}}
        />

        <div>
          <input
            type="text"
            id={currencyid}
            name="currency"
            list={`currency-list-${currencyid}`}
            value={currency}
            className="border p-2 rounded"
            onChange={(e) => onCurrencyChange(e.target.value)}
          />

          <datalist id={`currency-list-${currencyid}`}>
            {currencies?.map((code) => (
              <option key={code} value={code} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
}
