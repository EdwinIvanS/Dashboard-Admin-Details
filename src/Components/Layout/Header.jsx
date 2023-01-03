import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () =>{
    return(
        <div className="container-Header">
            <div className="Header-navbar">
                <button>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </button>                
            </div>
            <div className="header-navigation">
                <FontAwesomeIcon icon="fa-solid fa-moon" />
                <FontAwesomeIcon icon="fa-user" className="p-1"/>
                <FontAwesomeIcon icon="fa-solid fa-gear" className="p-1"/>
            </div>
        </div>
    );
}
export default Header;