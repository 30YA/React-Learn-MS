import React, { useEffect, useReducer } from "react";
import Loading from "./components/Loading";
import Toast from "./components/Toast";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  toast: { type: "success", message: "" },
  title: "",
  postId: "1",
  loading: true,
};
const reduser = (state, action) => {
  switch (action.type) {
    case "GetPostSuccess":
      return {
        ...state,
        toast: {
          type: "success",
          message: `پست با شناسه${action.payLoad.id} بارگزاری شد`,
        },
        title: action.payLoad.title,
        loading: false,
      };
    case "PostRequest":
      return {
        ...state,
        postId: action.payLoad,
        loading: true,
      };
    default:
      break;
  }
};

function App() {
  const [{toast,title,postId,loading}, dispatch] = useReducer(reduser, initialState);

  useEffect(() => {
    fetch(`https://jsonplaceholder.ir/posts/${postId}`)
      .then((respons) => respons.json())
      .then((post) => dispatch({ type: "GetPostSuccess", payLoad: post }));
  }, [postId]);

  const inputHandler = (e) => {
    dispatch({ type: "PostRequest", payLoad: e.target.value });
  };

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
