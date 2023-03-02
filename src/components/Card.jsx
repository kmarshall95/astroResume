import React from 'react';

const Card = ({description, bodyText, link, postPic}) => {
    return (
        <div class="card col-4">
            <div class="card__image">
                <img src={postPic} alt="card image" />
            </div>
            <div class="card__content">
                <h3 class="card__title">{description}</h3>
                <p class="card__text">{bodyText}</p>
                <button class="card__btn" href={`/${link}`}>Read More</button>
            </div>
        </div>
    )
}

export default Card;