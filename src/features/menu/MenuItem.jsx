import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";


function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex space-x-4 px-2 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-50 grayscale" : ""} `}
      />
      <div className="flex flex-col justify-center grow">
        <p className="my-1 font-semibold">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-semibold opacity-50 ">Sold out</p>
          )}
          <Button type={"small"}> Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
