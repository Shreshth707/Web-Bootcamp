import { useContext } from "react";
import { Button } from "./Button";
import { ProductContext } from "./Context";


export default function CartList ({product}) {
  let value = useContext(ProductContext); // yet to use this
  let {id, img, title, price, total, count} = product;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <img src = {img} style={{'width':'50px'}}/>
          </div>
          <div className="col-md-2">
           <Button cart>+</Button>
           <Button>-</Button>
          </div>
          <div className="col-md-2">
            Title : {title}
          </div>
          <div className="col-md-2">
           Count : {count}
           </div>
           <div className="col-md-2">
             Price : {price}
           </div>
          <div className="col-md-2">
           Total : {total}
          </div>
        </div>
      </div>
    )
 
}
