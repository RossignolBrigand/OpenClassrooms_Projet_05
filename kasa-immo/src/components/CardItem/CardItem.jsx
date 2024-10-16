import { Link } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';

import './_cardItem.scss'

function CardItem({ id, title, cover }) {

    return (
        <Link to={`/logements/${id}`} key={id} className='card'>
            <div className='card-wrapper'>
                <div className='card-wrapper__cover' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(4, 4, 4, 0.6) 1%, rgba(10, 10, 10, 0.250) 41%, rgba(255, 255, 255, 0) 100%), url(${cover})` }} />
                <h2 className='card-wrapper__content'>{title}</h2>
            </div>
        </Link>
    );
}


export default CardItem;
