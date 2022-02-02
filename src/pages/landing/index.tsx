import { useEffect, useState } from "react"

export const LandingPage = () => {
    const [isTyping, setIsTyping] = useState(true);
    const [textToType,setTextToType] = useState("");
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
    useEffect(()=>{
        textTyping("hello there! 👋 \n I'm Nikhilesh.👨‍💻 \n Welcome to my space..🚀");
    },[]);

    return (<>
        <div style={{display: "flex", background:"teal", flexDirection:"column", justifyContent:"left", alignItems: "center", width:"100vw", height:"100vh"}}>
            <div style={{display: "block", fontWeight: "500", fontSize: "42px", whiteSpace: "pre-line", margin:"auto"}}>
            {textToType}
            <span className={`${isTyping ? "blink-text": "hidden"}`}>|</span>
            </div>
        </div>
    </>)
}