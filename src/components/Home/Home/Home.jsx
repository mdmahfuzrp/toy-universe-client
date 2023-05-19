import Footer from "../../../Shared/Footer/Footer";
import NavBar from "../../../Shared/NavBar/NavBar";
import Gallery from "../../Gallery/Gallery";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;