import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 px-2 my-1 md:my-0 md:flex md:justify-between md:item-center ">
      <p className="font-semibold">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between  md:gap-8 ">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <Button type={"small"}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
