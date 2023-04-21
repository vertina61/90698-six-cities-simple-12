import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';

type OfferCardNearbyProps = {
  offer: Offer;
  onListItemHover: (listItemName: string | undefined) => void;
}

function OfferCardNearby({offer, onListItemHover}: OfferCardNearbyProps) {

  const onListItemEnter = () => {
    onListItemHover(offer.title);
  };

  const onListItemLeave = () => {
    onListItemHover(undefined);
  };

  return (
    <article className="near-places__card place-card"
      onMouseEnter={onListItemEnter}
      onMouseLeave={onListItemLeave}
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Main}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width="260"
            height="200"
            alt="Wood and stone place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.description}</p>
      </div>
    </article>
  );
}


export default OfferCardNearby;
