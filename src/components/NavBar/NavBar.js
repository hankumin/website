import './NavBar.css';
import {NavLink} from "react-router-dom"
import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sideBarRender: false,
            NavigationLinks: [
                {link: 'Home', path: '/'},
                {link: 'Resume', path: '/resume'},
            ]
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkRenderSlideIn = this.checkRenderSlideIn.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            sideBarRender: !prevState.sideBarRender,
        }));
    }

    checkRenderSlideIn( renderFlag){
        if(renderFlag){
            return '20%';
        }
        else{
            return '0%'
        }
    }

    render(){
        const listOfLinks = []
        this.state.NavigationLinks.forEach((element,index) => {
            listOfLinks.push(<li key={index}>
                <NavLink to ={element.path}>
                    {element.link}
                </NavLink>
            </li>)
        });

        const marginVal = this.checkRenderSlideIn(this.state.sideBarRender);

        return(
            <div>
            <div className = 'NavBar'  style={{width: marginVal}}>
                {listOfLinks}
            </div>
            <div className ='NavBarToggleDiv' style={{marginLeft: marginVal}}>
                <button className='' onClick = {this.handleClick}>☰</button>
            </div>
        </div>
        )
    }
}


export default NavBar;