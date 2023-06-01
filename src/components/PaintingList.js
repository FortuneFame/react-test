import PropTypes from 'prop-types';
import Painting from "./Painting";

function PaintingList({ items }) {
    return (
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <Painting
                        url={item.url}
                        title={item.title}
                        authorName={item.author.tag}
                        authorUrl={item.author.url}
                        quantity={item.quantity}
                        price={item.price}
                    />
                </li>
            )}
        </ul>
    )
}

PaintingList.propTypes = {
    item: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
}

export default PaintingList