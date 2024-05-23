import React from "react";
import Banner from "./components.tsx/Banner";
import Carousel from "./components.tsx/Carousel";
import List from "../../product/List";
function HomePage() {

    return(
        <div>
            <Banner/>
            <Carousel/>
            <List/>
        </div>
    )
}
export {};
export default HomePage;