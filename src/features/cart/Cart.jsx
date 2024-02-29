import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="py-2 px-4">
      <LinkButton
        to="/menu"
      >
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-3 font-semibold text-xl space-x-3">Your cart, %NAME%</h2>
    <ul className="divide-y divide-stone-200 mt-6">

      {cart.map(item=><CartItem item={item} key={item.pizzaId} />)}
    </ul>

      <div className="flex items-center gap-5 mt-6">
        <Button type={"primary"} to="/order/new">Order pizzas</Button>
        <Button type={"secondary"}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
