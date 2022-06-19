function CardImage({src, name}) {
  return (
    <div className={`clash-card__image clash-card__image--${name}`}>
      <img src={src} alt={name} />
    </div>
  );
}

export default CardImage;
