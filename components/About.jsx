import { RedirectButton } from "./RedirectButton"
import "../styles/About.scss"

export const About = () =>{
    return(
        <div className="about">
            <h2>One platform. Total control</h2>
            <div>
                <p>From governance to chatrooms, education, and marketplaces, Gamms brings structure, engagement, and real-time collaboration under one secure system.</p> 
                <p>Whether you’re leading a club, brand, or network, Gamms makes connection effortless and growth inevitable.</p>
            </div>
            <RedirectButton href={"/"}>Create a community</RedirectButton>
        </div>
    )
}