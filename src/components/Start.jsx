import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import './styles/start.css';
import img1 from '../assets/image13.jpg';
import img2 from '../assets/image17.jpg';
import img3 from '../assets/image22.jpg';

const trips = [
    {
        id: 1,
        title: 'Petra',
        price: 700,
        img: img1
    },
    {
        id: 2,
        title: 'Greece',
        price: 1200,
        img: img2
    },
    {
        id: 3,
        title: 'Paris',
        price: 1800,
        img: img3
    }
]

function Start () {
    return (
        <section className="start">
            <header className="header">
                <h2>
                    <span><FontAwesomeIcon icon={faPersonWalkingLuggage} size='xl' /></span>
                    Start Your Next Vacation
                </h2>
            </header>
            <form action='#' method='GET' >
                <section className='destenation'>
                    <header>
                        <p>search destination</p>
                    </header>
                    <input type="search" name='destination' />
                </section>
                <section className='person'>
                    <header>
                        <p>number of person</p>
                    </header>
                    <input type="number" name='person' />
                </section>
                <section className='date'>
                    <header>
                        <p>date</p>
                    </header>
                    <input type="date" name='date' />
                </section>
                <section className='sec-btn'>
                    <button className='btn'>Explore</button>
                </section>
            </form>
            <section className='trips'>
                {
                    trips.map(e => {
                        return(
                            <article className='trip' key={e.id}>
                                <section className='img'>
                                    <img src={e.img} alt="img" />
                                </section>
                                <header>
                                    <h4>{e.title}</h4>
                                </header>
                                <div>
                                    <p className='price'>{e.price}$ / person</p>
                                    <button className='btn'>Choose</button>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
            <section className='view-more'>
                <button className='btn-more'>View More</button>
            </section>
        </section>
    );
}

export default Start;