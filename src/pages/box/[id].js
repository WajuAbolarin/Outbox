import {
    Stack,
    HStack,
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
    FormLabel,
    Center,


} from '@chakra-ui/react'
import { CopyIcon} from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/react"
import {  MdArrowDownward, MdShare, MdVisibility } from "react-icons/md"
import {QuestionIcon} from '@chakra-ui/icons'
import BoxBackground from "../../components/BoxBackground";

const Index = () => (
    <BoxBackground>
        <Stack  flex="1" px="0" heigth="100%">
            <Box h={["40%", "35%"]} pb="4em" pt={["1em", "3em"]}>
                <Heading  textAlign="center">
                    My 20th Birthday
                </Heading>
                <Center mt="4em">
                    <HStack  spacing="24px">
                        <CopyIcon w={6} h={6}></CopyIcon>
                        <Icon w={6} h={6} as={MdShare} />
                        <Icon w={6} h={6} as={MdVisibility} />
                        <Icon w={6} h={6} as={MdArrowDownward} />
                    </HStack>   
                </Center>                
            </Box>
            
            {/*Form*/}
            <Box display="flex" justifyContent="center" flex="1" bg="blue.50" borderTop="5px solid #BEE3F8">
                <Box p="1em 0.5em" boxShadow="0px 1px 10px 3px #26272612, 2px -4px 20px 8px #26272600"
                     height="calc(100% + 2em)" mt="-2em"
                     background="white" width={["90%", "900px"]} borderRadius="10px">
                    <Heading textAlign="center">
                    Content Goes Here
                </Heading>
                </Box>
            </Box>
        </Stack>
    </BoxBackground>
)

export default Index
