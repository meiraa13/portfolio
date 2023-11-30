import { Button } from "../Button"
import "./styles.scss"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { TiThMenu } from "react-icons/ti";
import { ImProfile } from "react-icons/im"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc";





export function Header(){
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
        <header>
            <div className="container div-header">
                <div className="div-infos">
                    <p className="img">img</p>
                    <p className="name">Marcelo Meirelles</p>
                </div>
                <div onClick={()=>setIsOpen(!isOpen)} className="trigger">
                    <Button classStyle="button" text={isOpen?<VscChromeClose/>:<TiThMenu/>} />
                </div>
                <div className="div-buttons">
                    <Button classStyle="button" text={<SiWhatsapp size="20" />} />
                    <Button classStyle="button" text={<ImProfile size="20" />} />
                    <Button classStyle="button second-color border-white" text={<SiGithub size="20" />} />
                    <Button classStyle="button second-color border-white" text={<SiLinkedin size="20" />} />
                </div>
            </div>

        </header>
        <div className={`mobile-menu ${isOpen && "is-open"}`}>
                <div> 
                    <Button classStyle="button mobile-button" text={<SiWhatsapp size="20" />} />
                </div>
                <div> 
                    <Button classStyle="button mobile-button" text={<ImProfile size="20" />} />
                </div>
                <div> 
                    <Button classStyle="button mobile-button second-color border-white" text={<SiGithub size="20" />} />
                </div>
        </div>
        
        </>
    )
}