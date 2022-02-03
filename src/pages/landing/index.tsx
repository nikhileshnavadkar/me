import { useEffect, useState } from "react";
import {ReactComponent as Quil} from "../../assets/svg/quil.svg";

export const LandingPage = () => {
    const [isTyping, setIsTyping] = useState(true);
    const [textToType,setTextToType] = useState("");
    
    useEffect(()=>{
        let i:number = 0;
        const textTyping = (textString: string) => {
            if(i < textString.length) {
                setTextToType((prevText)=>{return prevText + textString.charAt(i)});
                i++;
                const typingTimeout = setTimeout(()=>{
                    textTyping(textString);
                    clearTimeout(typingTimeout);
                }, 200);
            }
            else{
                setIsTyping(false);
            }
        }
        const initialTimeout = setTimeout(()=>textTyping("hello there! 👋 \n I'm Nikhilesh.👨‍💻 \n Welcome to my space..🚀"),1000)
        return ()=>clearTimeout(initialTimeout);
    },[]);

    return (<>
        <div style={{display: "flex", background:"#00A4EF", flexDirection:"column", justifyContent:"left", alignItems: "center", width:"100vw", height:"100vh"}}>
            <div style={{display: "block", fontWeight: "500", fontSize: "42px", whiteSpace: "pre-line", margin:"auto", lineHeight:1.5, textShadow:"0 0 2px #000"}}>
            {textToType}
            {/* <span className={`${isTyping ? "blink-text": "hidden"}`}>|</span> */}
                <Quil className={`${!isTyping && "hidden"}`} />
            </div>
        </div>
    </>)
}