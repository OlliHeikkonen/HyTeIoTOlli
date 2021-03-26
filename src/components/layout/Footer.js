import React from 'react';



function Footer() {
    return (
        <header style={footerStyle}>
           &copy;lli
        </header>
    )
}

const footerStyle = {
  background: '#991111',
  color: '#ffffff',
  textAligan: 'center',
  padding: '5px',
  position: 'fixed',
  bottom: '0px',
  width: '100%',
}
export default Footer;