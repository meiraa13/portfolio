import { Button } from "../Button"
import "./styles.scss"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { ImProfile } from "react-icons/im"

export function Header(){

    return (
        <header>
            <div className="container div-header">
                <div className="div-infos">
                    <p className="img">img</p>
                    <p className="name">Marcelo Meirelles</p>
                </div>
                <div className="div-buttons">
                    <Button classStyle="button" text={<SiWhatsapp size="20" />} />
                    <Button classStyle="button" text={<ImProfile size="20" />} />
                    <Button classStyle="button second-color border-white" text={<SiGithub size="20" />} />
                    <Button classStyle="button second-color border-white" text={<SiLinkedin size="20" />} />
                </div>
            </div>

        </header>
    )
}