import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/shared/lib/theme/ThemeContext";
import {FC, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);


    const defaultProps = useMemo(() => {
        return {
            theme,
            setTheme,
        }
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>
        { children }
    </ThemeContext.Provider>
}