import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "./Component/Hero";
import MainSection from "./Component/MainSection";



export default function Home() {



    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <MainSection/>
            </main>
            <Footer/>
        </>
    );
}
