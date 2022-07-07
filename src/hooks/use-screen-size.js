import { useState, useEffect } from 'react';

const getIsDesktop = () => window.innerWidth > 850; // is the screen width is bigger than 850px, we are in desktop version

const useScreenSize = () => {
    const [isDesktop, setIsDesktop] = useState(getIsDesktop());

    useEffect(() => {
        const onResize = () => {
            setIsDesktop(getIsDesktop());
        };

        window.addEventListener("resize", onResize);
    }, []);

    return isDesktop;
};

export default useScreenSize