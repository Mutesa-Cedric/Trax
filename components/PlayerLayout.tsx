import { Box } from "@chakra-ui/layout"
import React from "react"

interface LayoutProps{
    children:React.ReactNode
}
function PlayerLayout({children}:LayoutProps) {
  return (
    <Box>
        Layout 
        {children}
    </Box>
  )
}

export default PlayerLayout