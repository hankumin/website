import './NavBar.css';
import {NavLink} from "react-router-dom"
import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sideBarRender: false,
            NavigationLinks: [
                {link: 'Home', path: '/website/'},
                {link: 'Resume', path: '/website/resume'},
            ]
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkRenderSlideIn = this.checkRenderSlideIn.bind(this)
        this.closeSlideIn = this.closeSlideIn.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            sideBarRender: !prevState.sideBarRender,
        }));
    }

    closeSlideIn(){
        this.setState({
            sideBarRender: false
        })
    }

    checkRenderSlideIn( renderFlag){
        if(renderFlag){
            return '-On';
        }
        else{
            return '-Off'
        }
    }

    render(){
        const listOfLinks = []
        this.state.NavigationLinks.forEach((element,index) => {
            listOfLinks.push(
            <li className='NavBar' key={index}>
                <NavLink exact="true" to={element.path} className={({ isActive }) => isActive ? 'NavLink NavLinkActive' : 'NavLink NavLinkInactive'} end>
                    <div style={{width:'100%'}}>
                        {element.link}
                    </div>
                </NavLink>
            </li>)
        });

        const toggleFlag = this.checkRenderSlideIn(this.state.sideBarRender);

        return(
            <div>
                <div className = {'NavBar NavBar'+toggleFlag} >
                    <div>
                        <button className='NavBarCloseDiv' onClick={this.closeSlideIn}>&#10006;</button>
                    </div>
                    <ul className='NavBar'>
                        {listOfLinks}
                    </ul>
                </div>
                <div className = {'NavBarToggleDiv NavBarToggleDiv'+toggleFlag} >
                    <button className='NavBarToggleDiv' onClick  = {this.handleClick}>☰</button>
                </div>
            </div>
        )
    }
}


export default NavBar;