import './start.scss';
import { useState, useRef, useEffect } from 'react';
import { Container } from './styled';
import { Typography } from '@mui/material';
import { PiArrowFatLinesDownThin } from 'react-icons/pi';
import { Header } from '../../frame/Header';

export default function Start() {
    const [isInViewport, setIsInViewport] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                setIsInViewport(entry.isIntersecting);
            });
        };

        const options = { root: null, rootMargin: '0px', threshold: 0 };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current);

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const arrowStyle = {
        opacity: Math.max(1 - scrollY / 500, 0), // Adjust 500 to control the fade effect
    };

    return (
        <>
            <Header />
            <section className="start-section">
                <Container className={isInViewport ? 'frame-out' : ''} ref={ref}>
                    <div style={{ textShadow: '5px 8px #888888', textAlign: 'center', marginTop: '-100px' }}>
                        <Typography fontWeight={700} className='title'>
                            FRONT-END DEVELOPER
                        </Typography>
                        <Typography variant="h4" fontWeight={700} className='subtitle'>
                            DongEsssss PortFolio
                        </Typography>
                    </div>
                    <div className="arrow-down" style={arrowStyle}>
                        <Typography variant="h6" fontWeight={700}>
                            Scroll Down
                        </Typography>
                        <PiArrowFatLinesDownThin className="arrow-icon" style={{ marginTop: '10px' }} />
                    </div>
                </Container>
            </section>
        </>
    );
}
