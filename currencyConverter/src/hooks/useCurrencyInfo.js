import { useEffect,useState } from "react";

function useCurrencyInfo(fromcurrency,tocurrency,amount){
    const [data, setData]=useState(null)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res[fromcurrency][tocurrency])})
    },[fromcurrency,tocurrency])
    return data
}

function useAllCurrency(fromcurrency){
    const [data, setData]=useState(null)
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(Object.keys(res[fromcurrency]).slice(1))})
    },[fromcurrency])
    return data
}

export { useCurrencyInfo, useAllCurrency };