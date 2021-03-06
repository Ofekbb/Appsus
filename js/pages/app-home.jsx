const { Link } = ReactRouterDOM

export function Home() {
    return (
        <section className="home-page">
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Welcome to our AppSus !</h1>
                    <div className="main-container">
                        <h2>Our Features</h2>
                        <div className="cards-container">
                        <Link className="card" to="/mail/">
                            
                                
                                <img src="imgs/app/nav/gmail.png" />
                                <h3>Appsus Mail</h3>
                                <p>Appsus mail that's intuitive, efficient, and useful. have top-notch security and surveillance,  </p>
                                
                            </Link>
                            <Link to="/notes" className="card">
                                <img src="imgs/app/nav/google-keep.png" />
                                <h3>Appsus Keep</h3>
                                <p>Capture what's on your mind. Add notes, lists and photos to Appsus Keep.</p>
                                
                            </Link>
                            <Link to="/book" className="card">
                                <img src="imgs/app/nav/open-book.png" />
                                <h3>Appsus Books</h3>
                                <p>Appsus Books lets you lose yourself in the best books right on your device.</p>
                              
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}