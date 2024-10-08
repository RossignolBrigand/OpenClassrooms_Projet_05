import { Link } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';

import '../../styles/components/_cardItem.scss'

function CardItem({ id, title, cover }) {

    return (
        <Link to={`/logements/${id}`} key={id} className='card'>
            <div className='card-wrapper'>
                <div className='card-wrapper__gradient'>
                    <img className='card-wrapper__cover' src={cover} alt=''></img>
                </div>
                <h2 className='card-wrapper__content'>{title}</h2>
            </div>
        </Link>
    );
}


export default CardItem;
