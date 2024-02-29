import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="font-pizza flex items-center justify-between bg-yellow-400 p-5 font-semibold uppercase tracking-widest sm:p-7">
      <Link to={"/"}>React Fast Pizza </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
