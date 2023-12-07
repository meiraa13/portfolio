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
                    <Button  classStyle="button" icon={isOpen?<VscChromeClose/>:<TiThMenu/>} />
                </div>
                <div className="div-buttons">
                    <Button classStyle="button" icon={<SiWhatsapp size="20" /> }   />
                    <Button classStyle="button" icon={<ImProfile size="20" />} />
                    <Button href={`https://github.com/${userData.github}`} classStyle="button second-color border-white" icon={<SiGithub size="20" />} />
                    <Button href={`https://linkedin.com/in/${userData.linkedin}`} classStyle="button second-color border-white" icon={<SiLinkedin size="20" />} />
                    
                </div>
            </div>

        </header>
        <div className={`mobile-menu ${isOpen && "is-open"}`}>
                <div> 
                    <Button classStyle="button mobile-button" icon={<SiWhatsapp size="20" />} />
                </div>
                <div> 
                    <Button classStyle="button mobile-button" icon={<ImProfile size="20" />} />
                </div>
                <div> 
                    <Button classStyle="button mobile-button second-color border-white" icon={<SiGithub size="20" />} />
                </div>
        </div>
        
        </>
    )
}