export default function Box(props) {
    const Box = props.boxes.map(box => {
        if (props.activeBox.includes(box.id)) {
          return <div className="box">{box.title}</div>
        }
    })
    return ( 
        <div className="box-wrapper">
          {Box}
        </div>
     );
}