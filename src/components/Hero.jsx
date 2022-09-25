import './styles/hero.css';
import logo from '../assets/Logo.png';
import img1 from '../assets/image13.jpg';
import img2 from '../assets/image17.jpg';
import img3 from '../assets/image22.jpg';

function Hero () {
    return (
        <section className="hero">
            <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <ul className='list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <header className='header'>
                <h1>Where You Go, Let Us Make It Happen</h1>
                <p>We are travel agency based in yemen, ready to provide your trip to the natyre.</p>
                <button className='btn'>Get Started</button>
                <section className='images'>
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                </section>
            </header>
        </section>
    );
}

export default Hero;