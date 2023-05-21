import { useLoaderData } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import Gallery from "../../Gallery/Gallery";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import Hero from "../Hero/Hero";
import OurSponsor from "../../OurSponsor/OurSponsor";
import useDefaultTitle from "../../../hooks/useDefaultTitle";
import BeSeller from "../BeSeller/BeSeller";
import TopSeller from "../TopSeller/TopSeller";
import ShopByAge from "../../ShopByAge/ShopByAge";

const Home = () => {
    const allToy = useLoaderData();

    useDefaultTitle('Marvel Universe');

    return (
        <div className="">
            <NavBar></NavBar>
            <Hero></Hero>
            <OurSponsor></OurSponsor>
            <Gallery></Gallery>
            <BeSeller></BeSeller>
            <ShopByCategory
                allToy={allToy}
            ></ShopByCategory>
            <ShopByAge></ShopByAge>
            <TopSeller></TopSeller>

            <Footer></Footer>
        </div>
    );
};

export default Home;