function UnitStates({stat,stat_value,sup,noborder}) {
  return (
    <div className={`one-third ${noborder ? noborder : ''}`}>
      <div className="stat">
        {stat}<sup>{sup ? sup : ''}</sup>
      </div>
      <div className='stat-value'>{stat_value}</div>
    </div>
  );
}

export default UnitStates;
