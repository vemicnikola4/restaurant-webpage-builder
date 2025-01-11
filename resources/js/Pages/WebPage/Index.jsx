import { PageContext } from "@/Contexts/PageContext";
import Hero from "@/Components/Hero";
import Tags from "@/Components/Tags";
import AboutUs from "@/Components/AboutUs";
import Menu from "@/Components/Menu";
import MapProvider from "@/Components/MapProvider";
import Footer from "@/Components/Footer";

const Index = () => {

    return (
        <>
            <PageContext>
                <Hero />
                <Tags />
                <AboutUs />
                <Menu />
                <MapProvider />
                <Footer />
            </PageContext>
        </>
    )
}
export default Index;