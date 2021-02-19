import {
    Stack,
    Text,
    Heading,
    Tooltip,
    Box,
    Flex,
    Input,
    Textarea,
    Radio,
    FormControl,
    Button,
    FormLabel, IconButton,

} from '@chakra-ui/react'
import {QuestionIcon} from '@chakra-ui/icons'
import BoxBackground from "../../components/BoxBackground";
import ColorIcon from "../../components/ColorIcon";
import FontIcon from "../../components/FontIcon";
import SendIcon from "../../components/SendIcon";

const Index = () => (
    <BoxBackground>
        <Stack flex="1" px="0" heigth="100%">
            <Box h={["40%", "35%"]} pb="4em" pt={["1em", "3em"]}>
                <Heading textAlign="center">
                    My 20th Birthday
                </Heading>
                <Box background="transparent" display="flex" justifyContent="center" mt="2em" alignItems="center"  width="100%">

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
            <Box display="flex" justifyContent="center" flex="1" bg="blue.50" borderTop="5px solid #BEE3F8">
                <Box p="1em 0.5em" boxShadow="0px 1px 10px 3px #26272612, 2px -4px 20px 8px #26272600"
                     height="calc(100% + 2em)" mt="-2em"
                     background="white" width={["90%", "900px"]} borderRadius="10px">
                    <Stack>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    </BoxBackground>
)

export default Index
