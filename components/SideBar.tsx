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
import { IconType } from "react-icons/lib"
import Link from "next/link"

interface NavItem {
    name: string,
    icon: IconType,
    route: string
}
const navMenu: NavItem[] = [
    {
        name: 'Home',
        icon: MdHome,
        route: "/"
    },
    {
        name: 'Search',
        icon: MdSearch,
        route: "/search"
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: "/library"
    },
]
const musicMenu: NavItem[] = [
    {
        name: "Create Playlist",
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: "Favourites",
        icon: MdFavorite,
        route: '/favourites'
    }
]
const playlists = new Array(30).fill(1).map((_, i) => `playlist ${i + 1}`);
const SideBar = () => {
    return (
        <Box
        width="100%"
        height="calc(100vh - 100px)"
        bg="black"
        paddingX="5px"
        color="gray"
      >
        <Box paddingY="20px" height="100%">
          <Box width="120px" marginBottom="20px" paddingX="20px">
            <NextImage src="/logo.svg" height={60} width={120} />
          </Box>
          <Box marginBottom="20px">
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <Link href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box marginTop="20px">
            <List spacing={2}>
              {musicMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <Link href={menu.route} passHref>
                      <LinkOverlay>
                        <ListIcon
                          as={menu.icon}
                          color="white"
                          marginRight="20px"
                        />
                        {menu.name}
                      </LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider color="gray.800" />
          <Box height="66%" overflowY="auto" paddingY="20px">
            <List spacing={2}>
              {playlists.map((playlist) => (
                <ListItem paddingX="20px" key={playlist}>
                  <LinkBox>
                    <Link
                      href='/'
                      passHref
                    >
                      <LinkOverlay>{playlist}</LinkOverlay>
                    </Link>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    )
}

export default SideBar