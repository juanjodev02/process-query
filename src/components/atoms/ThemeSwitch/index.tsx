import {IconButton, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
      <IconButton
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        aria-label="Toggle Theme"
        colorScheme="facebook"
        onClick={toggleColorMode}
      />
  )
}

export default ThemeSwitch;