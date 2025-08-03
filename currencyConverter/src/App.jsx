import { useState, useId, useEffect } from 'react'
import Box from './components/Box'
import { useCurrencyInfo, useAllCurrency } from './hooks/useCurrencyInfo'


function App() {
  const currencies = useAllCurrency('usd')
  const fromamountid = useId()
  const fromcurrencyid = useId()
  const toamountid = useId()
  const tocurrencyid = useId()
  const [fromAmount, setFromAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toAmount, setToAmount] = useState(0)
  const [toCurrency, setToCurrency] = useState('inr')

const rate = useCurrencyInfo(fromCurrency, toCurrency)  // e.g. 0.84
useEffect(() => {
  if (rate != null) {
    setToAmount((+fromAmount) * rate)
  }
}, [fromAmount, fromCurrency, toCurrency, rate])


  return (
    <>
      <div
        className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1622662124723-5c60aafebd4f?q=80&w=870&auto=format&fit=crop…')] bg-cover bg-center flex items-center justify-center"
      >
        <div
          className="bg-white/30 backdrop-filter backdrop-blur-sm rounded-2xl max-w-2xl h-11/12 w-full mx-auto p-6 flex flex-col items-center justify-evenly"
        > <h1>Currency Converter App</h1>
          <div className="flex flex-col items-center justify-evenly w-full relative">

            <Box tell={"From"} currencies={currencies} currencyid={fromcurrencyid} amountid={fromamountid} amount={fromAmount}
              currency={fromCurrency}
              onAmountChange={setFromAmount}
              onCurrencyChange={setFromCurrency} />

            <button className='bg-blue-700 absolute w-14 h-10 text-center text-white rounded-lg' onClick={()=>{
            setToCurrency(fromCurrency)
            setFromCurrency(toCurrency)
            }}>swap</button>

            <Box tell={'To'} currencies={currencies} currencyid={tocurrencyid} amountid={toamountid} amount={toAmount}
              currency={toCurrency}
              onAmountChange={setToAmount}
              onCurrencyChange={setToCurrency} />
          </div>
          <button className="bg-blue-700 text-white text-3xl text-center w-full h-20 m-2">Convert</button>
        </div>
      </div>
    </>

  )
}

export default App
