import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formError = useActionData();

  return (
    <div className="px-3 py-3 ">
      <h2 className="text-xl mb-9 text-stone-700 font-bold">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/orderId"> */}
      <Form method="POST">

        <div className="flex mb-8 flex-col sm:flex sm:flex-row sm:gap-2 sm:items-center ">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required  className="input grow" />
        </div>

        <div className="flex mb-8 flex-col sm:flex sm:flex-row sm:gap-2 sm:items-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow" >
            <input type="tel" name="phone" required  className="input w-full " />
          {formError?.phone && <p className="text-xs mt-2 text-red-700 bg-red-200 p-2 rounded-md">{formError.phone}</p>}
          </div>
        </div>

        <div className="flex mb-8 flex-col sm:flex sm:flex-row sm:gap-2 sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-6 flex gap-6 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-6 h-6 accent-yellow-400 focus:ring focus:ring-offset-2 focus:ring-yellow-400 focus:outline-none "
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isSubmitting}
            type={"primary"}
            
          >
            {isSubmitting ? "loading..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const error = {};
  if (!isValidPhone(order.phone))
    error.phone =
      "Please enter your correctly phone number, we might contact you!!";
  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
