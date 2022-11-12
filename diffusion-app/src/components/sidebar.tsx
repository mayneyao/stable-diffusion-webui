import { Box, List, ListIcon, ListItem } from "@chakra-ui/react"
import { MdSettings, MdPhotoLibrary, MdAutoStories, MdColorLens } from "react-icons/md";
import Link from 'next/link'


export const Sidebar = () => {
  const menus = [
    {
      name: '文生图',
      slug: 'text2img',
      icon: MdAutoStories,
      path: '/',
    },
    {
      name: '图生图',
      slug: 'img2img',
      icon: MdColorLens,
      path: 'img2img',
    },
    {
      name: '相册',
      slug: 'album',
      icon: MdPhotoLibrary,
      path: 'album',
    },
    {
      name: '设置',
      slug: 'setting',
      icon: MdSettings,
      path: 'settings',
    },
  ]
  return <Box paddingTop={3}>
    <List>
      {
        menus.map(menu => {
          return (
            <Link href={menu.path} key={menu.slug}>
              <ListItem padding={3} paddingLeft={5} color="ButtonText" _hover={{
                cursor: 'pointer',
              }}>
                <ListIcon as={menu.icon} />
                {menu.name}
              </ListItem>
            </Link>
          )
        })
      }
    </List>
  </Box>
}