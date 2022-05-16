export default function link(props) {
    return ( 
        <li onClick={() => props.handleClick(props.id)}>{props.title}</li>
     );
}