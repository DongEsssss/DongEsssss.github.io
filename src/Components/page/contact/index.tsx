import './contact.scss'
import { Footer } from '../../frame/Footer'
import { Box, Typography } from '@mui/material'

//icon
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";


const Contact = () => {
    const gitpage = 'https://github.com/DongEsssss'
    const instagrampage = 'https://www.instagram.com/dong_punch'
    const tistorypage = 'https://developer-donge.tistory.com/'

    return (
        <>
            <section className="board">
                    <Typography className='title' fontSize={50} fontWeight={1000}>CONTACT</Typography>
                    <ul>
                        <li>Phone : 01041485136</li>
                        <li>Email : abrerop@naver.com</li>
                        <li>Github : https://github.com/DongEsssss </li>
                        <li>Tistory : https://developer-donge.tistory.com/</li>
                    </ul>
                    <Box sx={{ marginTop: '50px' }}>
                        <div className='nav-item'>
                            <div className='icon-item'>
                                <FaGithub className="icon" onClick={() => window.open(`${gitpage}`)} />
                                <Typography>Github</Typography>
                            </div>
                            <div className="icon-item">
                                <FaInstagram className="icon" onClick={() => window.open(`${instagrampage}`)} />
                                <Typography>Instagram</Typography>
                            </div>
                            <div className="icon-item">
                                <SiTistory className="icon" onClick={() => window.open(`${tistorypage}`)} />
                                <Typography>Tistory</Typography>
                            </div>
                        </div>
                    </Box>
            </section>
            <div className='footer'>
                <Footer />
            </div>
        </>
    )
}

export default Contact