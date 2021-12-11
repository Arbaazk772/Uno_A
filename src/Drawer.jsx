import * as React from 'react';
import Box from '@mui/material/Box';
import './CSS/Drawer.css'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BadgeIcon from '@mui/icons-material/Badge';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


export default function TemporaryDrawer({ toggleDrawer }) {
    var text = "";
    return (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className='bx'>
                <br />
                <para className="DP">Welcome to plus reward</para><br />
                <hr />

                <div className="DD">
                    You're at level 1
                    <EmojiEventsIcon fontSize="large" />
                </div>
                <div className="DD">
                    Points :007
                    <SportsScoreIcon fontSize="large" />
                </div>
                <br />
            </div>

            <div>
                <nav className="NL">

                    <BadgeIcon fontSize="large" />

                    <ForwardToInboxIcon fontSize="large" />
                    <SportsEsportsIcon fontSize="large" />
                    <LocalFireDepartmentIcon fontSize="large" />
                </nav>
            </div>


        </Box >
    );
}