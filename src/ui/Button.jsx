import { Link } from "react-router-dom";

export default function Button({ children, disabled, to,type}) {
  const base =
    "inline-block rounded-full bg-yellow-400 text-sm  font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

    const styles={
      small:base+ " py-2 px-2.5 sm:px-4 sm:py-3 ",
      primary:base+" px-4 py-3 md:px-6 md:py-4",
      secondary:"inline-block text-sm rounded-full border border-2  font-semibold uppercase tracking-wide text-stone-500 hover:bg-stone-200 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-2.5 md:px-6 md:py-4 "
    }
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
