import logo from '../../assets/img/logo.svg';
import './style.css';

export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href=""> @daniellopes_sm</a>
                </p>
            </div>
        </header>
    )
}