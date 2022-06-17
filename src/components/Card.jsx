import CardImage from "./CardImage";
import CartItem from "./CartItem";
import States from "./States";
function Card({hero}) {
  return (
    <div className="clash-card barbarian">
      <CardImage src={hero.img} name={hero.name} />
      
      <CartItem type="clash-card__level clash-card__level--barbarian">{hero.level}</CartItem>
      <CartItem type="clash-card__unit-name">The {hero.name}</CartItem>
      <CartItem type="clash-card__unit-description">{hero.description}</CartItem>

      <States units={hero.units} />
    </div>
  );
}

export default Card;
