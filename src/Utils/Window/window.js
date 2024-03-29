import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        // const height = hasWindow ? window.innerHeight : null;
        return {
            width
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasWindow]);

    return windowDimensions;


}