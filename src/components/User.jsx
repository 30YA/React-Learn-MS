function User(props) {
  const currentPost = props.users;
  return (
    <div className="section">
      <p>id: {currentPost.id}</p>
      <p>name: {currentPost.name}</p>
      <p>username: {currentPost.username}</p>
      <p>email: {currentPost.email}</p>
      <p>phone: {currentPost.phone}</p>
    </div>
  );
}
export default User;