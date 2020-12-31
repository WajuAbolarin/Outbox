import { Stack } from '@chakra-ui/react'

export const Main = (props) => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth={ [ "100%",  ] }
    mt="1em"
    pt="1rem"
    px="1rem"
    {...props}
  />
)
