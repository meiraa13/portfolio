import { Button } from "../Button"
import "./styles.scss"


export function About(){

    return (
        <section className="section-about">
            <div className="container div-about">
                <div className="div-text">
                    <h1>
                        Always learning new technologies that help me deliver the best solutions!
                    </h1>
                    <p>
                        As a Full Stack Developer and teaching assistant at Kenzie Academy Brasil, 
                        I combine my passion for technology and education to create and assist complex web applications
                        using various tools and frameworks. At Kenzie Academy's bootcamp I learned how to use 
                        JavaScript, TypeScript, React, Node.js, Express, Nest, Python, 
                        Django, PostgreSQL, and other technologies to build and consume RESTful APIs, work with databases, 
                        and apply object-oriented programming concepts.<br/><br/>
                        Before switching to web development, I had a career in marketing and product management, 
                        where I developed and structured product lines from market research to launch, managing development 
                        schedules, profitability analysis, pricing, assortment, sales forecasting, and packaging design. 
                        I also have a degree in communication and marketing from ESPM, 
                        and I speak fluent English, having taken Business Administration course in Dublin.
                    </p>
                </div>
                <div className="flex">
                    <Button classStyle="button second-color" text="Projects" />
                    <Button href="#techs" classStyle="button second-color" text="Techs" />
                </div>
            </div>


        </section>
    )
}