import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {

    return(
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo black-text #ffa000 amber darken-1">{titulo}</a>
            </div>
        </nav>
    );
}

Header.propTypes = {
    titulo : PropTypes.string.isRequired
}

export default Header;