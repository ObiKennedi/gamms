import { RedirectButton } from "../RedirectButton"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../../styles/sections/Hero.scss"

export const HeroSection = () => {

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" })
    }, [])

    return (
        <section className="hero-section">
            <div
                className="hero-background"
                data-aos="fade-in"
            />

            <div className="hero-content">
                <div className="write-ups">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <p>Build lasting communities.</p>
                        <p>Earn without limits.</p>
                    </div>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Create structured, thriving communities with AI-powered tools
                        for governance, engagement, and growth.
                    </p>

                    <div
                        className="hero-buttons"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <RedirectButton>Create a community</RedirectButton>
                        <RedirectButton>See how it works</RedirectButton>
                    </div>
                </div>

                <img
                    src="/Group 2.png"
                    alt="group"
                    data-aos="zoom-in-up"
                    data-aos-delay="400"
                />
            </div>
        </section>
    )
}
