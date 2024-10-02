import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/components/_cardItem.scss'

function CardItem({ id, title }) {
    return (
        <div className='card-wrapper'>
            <h2>{title}</h2>
            <Link to={`/item/${id}`}>Voir plus</Link>
        </div>
    );
}

CardItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

export default CardItem;
