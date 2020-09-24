import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import Navlinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from './backDrop';
import './MainNavigation.css';

const MainNavigation= props=> {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer= () =>{
        setDrawerIsOpen(true);
    }
    const closeDrawer= () =>{
        setDrawerIsOpen(false);
    }
    return (
        <React.Fragment>
            {
                drawerIsOpen ?<Backdrop onClick={closeDrawer}/>:null
            }
            <SideDrawer show={drawerIsOpen}>
                        <nav className="main-navigation__Drawer-nav">
                            <Navlinks className='changed_sidebar_style'/>
                        </nav>
            </SideDrawer>
            <MainHeader>
                <button className="Main-navigation_MenuButton" onClick={openDrawer}>
                    <span/>
                    <span/>
                    <span/>
                </button>
                <h1 className="Main-navigation_Title">
                    <Link to='/' exact='true'>Geek Navigator</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <Navlinks/>
                </nav>
            </MainHeader>
            
        </React.Fragment>
    );
        
}

export default MainNavigation;