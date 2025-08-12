"use client"
import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import { LuGlobe } from 'react-icons/lu'
import { LangContext } from '../context/LangContext'
import { useContext } from "react"

const Selecter = () => {
    const { lang, setLang } = useContext(LangContext)
    const [value, setValue] = useState("en")
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="solid"
                    size="md"
                    colorScheme="blue"
                    borderRadius="xl"
                    px={4}
                    py={2}>
                    <LuGlobe /> Language
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="10rem">
                        <Menu.RadioItemGroup
                            value={value}
                            onValueChange={(e) => {
                                setLang(e.value);
                                setValue(e.value);
                            }}

                        >
                            {items.map((item) => (
                                <Menu.RadioItem key={item.value} value={item.value}>
                                    {item.label}
                                    <Menu.ItemIndicator />
                                </Menu.RadioItem>
                            ))}
                        </Menu.RadioItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

const items = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
]

export default Selecter