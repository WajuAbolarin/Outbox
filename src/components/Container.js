import { Flex, useColorMode } from '@chakra-ui/react'

  const bgColor = { light: 'gray.50', dark: 'gray.900' }
  const color = { light: 'blue.900', dark: 'white' }

export const Container = (props) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  )
}
