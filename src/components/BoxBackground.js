import {
   Link as ChakraLink,
   Center,
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
   FormErrorMessage,
   FormHelperText

} from '@chakra-ui/react'
import {Container} from './Container'
import {Main} from './Main'
import {Footer} from './Footer'

export default function BoxBackground({children}) {
   return (
          <Container height="100vh">
             <Main flex="1" px="0">
                {children}
             </Main>
             <Footer width="100%" py="1em">
                <Center w="100%">
                   <Text>
                      Made with ❤ by <ChakraLink rel="noopener" target="_blank" href="https://twitter.com/waju_abolarin"> Waju</ChakraLink></Text>
                </Center>
             </Footer>
          </Container>
   )
}

