import React from "react";



function Footer(){
    const currentYear = new Date().getFullYear();
    return <footer>
        <p>Copyright ©️ {currentYear} Rebecca Hjörvar</p>
    </footer>
}

export default Footer;