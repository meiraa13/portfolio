import { Button } from "../Button"
import "./styles.scss"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { TiThMenu } from "react-icons/ti";
import { ImProfile } from "react-icons/im"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc";
import { userData } from "../../utils/userData";





export function Header(){
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <header>
                <div className="container div-header">
                    <div className="div-infos">
                        <img className="img" src={`https://github.com/${userData.github}.png`}/>
                        <p className="name">{userData.name}</p>
                    </div>
                    <div onClick={()=>setIsOpen(!isOpen)} className="trigger">
                        <button className="button">{isOpen?<VscChromeClose/>:<TiThMenu/>}</button>
                    </div>
                    <div className="div-buttons">
                        <Button 
                        classStyle="button" 
                        icon={<SiWhatsapp size="20" /> } 
                        text="Whatsapp"  
                        />
                        <Button 
                        classStyle="button" 
                        icon={<ImProfile size="20" />} 
                        text="CV" 
                        />
                        <Button 
                        target="_blank" 
                        href={`https://github.com/${userData.github}`} 
                        classStyle="button" 
                        icon={<SiGithub size="20" />} 
                        text="GitHub" 
                        />
                        <Button 
                        target="_blank" 
                        href={`https://linkedin.com/in/${userData.linkedin}`} 
                        classStyle="button" 
                        icon={<SiLinkedin size="20" />} 
                        text="LinkedIn" 
                        />
                    </div>
                </div>
            </header>

            <div className={`mobile-menu ${isOpen && "is-open"}`}>
                    <div> 
                        <Button 
                        target="_blank"
                        classStyle="button mobile-button" 
                        icon={<SiWhatsapp size="20" />} 
                        text="Whatsapp" 
                        />
                    </div>
                    <div> 
                        <Button 
                        target="_blank"
                        classStyle="button mobile-button" 
                        icon={<SiLinkedin size="20" />} 
                        text="LinkedIn" 
                        />
                    </div>
                    <div> 
                        <Button 
                        target="_blank"
                        href={`https://github.com/${userData.github}`} 
                        classStyle="button mobile-button" 
                        icon={<SiGithub size="20" />} 
                        text="GitHub" 
                        />
                    </div>
            </div>
        
        </>
    )
}