import "../styles/VideoCard.scss"
import { RedirectButton } from "./RedirectButton"

export const DarkVideoCard = () => {

    return (
        <div className="video-card light" data-aos="zoom-in-down">
            <div>
                <h2>Admin dashboard that actually works</h2>
                <p>Manage everything from one beautiful interface. Track growth, moderate content, analyze engagement, and make data-driven decisions.</p>
                <ul>
                    <li>Real-time analytics and member insights</li>
                    <li>Automated moderation and smart notifications</li>
                    <li>Role management and permission controls</li>
                    <li>Export data and full ownership of your community</li>
                </ul>

                <RedirectButton href={""}>Create a community</RedirectButton>
            </div>
            <video
                controls
                poster="/Frame 40 (1).png"
            >
                <source src="./" type="video/mp4" />
            </video>
        </div>
    )
}