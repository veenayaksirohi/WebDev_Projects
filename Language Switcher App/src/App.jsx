import { useState } from 'react'
import Selecter from './components/LanguageSelector'
import Greeting from './components/Greeting'
import { LangContext } from './context/LangContext'
import { ChakraProvider, defaultSystem  } from '@chakra-ui/react';


function App() {
  const [lang, setLang] = useState("er")
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <ChakraProvider resetCSS={false} value={defaultSystem} >

          <Selecter />
        </ChakraProvider>

        <Greeting />
      </div>
    </LangContext.Provider>
  )
}

export default App
