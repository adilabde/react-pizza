import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
   return (
      <header className="bg-yellow-500 tracking-widest p-5 sm:p-7 font-semibold uppercase" >
         <Link to={"/"} >React Fast Pizza  </Link>
         <SearchOrder  />
         <Username />
      </header>
   );
}
