function UserList(props) {
  const clickHandler = (id) => {
    props.Handler(id)
  };
  return (
    <p className="section">
      Users:
      {props.users.map((item) => {
        return (
          <label>
            <input
              type="radio"
              name="user"
              checked={props.selected === item.id}
              onChange={() => clickHandler(item.id)}
            />
            {item.id}
          </label>
        );
      })}
    </p>
  );
}
export default UserList;
