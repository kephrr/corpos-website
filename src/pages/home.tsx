import NavBar from "../components/navabar.tsx"
import HeroBanner from "../components/hero-banner.tsx";
import TextBanner from "../components/text-banner.tsx";
import Card from "../components/card.tsx";

export default function Home(){
    return <div className="box-border">
        <NavBar></NavBar>
        <HeroBanner></HeroBanner>
        <TextBanner></TextBanner>
        <div className="px-10 py-4">
            <h1 className="blue-dark-custom oswald font-bold text-2xl my-2">Nos actualités</h1>
            <div className="flex justify-between mb-10">
                <Card w={70} h={90} title={"RESERVATIONS"} text={"Réserver une place pour un de nos matchs"}
                      img={"team-image"} btn={true} btntext={"Faire une réservation"}
                      btncolor={"bg-yellow-custom blue-custom"}
                ></Card>

                <Card img={"ffoot-image"} w={70} h={90} title={"MATCH FEMININ"}
                      text={"Présenter vous pour participer à nos évènements féminins"}
                      btn={true} btntext={"Rejoindre"} btncolor={"bg-yellow-custom blue-custom"}
                ></Card>

                <Card w={70} h={90} title={"PARTICIPER A UN MATCH"} text={"Postuler pour participer à un match"}
                      img={"match-image"} btn={true} btntext={"Postuler"} btncolor={"yellow-custom bg-blue-custom"}
                ></Card>

                <Card img={"stades-image"} w={70} h={90} title={"ENTRAINEMENT"}
                      text={"Réserver une place pour un de nos matchs"}
                      btn={true} btntext={"Participer"} btncolor={"bg-yellow-custom blue-custom"}
                ></Card>
            </div>
            <div className="flex justify-evenly">

            </div>
        </div>

    </div>
        ;
}


