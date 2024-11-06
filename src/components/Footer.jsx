'use server'

function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <p className="footer-text">
                Maciej Wojciechowski <span>{footerYear}</span>
            </p>
        </footer>
    )
}

export default Footer
