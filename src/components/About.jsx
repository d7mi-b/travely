import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faMapLocationDot, faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import './styles/about.css'

function About () {
    return (
        <section className="about">
            <section>
                <FontAwesomeIcon icon={faPlaneDeparture} size='xl' />
                <p className='number'>1,250,145</p>
                <p>number of orginized trip</p>
            </section>
            <section>
                <FontAwesomeIcon icon={faMapLocationDot} size='xl' />
                <p className='number'>1,478</p>
                <p>number of tourist areas</p>
            </section>
            <section>
                <FontAwesomeIcon icon={faPersonWalkingLuggage} size='xl' />
                <p className='number'>950,473</p>
                <p>number of clients</p>
            </section>
        </section>
    );
}

export default About;