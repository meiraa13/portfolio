import { stackData } from "../../utils/stackData"
import "./styles.scss"

export function Techs(){

    return (
        <section id="techs" className="section-techs">
            <div className="container">
                <h3 className="title">&lt;Languages & Technologies/&gt;</h3>
                <ul className="ul-stacks">
                    {
                        stackData.map((stack)=>{
                            return(
                                <li key={stack.title}>{<stack.img size={80} />}</li>
                            )
                        })
                    }
                   
                </ul>
            </div>

        </section>
    )
}