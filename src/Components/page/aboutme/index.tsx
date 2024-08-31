import './aboutme.scss'
import { Box, Button, Typography } from '@mui/material'

//icon
import { FaUserCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import React from 'react';
import Intro from '../modal/intro';
import Developer from '../modal/developer';

const AboutME = () => {
    const [introModal, setintroModal] = React.useState(false);
    const intromodalopen = () => {
        setintroModal(true);
    }
    const intromodalclose = () => {
        setintroModal(false);
    }
    const [developerModal, setdeveloperModal] = React.useState(false);
    const developermodalopen = () => {
        setdeveloperModal(true);
    }
    const developermodalclose = () => {
        setdeveloperModal(false);
    }
    return (
        <><section className='aboutmebox'>
            <Box>
                <Typography className='title' fontSize={50} fontWeight={1000}>ABOUT ME</Typography>
                <div className="img">
                    <img src="https://avatars.githubusercontent.com/u/70128434?v=4" alt="Dong" className='avatar-img' />
                </div>
                <div className="dong-info">
                    <Box className="info-box">
                        <FaUserCircle className='icon' />
                        <div className="text">
                            <Typography className='question'>이름</Typography>
                            <Typography className='answer'>임동균</Typography>
                        </div>
                    </Box>
                    <Box className="info-box">
                        <FaCalendarAlt className='icon' />
                        <div className="text">
                            <Typography className='question'>생년월일</Typography>
                            <Typography className='answer'>98.09.06</Typography>
                        </div>
                    </Box>
                    <Box className="info-box">
                        <IoHome className='icon' />
                        <div className="text">
                            <Typography className='question'>주소지</Typography>
                            <Typography className='answer'>서울특별시 동작구</Typography>
                        </div>
                    </Box>
                    <Box className="info-box">
                        <FaSquarePhone className='icon' />
                        <div className="text">
                            <Typography className='question'>연락처</Typography>
                            <Typography className='answer'>010-4148-5136</Typography>
                        </div>
                    </Box>
                    <Box className="info-box">
                        <MdEmail className='icon' />
                        <div className="text">
                            <Typography className='question'>이메일</Typography>
                            <Typography className='answer'>abrerop@naver.com</Typography>
                        </div>
                    </Box>
                    <Box className="info-box">
                        <FaUniversity className='icon' />
                        <div className="text">
                            <Typography className='question'>학력</Typography>
                            <Typography className='answer'>백석대 (컴퓨터공학부)</Typography>
                        </div>
                    </Box>
                </div>
                <div className="intro-btn">
                    <Button variant='contained' onClick={intromodalopen}>나는 어떤 사람인가?</Button>
                    <Button variant='contained' onClick={developermodalopen}>어떤 개발자를 꿈꾸는가?</Button>
                </div>
            </Box>
        </section>
            <Intro open={introModal} onClose={intromodalclose} />
            <Developer open={developerModal} onClose={developermodalclose} />
        </>
    )
}

export default AboutME