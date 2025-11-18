import { About } from "../About"
import { LightVideoCard } from "../VideoCard1"

import "../../styles/sections/Products.scss"

export const Products = () =>{
    return(
        <section className="products" id="products">
            <About/>
            <LightVideoCard/>
        </section>
    )
}