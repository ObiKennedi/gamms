import "../styles/VideoCard.scss"
import { RedirectButton } from "./RedirectButton"

export const LightVideoCard = () => {

    return (
        <div className="video-card dark" data-aos="zoom-in-up">
            <div>
                <h2>A home where you actually want to be</h2>
                <p>Beautiful, intuitive interface that makes engagement effortless. From discussions to learning to shopping — all in one seamless experience.</p>
                <ul>
                    <li>Clean, distraction-free interface across all devices</li>
                    <li>Personalized feeds and smart recommendations</li>
                    <li>Gamification with badges, points, and recognition</li>
                    <li>Native mobile apps for iOS and Android</li>
                </ul>

                <RedirectButton href={""}>Join a community</RedirectButton>
            </div>
            <video
                controls
                poster="/Frame 40.png"
            >
                <source src="./" type="video/mp4" />
            </video>
        </div>
    )
}