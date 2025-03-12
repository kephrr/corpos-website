import NavBar from "../components/navabar.tsx"
import HeroBanner from "../components/hero-banner.tsx";
import TextBanner from "../components/text-banner.tsx";
import Card from "../components/card.tsx";
import LargeCard from "../components/large-card.tsx";
import Button from "../components/button.tsx";
import Info from "../components/info-side.tsx";
import Footer from "../components/footer.tsx";

export default function Home(){
    return <div className="box-border">
        <NavBar></NavBar>
        <HeroBanner></HeroBanner>
        <TextBanner></TextBanner>
        <div className="px-20 py-4">
            <span className="bebas-neue-thick text-3xl my-10 blue-dark-custom">NOs ACTUALITÉS</span>
            <div className="flex justify-between mb-10 ">
                <Card title={"RESERVATIONS"} text={"Réserver une place pour un de nos matchs"}
                      img={"team-image"} btn={true} btntext={"Faire une réservation"}
                      btncolor={"bg-yellow-custom blue-custom"}
                ></Card>

                <Card img={"ffoot-image"} title={"MATCH FEMININ"}
                      text={"Présenter vous pour participer à nos évènements féminins"}
                      btn={true} btntext={"Rejoindre"} btncolor={"bg-yellow-custom blue-custom"}
                ></Card>

                <Card title={"CALENDRIER"} text={"Consultez les matchs de votre équipe favorite"}
                      img={"match-image"} btn={true} btntext={"Postuler"} btncolor={"yellow-custom bg-blue-custom"}
                ></Card>

                <Card img={"stades-image"} title={"ENTRAINEMENT"}
                      text={"Participez à un entrainement commun"}
                      btn={true} btntext={"Participer"} btncolor={"bg-yellow-custom blue-custom"}
                ></Card>
            </div>
            <span className="bebas-neue-thick text-3xl  my-20 blue-dark-custom">NOTRE ORGANISATION</span>
            <div className="flex justify-evenly">
                <LargeCard img={"orga-image bg-center"}
                           text={"Découvrez les organisateurs de vos évènements sportifs préférés"}
                           title={"UNE ORGANISATION CHALEUREUSE"} btntext={"Voire plus"}
                           btncolor={"bg-yellow-custom blue-custom"}
                ></LargeCard>
            </div>
            <div className="flex justify-center p-10">
                <Button content={"Plus d'actualités"} colors={"bg-green-custom text-white jiggle-animation"}></Button>
            </div>
            <div className="flex gap-10 justify-center p-10">
                <Info img="/tournoi-efoulane.png" title="PDDC, la CGS et l'Ambassade organisent le Tournoi Efoulame" date="12 Mars 2025" label="NEWS"></Info>
                <Info img="training-camp.jpg" title="Training camp" date="22 Février 2025" label="EVENT"></Info>
            </div>
            {/* Ajouter la partie posts des réseaux sociaux */}
        </div>
        <Footer></Footer>

    </div>
        ;
}


