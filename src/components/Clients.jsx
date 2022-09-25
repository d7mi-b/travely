import './styles/clients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const clients = [
    {
        id: 1,
        name: 'John Lenon',
        body: "I found many vacation experiences using their services. The tour guide is also good so you won't regret it if you use",
    },
    {
        id: 2,
        name: 'Ariana Grande',
        body: "Vacation experiences using their services. The tour guide is also good so you won't regret it if you use",
    },
    {
        id: 3,
        name: 'Shin Ryujin',
        body: "The tour guide is also good so you won't regret it if you use"
    }
]

function Clients () {
    return (
        <section className="clients-container">
            <header className='header'>
                <h2>What do they say?</h2>
            </header>
            <section className='clients'>
                {
                    clients.map(e => {
                        return (
                            <article className='client' key={e.id}>
                                <span><FontAwesomeIcon icon={faQuoteLeft} size='xl' /></span>
                                <section className='body'>
                                    <p>
                                        {e.body}
                                    </p>
                                    <p className='name'>
                                        {e.name}
                                    </p>
                                </section>
                            </article>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Clients;