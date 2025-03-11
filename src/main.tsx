import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = '/favicon.png'; // Chemin relatif vers le fichier dans le dossier public
document.head.appendChild(link);

const fonts = document.createElement('style');
fonts.innerHTML = '@import url(\'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Big+Shoulders:opsz,wght@10..72,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap\');'
document.head.appendChild(fonts);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
