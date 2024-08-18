import './customcursor.scss'
import React, { useEffect, useState } from 'react'

interface Position {
    x: number;
    y: number;
}

const CustomCursor = () => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
    );
}

export default CustomCursor