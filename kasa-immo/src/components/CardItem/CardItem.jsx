import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/components/_cardItem.scss'

function CardItem({ id, title }) {

    return (
        <Link to={`/item/${id}`}>
            <div className='card-wrapper'>
                <div className='card-wrapper__gradient'>
                    <img className='card-wrapper__img' src={'../../assets/covers/Cover2.png'} alt=''></img>
                </div>
                <h2 className='card-wrapper__content'>Titre de la location : {title}</h2>
            </div>
        </Link>
    );
}

CardItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string
}

export default CardItem;
