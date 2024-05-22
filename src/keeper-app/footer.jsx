

function Footer() {
    
    const date = new Date();
    const presentYear = date.getFullYear();

    return (
        <footer>
            <p>copyright {presentYear}</p>
        </footer>    
    )
}

export default Footer;