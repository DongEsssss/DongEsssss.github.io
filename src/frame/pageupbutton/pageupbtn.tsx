import { useEffect, useState } from 'react';

import { Button } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './pageupbtn.scss'

function Pageupbtn() {

    const [ShowButton, setShowButton] = useState(false)

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 100) {
                setShowButton(true)
            }
            else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return (
        <div>
            {ShowButton && (
                <Button id='top' className='scroll__pageupbtn' onClick={ScrollToTop}>
                    <ArrowUpwardIcon />
                </Button>
            )}
        </div>
    )
}

export default Pageupbtn