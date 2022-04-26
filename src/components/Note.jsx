const Note = (Props) => {
  return (
    <li>
        <a href="#">
          <h2>{Props.name}</h2>
          <p>{Props.content}</p>
        </a>
    </li>
  );
};
export default Note;