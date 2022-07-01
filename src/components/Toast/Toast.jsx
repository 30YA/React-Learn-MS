import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Toast({ type, message }) {
  useEffect(() => {
    if (message) {
        toast[type](message);
    }
  }, [type, message]);
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
