export default function Footer(){
    return <div className="flex flex-col">
        <div className="max-w-screen justify-between items-center bg-blue-custom flex text-white">
            <nav className="flex max-w-screen justify-between items-center">
                <img src="/favicon.png" alt="corpos-logo" className="w-14.5 h-14.5 m-3"/>
                <span className="bebas-neue-thick text-4xl">PANTHÈRES DE DAKAR CORPOS PANTHÈRES DE DAKAR CORPOS</span>
            </nav>

            <span className="bebas-neue-regular text-3xl">#PDDC</span>
        </div>
        <div
            className="max-w-screen min-h-60 flex gap-10 px-20 items-center bg-blue-dark-custom text-white pattern-foot">
            <ul>
                <li>
                    <strong>Actualités</strong>
                </li>
                <li>Equipe</li>
                <li>Matchs féminins</li>
                <li>Entrainement</li>
                <li>Tournoi</li>
            </ul>
            <ul>
                <li>
                    <strong>A propos</strong>
                </li>
                <li>Organisation</li>
                <li>Calendrier</li>
            </ul>
        </div>
        <div
            className="max-w-screen min-h-30 flex gap-10 px-20 items-center bg-black text-white">
            <ul>
                <li>
                    <strong>Mentions légales</strong>
                </li>
                <li>Chartes</li>
                <li>Règles de l'association</li>
            </ul>
            <ul>
                <li>
                    <strong>Collaborateurs</strong>
                </li>
                <li>Ambassade du Gabon</li>
                <li>Conseil des Gabonais du Sénégal</li>
            </ul>
        </div>
    </div>
}