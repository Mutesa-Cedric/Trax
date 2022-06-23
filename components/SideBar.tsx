import {
    List,
    Box, ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay
} from "@chakra-ui/layout"
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'
import NextImage from 'next/image'
const SideBar = () => {
    return (
        <Box width={"100%"} height={"calc(100vh - 100px)"} bg="black" paddingX="5px" color={"gray"}>
            <Box paddingY={"20px"}>
                <Box width={"120px"} marginBottom="20px" paddingX={"20px"} >
                    <NextImage src="/logo-main.svg" height={90} width={160}/>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar