import { About } from "../About"
import { LightVideoCard } from "../VideoCard1"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"

import "../../styles/sections/Products.scss"

export const Products = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
        });
    }, [])

    return (
        <section className="products" id="products" >
            <About />
            <LightVideoCard />
        </section>
    )
}