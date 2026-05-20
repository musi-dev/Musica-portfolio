import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";

export default function Theme() {
    const mode = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    return (
        <>
            <button onClick={() => dispatch(toggleTheme())} className="theme-btn">  {mode === "dark" ? <FaRegLightbulb /> : <MdDarkMode />}</button>
        </>
    );
}


