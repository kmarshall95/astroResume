import React from 'react';

const Card = ({description}) => {
    return (
        <div class="card col-4">
            <div class="card__image">
                <img src="https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="card image" />
            </div>
            <div class="card__content">
                <h3 class="card__title">{description}</h3>
                <p class="card__text"></p>
                <button class="card__btn">Read More</button>
            </div>
        </div>
    )
}

export default Card;