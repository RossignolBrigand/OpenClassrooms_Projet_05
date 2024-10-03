import { Link } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';

import '../../styles/components/_cardItem.scss'

function CardItem({ id, key, title, cover }) {

    return (
        <Link to={`/logements/${id}`} key={key} className='card'>
            <div className='card-wrapper'>
                <div className='card-wrapper__gradient'>
                    <img className='card-wrapper__cover' src={cover} alt=''></img>
                </div>
                <h2 className='card-wrapper__content'>{title}</h2>
            </div>
        </Link>
    );
}

// CardItem.propTypes = {
//     id: PropTypes.oneOf,
//     title: PropTypes.string,
//     cover: PropTypes.string
// }

export default CardItem;
