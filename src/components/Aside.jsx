import Link from "./link";
export default function Aside(props) {
  const links = props.posts
    ? props.posts.map((post, index) => (
        <Link
          key={post.id}
          title={post.title}
          handleClick={props.handleChangeCurentPost}
          id={post.id}
        />
      ))
    : null;
  return (
    <aside>
      <ul>{links}</ul>
    </aside>
  );
}
