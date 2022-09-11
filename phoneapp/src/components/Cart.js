import { useContext} from "react";
import { Button } from "./Button";
import CartList from "./CartList";
import { ProductContext } from "./Context";
// Hooks can be used only in functional component
export default function Cart() {
  let {cart, checkout} = useContext(ProductContext); // HOC Consumer in functional component
  return <div className="container">
    {
      cart.map(p => <CartList product = {p} key = {p.id}/>)
    }
    <div className="row">
      <div className="col-md-8">&nbsp;</div>
      <div className="col-md-4">
        <Button onClick={() => checkout()}>Checkout</Button>
      </div>
    </div>
  </div>
}
