import UnitStates from "./UnitStates";
function States({ units }) {
  const sia = units.map((item, index) => {
    return (
      <UnitStates
        key={item.id}
        stat={item.state}
        stat_value={item.value}
        sup={index === 0 ? "S" : ""}
        noborder={index === units.length - 1 ? "no-border" : ""}
      />
    );
  });
  return (
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      {sia}
    </div>
  );
}

export default States;
