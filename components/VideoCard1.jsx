import "../styles/VideoCard.scss";
import { RedirectButton } from "./RedirectButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const LightVideoCard = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-quart",
            once: true,           
            offset: 100,
        });
    }, []);

    return (
        <div
            className="video-card dark"
            data-aos="fade-up"                   
            data-aos-delay="100"
        >
            <div
                data-aos="fade-right"             
                data-aos-delay="300"
                data-aos-anchor=".video-card"
            >
                <h2>A home where you actually want to be</h2>
                <p>
                    Beautiful, intuitive interface that makes engagement effortless.
                    From discussions to learning to shopping — all in one seamless experience.
                </p>
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
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-anchor=".video-card"
            >
                <source src="./your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};