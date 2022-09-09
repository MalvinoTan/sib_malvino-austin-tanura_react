const Header = () => {
    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2 active" aria-controls="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2" aria-controls="page">Features</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2" aria-controls="page">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2" aria-controls="page">About</a>
                        </li>
                    </ul>
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2" aria-controls="page">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2" aria-controls="page">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">My First React App</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;