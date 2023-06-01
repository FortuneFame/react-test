import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const Painting = ({ url = defaultImg, title, authorName, authorUrl, quantity, price }) => {
    return (
        <div>
            <img src={url} alt={title} width="480" />
            <h2>{title}</h2>
            <p>Автор: {authorName}
                <a href={authorUrl}> {authorName} </a>
            </p>
            <p>Цена:{price}</p>
            <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
            <button type="button">Добавить</button>
        </div>
    );
};

Painting.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default Painting;