export default function Toggle(props) {
  const Togle = props.boxes.map((box) => {
      return (
        <div className="toggle">
          <span>{box.title}</span>
          <label className="toggle-control">
            <input type="checkbox" defaultChecked={props.activeBox.includes(box.id)}/>
            <span className="control" onClick={() => props.togglehandler(box.id)}></span>
          </label>
        </div>
      );
  });
  return (
    <aside>
      {Togle}
    </aside>
  );
}
