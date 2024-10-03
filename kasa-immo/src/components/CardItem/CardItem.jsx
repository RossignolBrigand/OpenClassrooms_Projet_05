import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/components/_cardItem.scss'

function CardItem({ id, title, cover }) {

    return (
        <Link to={`/item/${id}`} key={`${id}-${title}`} className='card'>
            <div className='card-wrapper'>
                <div className='card-wrapper__gradient'>
                    <img className='card-wrapper__cover' src={cover} alt=''></img>
                </div>
                <h2 className='card-wrapper__content'>{title}</h2>
            </div>
        </Link>
    );
}

CardItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string
}

export default CardItem;
