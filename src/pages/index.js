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

const tip = ` A box corresponds to a
                        life
                        event like an Anniversary, birthday or new
                        month and allows you to collect messages properly`
const Index = () => (
    <BoxBackground>

        <Stack flex="1" px="0" heigth="100%">
            <Box h={["30%","25%"]} mb="6em"/>
            {/*Form*/}
            <Box display="flex" alignItems="flex-start" justifyContent="center" flex="1" bg="blue.50" borderTop="5px solid #BEE3F8">
                <Box py="2em" px="0.5em" boxShadow="0px 1px 10px 3px #26272612, 2px -4px 20px 8px #26272600"
                      transform={ [ "translateY(-3em)", "translateY(-6em)" ] }
                     background="gray.50" width={["80%", "600px"]} borderRadius="10px">
                    <Flex align="baseline" justify="center">
                        <Heading textAlign="center" mr="1em" fontSize={['16px', '24px']}>Create a
                            box</Heading>

                        <Box display={["none", "inline-block"]}>
                            <Tooltip shouldWrapChildren label={tip} placement="right-start">
                                <QuestionIcon/>
                            </Tooltip>
                        </Box>
                    </Flex>
                    <Text display={["inline-block", "none"]} textAlign="center" px="2em"
                          fontSize={["x-small", "small"]}>{tip}</Text>

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
