import { useLoaderData } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import Gallery from "../../Gallery/Gallery";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Hero from "../Hero/Hero";
import OurSponsor from "../../OurSponsor/OurSponsor";
import useDefaultTitle from "../../../hooks/useDefaultTitle";

const Home = () => {
    const allToy = useLoaderData();

    useDefaultTitle('Marvel Universe');

    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <OurSponsor></OurSponsor>
            <Gallery></Gallery>
            <ShopByCategory
                allToy={allToy}
            ></ShopByCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;