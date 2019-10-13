import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/pic03.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon"><img className="logo" src={logo} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hoop West 2019</h1>
                <p>A fan-made responsive schedule for Hoop West 2019</p>
                <p><a href="http://www.hoopwest.ca/2019-workshops/">Click here for the official site</a></p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Friday</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Saturday</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Sunday</a></li>
                
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
