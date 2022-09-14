import * as React from 'react';

import { Popover , List , ListItem , Link , Divider , ListItemButton } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styled from "styled-components";

const contentSetting = [
    {
        label : "Edit Profile",
        path : "/editprofile",
    },
    {
        label : "Change Password",
        path : "/changepassword",
    },    
]
export const SettingPopover = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'setting-popover' : undefined ;

    return (
        <>
            <TitleDiv
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            >
                Setting
            </TitleDiv>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical : 'bottom',
                    horizontal : 'left'
                }}
                
            >
                <Box>
                    <List>
                    {
                        contentSetting.map((ele, idx) => (
                            <Link href={ ele.path } key={idx} >
                                <ListItemButton>
                                    {ele.label }
                                </ListItemButton>
                                <Divider />
                            </Link>
                        ))
                    }
                    <Link href="/signout" >
                        <ListItemButton>
                            Sign Out &nbsp; <ExitToAppIcon />
                        </ListItemButton>
                        <Divider />
                    </Link>

                    </List>                
                </Box>                
            </Popover>
        </>
        
    )
}

const Box = styled.div`
    & .MuiList-root {
        padding : unset !important;
    }
    & .MuiLink-root {
        color : #f0aa15;        
        text-decoration : none ;
        border-bottom : 1px solid #303030;
    }    
    & .MuiListItemButton-root {
        font-size : 14px;
    }
    & .MuiSvgIcon-root {
        font-size : 16px;
    }
`;

const RootDiv = styled.div`

`;
const TitleDiv = styled(ListItem)`
    cursor : pointer;    
`;
