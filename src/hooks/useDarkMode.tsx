import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

export const useDarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const darkMode = colorScheme === 'dark';

    setDarkMode(darkMode);
  }, [colorScheme]);

  return {isDarkMode};
};
