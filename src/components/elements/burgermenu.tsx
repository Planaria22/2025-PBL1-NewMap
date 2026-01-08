import { useState } from "react";
import {Menu, Close, Map, Home, Pinch, QuestionMark} from '@mui/icons-material';
import {Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';

type BurgerItems = {
    title: string;
    path: string;
    titleJP: string;
    icon: string;
}

const iconMap: Record<string, React.ComponentType> = {
    Home,
    Map,
    Pinch,
    QuestionMark,
};

const items: BurgerItems[] = [
    {title: "route", path: "/", titleJP: "ルート検索", icon: "Home"},
    {title: "map", path: "/map", titleJP: "地図", icon: "Map"},
    {title: "guide", path: "/guide", titleJP: "地図のみかた", icon: "Pinch"},
    {title: "about", path: "/about", titleJP: "このサイトについて", icon: "QuestionMark"}
]

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
            <>
            <Button aria-label="menu" onClick={() => setOpen(true)}><Menu fontSize="large" sx={{color: "white"}}/></Button>

            <Drawer anchor="right" open={open}>
                <Box sx={{height: "100vh"}} onClick={() => setOpen(false)}>
                    <List>
                        <ListItem>
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemIcon><Close></Close></ListItemIcon>
                                <ListItemText primary="閉じる" />
                            </ListItemButton>
                        </ListItem>
                        {items.map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <ListItem key={item.title}>
                                    <ListItemButton href={item.path}>
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText primary={item.titleJP} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
                
            </>
    )
}

export default BurgerMenu;