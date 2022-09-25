import './styles/footer.css';
import logo from '../assets/Logo.png';

function Footer () {
    return (
        <footer className="footer">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <form>
                <input type="email" placeholder='Enter your email and join our newsletter' required />
                <button className='btn'>Join our newsletter</button>
            </form>
            <ul className='list'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <p>&copy; copyright 2022 - <a href="https://twitter.com/d7mii_b">Abdulrahman</a></p>
        </footer>
    )
}

export default Footer;