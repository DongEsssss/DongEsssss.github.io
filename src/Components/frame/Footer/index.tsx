import { Box, Typography } from '@mui/material';
import './footer.scss'

//icon
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

export const Footer = () => {

  //my sns links
  const gitpage = 'https://github.com/DongEsssss'
  const instagrampage = 'https://www.instagram.com/dong_punch'
  const tistorypage = 'https://developer-donge.tistory.com/'

  return (
    <footer>
      <Box>
        <div className='nav-item'>
          <div className="icon">
            <FaGithub onClick={() => window.open(`${gitpage}`)} />
          </div>
          <div className="icon">
            <FaInstagram onClick={() => window.open(`${instagrampage}`)} />
          </div>
          <div className="icon">
            <SiTistory onClick={() => window.open(`${tistorypage}`)} />
          </div>
        </div>
        <Typography variant='body2'>Copyright ⓒ 2024. DongGyun All rights reserved.</Typography>
      </Box>
    </footer>
  )
}
