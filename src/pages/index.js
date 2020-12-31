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
    FormLabel,

} from '@chakra-ui/react'
import {QuestionIcon} from '@chakra-ui/icons'
import BoxBackground from "../components/BoxBackground";

const Index = () => (
    <BoxBackground>

        <Stack flex="1" px="0" heigth="100%">
            <Box h={["10%", "15%"]}/>
            {/*Form*/}
            <Box display="flex" justifyContent="center" flex="1" bg="blue.50" borderTop="5px solid #BEE3F8">
                <Box p="1em 0.5em" boxShadow="0px 1px 10px 3px #26272612, 2px -4px 20px 8px #26272600"
                     height="calc(100% + 8em)" mt="-8em"
                     background="white" width={["80%", "600px"]} borderRadius="10px">
                    <Flex align="baseline" justify="center">
                        <Heading textAlign="center" mr="1em" my="1em" fontSize={['16px', '24px']}>Create a
                            box</Heading>
                        <Tooltip shouldWrapChildren label="Right start" placement="right-start">
                            <QuestionIcon/>
                        </Tooltip>
                    </Flex>
                    <Text textAlign="center" px="2em" fontSize={["x-small", "small"]}> A box corresponds to a
                        life
                        event like an Aniversary, birthday or new
                        month and allows you to collect messages properly</Text>

                    <Stack spacing="1.5rem" fontSize={["12px", "14px"]} as="form"
                           onSubmit={e => e.preventDefault()}
                           mt={["1em", "3em"]} width={["90%", "80%"]} mx="auto">
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input fontSize="inherit" placeholder="The new Year - 2021" label="Name"/>

                        </FormControl>

                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea label="description" rows={4} fontSize="inherit"
                                      placeholder="Provide a brief description for this box"/>

                        </FormControl>

                        <FormControl>
                            <FormLabel>Visibility</FormLabel>
                            <Flex>
                                <Radio fontSize="inherit"/>
                                <Text ml="1em" fontSize="inherit">Make messages in this box public</Text>
                            </Flex>
                        </FormControl>

                        <Button colorScheme="blue">
                            Continue with Twitter
                        </Button>
                        <Button colorScheme="red">
                            Continue with Google
                        </Button>
                    </Stack>
                </Box>
                {/*    /end form*/}
            </Box>
        </Stack>
    </BoxBackground>
)

export default Index
