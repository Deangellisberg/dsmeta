import logo from '../../assets/img/logo.svg';
import './styles.css';
function Header() {
    return (
        <header>
            <div className="dsmeta-logo-contenier">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por

                        <a   href="www.linkedin.com/in/deangellis-berg-bezerra-da-silva-4890b2139"> Deangellis Berg </a>
                    </p>

            </div>


        </header>

    )

}


export default Header ;