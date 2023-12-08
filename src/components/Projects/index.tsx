import { useContext } from "react"
import "./styles.scss"
import { UserContext } from "../../providers/UserContext"
import { SiGithub  } from "react-icons/si"
import { TbWorldCode } from "react-icons/tb";

export function Projects(){
    const { repos } = useContext(UserContext)

    return (
        <section id="projects" className="section-projects">
        <div className="container">
            <h3 className="title">&lt;Projects/&gt;</h3>
            <ul className="ul-projects">
                {
                    repos?.map((repo:any)=>(
                        <li key={repo.id}>
                            <h4>{repo.name}</h4>
                            <div className="div-buttons">
                                <a href={repo.html_url} target="_blank"><SiGithub/> Code</a>
                                {repo.homepage && (<a href={repo.homepage} target="_blank"><TbWorldCode/> Website</a>)}
                            </div>
                        </li>

                    ))
                }
            </ul>
        </div>

    </section>
    )
}