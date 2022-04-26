import React from "react";
// import Hookcounter from "./components/hookCounter";
// import ClassCounter from './components/classCounter';
import "./components/style.css";
import StickyNote from "./components/StickyNote";

const App = () => {
  return (
    <div className="">
      <StickyNote />
    </div>
  );
};
//   const [products,setproducts] = React.useState([
//     { name: "RaectJS", price: "99 $" },
//     { name: "NodeJS", price: "89 $" },
//   ]);
//   const handler = () => {
//     setproducts([
//       { name: "RaectJS", price: "9991 $" },
//       { name: "NodeJS", price: "8971 $" },
//     ])
//   }
//   return (
//     <div id="sia" className="nav">
//       <h1>this is App pruduct</h1>
//       {products.map((item) => {
//         return <Products name={item.name} price={item.price} />;
//       })}
//       <button onClick={handler}>press me</button>
//     </div>
//   );
// };

// class App extends React.Component {
//   state = {
//     products: [
//       { name: "RaectJS", price: "99 $" },
//       { name: "NodeJS", price: "89 $" },
//     ],
//   };
//   handler = () => {
//     this.setState({
//       products: [
//         { name: "RaectJS", price: "999 $" },
//         { name: "NodeJS", price: "895 $" },
//       ],
//     })
//   }
//   render() {
//     return (
//       <div id="sia" className="nav">
//         <h1>this is App pruduct</h1>
//         {this.state.products.map((item) => {
//           return <Products key={item.name} name={item.name} price={item.price} />;
//         })}
//         <button onClick={this.handler}>press me</button>
//       </div>
//     );
//   }
// }

export default App;