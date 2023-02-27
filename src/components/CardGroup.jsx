import Card from './Card';
import React from 'react';
const cards = await Astro.glob('../posts/*.md');


const CardGroup = ({ cards }) => (
    <div className="card-group">
        {cards.map(card => (
            <Card
                title={card.title}
                image={card.image}

                />
        ))}
    </div>
);

export default CardGroup;