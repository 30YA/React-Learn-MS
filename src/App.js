import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Toast from "./components/Toast";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toast, setToast] = useState({
    type: "success",
    message: "",
  });
  const [title, setTitle] = useState("");
  const [postId, setPostId] = useState("1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/posts/${postId}`)
      .then((respons) => respons.json())
      .then((post) => setTitle(post.title));
      setLoading(false);
      setToast({type: 'success',message: `پست با شناسه${postId} بارگزاری شد`})
  },[postId]);

  const inputHandler = (e) => {
    setLoading(true);
    setPostId(e.target.value)
  }
  return (
    <div className="main">
      
      <label htmlFor="numinput">Post id : </label>
      <input type="Number" value={postId} onChange={inputHandler} />
      {loading ? <Loading /> : <h1>{title}</h1>}
      <Toast type={toast.type} message={toast.message} />
    </div>
  );
}

export default App;
