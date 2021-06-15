import React from 'react'

export const Footer = () => {
    return (
    <div>
    <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block"><span>Conectate con nosotros:</span></div>
            <div>
                <a href="/" className="me-4 text-reset"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="me-4 text-reset"><i className="fab fa-twitter"></i></a>
                <a href="/" className="me-4 text-reset"><i className="fab fa-google"></i></a>
                <a href="/" className="me-4 text-reset"><i className="fab fa-instagram"></i></a>
                <a href="/" className="me-4 text-reset"><i className="fab fa-linkedin"></i></a>
                <a href="/" className="me-4 text-reset"><i className="fab fa-github"></i></a>
            </div>
        </section>
        <div className="text-center p-4 bg-black">© 2021 Copyright: Magalí Huertas</div>
    </footer>
    </div>
    )
}

