import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark');

    useEffect(() => {
        darkMode === true ? document.querySelector('body').classList.add('dark-mode') :
        document.querySelector('body').classList.remove('dark-mode')
    }, [darkMode])
    
    return [darkMode, setDarkMode]
}