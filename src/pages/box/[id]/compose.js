import {
    Stack,
    Text,
    Heading,
    IconButton,
    Box,
    Flex,
    Center,

} from '@chakra-ui/react'
import BoxBackground from "components/BoxBackground";
import Head from "next/head";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import ColorIcon from "../../../components/ColorIcon";
import FontIcon from "../../../components/FontIcon";
import SendIcon from "../../../components/SendIcon";

const backGrounds = {
    '#F7FAFC': '#1A202C',
    '#822727': '#FFF5F5',
    '#94A3B8': '#F1F5F9',
    '#3F3F46': '#F1F5F9',
    '#991B1B': '#FCE7F3',
}
const fonts = [
    {name: 'New York', value: "'New York', cursive"},
    {name: 'System', value: "'Amatic SC', cursive'"},
    {name: 'Bangers', value: "'Bangers', cursive"},
    {name: 'Dancing Script', value: "'Dancing Script', cursive"},
    {name: 'Indie Flower', value: "'Indie Flower', cursive"},
    {name: 'Lobster', value: "'Lobster', cursive"},
    {name: 'Montserrat', value: "'Montserrat', sans-serif"},
    {name: 'Playfair Display', value: "'Playfair Display', serif"},
    {name: 'Roboto', value: "'Roboto', sans-serif"}
]

export default function Compose() {
    const [_colorOrder, setColorOrder] = useState(0)
    const [_fontOrder, setFontOrder] = useState(0)

    const [background, textColor] = useMemo(() => {
        const colorIndex = _colorOrder % Object.keys(backGrounds).length
        return Object.entries(backGrounds)[colorIndex]
    }, [_colorOrder])

    const fontFamily = useMemo(() => {
        const index = _fontOrder % Object.keys(fonts).length
        return Object.values(fonts)[index]
    }, [_fontOrder])


    const [text] = useState('')

    const editorRef = useRef()

    const handleChange = useCallback(e => {
        if (e.target.innerText.length > 208) {
            e.target.innerText = e.target.innerText.slice(0, 208)
        }
    }, [])

    useEffect(() => {
        document.execCommand("defaultParagraphSeparator", false, "br");
        const editor = editorRef.current
        editor.focus()
    }, [])


    return (
        <BoxBackground>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Bangers&family=Dancing+Script&family=Indie+Flower&family=Lobster&family=Montserrat:ital,wght@0,300;0,400;1,300;1,400&family=Playfair+Display:ital@0;1&family=Roboto:ital,wght@0,100;0,400;1,300;1,400&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Stack flex="1" px="0" heigth="100%">
                <Box h={["40%", "35%"]} pb="4em" pt={["1em", "3em"]}>
                    <Text textAlign="center">Send <u>Waju</u> a message</Text>
                    <Heading textAlign="center" mt="1em">
                        My 20th Birthday
                    </Heading>
                    <Box background={["gray.700", "transparent"]} display="flex" justifyContent="center" mt={["2em"]} alignItems="center" position={["fixed", "static"]} bottom={[0, null]} width="100%" py={["0.5em", 0]} >

                        <IconButton  onClick={() => {
                            editorRef.current?.focus?.()
                            setColorOrder(c => c + 1)
                        }} aria-label="Change background"
                                    icon={<ColorIcon/>}/>
                        <IconButton onClick={() => {
                            editorRef.current?.focus?.()
                            setFontOrder(c => c + 1)
                        }} aria-label="change font" ml="1em"
                                    icon={<FontIcon/>}/>
                        <IconButton aria-label="send message" ml="1em" icon={<SendIcon/>}/>
                    </Box>
                </Box>
                {/*Form*/}
                <Box  display="flex" justifyContent="center" flex="1" bg="blue.50" borderTop="5px solid #BEE3F8">
                    <Box p="1em 0.5em" boxShadow="0px 1px 10px 3px #26272612, 2px -4px 20px 8px #26272600"
                         height="calc(100% + 2em)" mt="-2em"
                         width={["90%", "900px"]}
                         borderRadius="10px"
                         ref={editorRef}
                         contentEditable
                         color={textColor}
                         dangerouslySetInnerHTML={{__html: text.slice(0, 208)}}
                         data-placeholder="Type a message to Waju"
                         background={background}
                         display="grid"
                         placeContent="center"
                         textAlign="center"
                         gridAutoRows="max-content"
                         overflow="hidden"
                         wordBreak="break-word"
                         lineHeight={1.6}
                         outline="none"
                         fontSize={["1.2rem", "3rem"]}
                         fontFamily={fontFamily.value}
                         onInput={handleChange}
                    />
                </Box>
            </Stack>
        </BoxBackground>
    )
}

