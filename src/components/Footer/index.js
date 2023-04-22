import './Footer.css';
import { AiOutlineCode } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='social'>
                <a href="https://www.aluracursos.com">
                    <img src="/img/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.aluracursos.com">
                    <img src="/img/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.aluracursos.com">
                    <img src="/img/instagram.png" alt="Instagram" />
                </a>    
            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>Develop by  <AiOutlineCode /> Alejandro Santis Castro</strong>
        </footer> 
    );
}

export default Footer;