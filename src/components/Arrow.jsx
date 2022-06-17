function Arrow({direction,handler}) {
  return (
    <div className="arrow-wrapper" data-direction={direction} onClick={handler}>
      <div className={`round ${direction}2`}>
        <div id="cta">
          <span className={`arrow ${direction}`}></span>
        </div>
      </div>
    </div>
  );
}

export default Arrow;
