import { Box } from "@chakra-ui/layout"
import React from "react"
import SideBar from "./SideBar"

interface LayoutProps {
    children: React.ReactNode
}

function PlayerLayout({ children }: LayoutProps) {
    return (
        <Box width={"100vw"} height={"100vh"}>
            <Box position={"absolute"} top="0" left={"0"} width={"200px"} >
                <SideBar/>
            </Box>
            <Box marginLeft={"250px"} marginBottom={"100px"} >
                {children}
            </Box>
            <Box position={"absolute"} left="0" bottom={"0"}>
                player
            </Box>
        </Box>
    )
}

export default PlayerLayout