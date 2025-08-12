import React from 'react'
import { LangContext } from '../context/LangContext'
import { useContext } from "react"

function Greeting() {
        const { lang, setLang } = useContext(LangContext)
        let greet=''
        if (lang==='en'){
            greet='Hello!'
        }
        else if (lang==='fr') {
            greet='Bonjour!'
        } else {
            greet= ''
        }
  return (
    <div className='p-8 m-96 text-4xl text-orange-500'>
      {greet}
    </div>
  )
}

export default Greeting
