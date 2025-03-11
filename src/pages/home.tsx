import NavBar from "../components/navabar.tsx"
import HeroBanner from "../components/hero-banner.tsx";
import TextBanner from "../components/text-banner.tsx";

export default function Home(){
    return <div className="">
        <NavBar></NavBar>
        <HeroBanner></HeroBanner>
        <TextBanner></TextBanner>

    </div>;
}