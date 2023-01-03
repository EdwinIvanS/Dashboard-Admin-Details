import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () =>{
    return(
        <div className="container-SideBar">
            <div className="logo">
                <p className='title'>Proyect Edwin</p>
            </div>
            <div className="SideBar-menu">
                <ul>
                    <li>Menu</li>
                    <li>
                        <div className="menu-pill">
                            <FontAwesomeIcon icon="fa-solid fa-users" />
                        </div>
                        <span>Users</span>
                    </li>
                    <li>
                        <div className="menu-pill">
                            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                        </div>
                        <span>Calendar</span>
                    </li>
                    <li>
                        <div className="menu-pill">
                            <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" />
                        </div>
                        <span>E-commerce</span>
                    </li>
                    <li>
                        <div className="menu-pill">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                        <span>E-mail</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;