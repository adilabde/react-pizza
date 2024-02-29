// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className=" mx-4 my-2 space-y-4 ">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-md font-semibold">Order #{id} status</h2>

        <div>
          {priority && (
            <span className="tracking-wider rounded-full bg-red-600 px-3 py-1 uppercase text-red-50 mx-3">
              Priority
            </span>
          )}
          <span className="tracking-wider rounded-full bg-green-600 px-3 py-1 uppercase text-green-50">{status} order</span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 bg-stone-200 px-3 py-2 rounded-md">
        <p className="font-semibold font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-stone-200 divide-y border-b border-t">
         {cart.map(item=><OrderItem item={item} key={item.name} />)}
      </ul>

      <div className="space-y-2 bg-stone-200 p-2 rounded-md">
        <p className="text-sm text-stone-600 font-medium">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function OrderLoader({ params }) {
  const error = await getOrder(params.orderId);
  return error;
}

export default Order;
