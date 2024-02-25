import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const style = "text-sm text-blue-400 hover:text-base hover:text-blue-600 ";
  const navigate = useNavigate();

  if (to === "-1")
    return (
      <button className={style} onClick={() => navigate(-1)}>
        {" "}
        {children}
      </button>
    );

  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
}
