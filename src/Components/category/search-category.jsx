import PropType from "prop-types";
import { useEffect, useState } from "react";
import auth from "../../utils/auth";

export default function SearchCategory({ search }) {
  const [res, setRes] = useState(null);
  const [nameCategory, setnameCategory] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_ADDR_API}/category`, {
      headers: {
        Authorization: `Bearer ${auth.isAuthenticated()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setRes(res.categories));
  }, []);
  // if (res) {
  //   setnameCategory(res.map((res) => res.nameCategory));
  //   const nameCategory = res.map((res) => res.nameCategory);
  //   console.log(nameCategory);
  // }
  const searching = (e) => {
    search(e.target.value.toLowerCase());
    setnameCategory(res.map((res) => res.nameCategory));
    console.log(nameCategory);
  };
  return (
    <div className="md:col-span-3">
      <select
        onClick={searching}
        required
        className="h-10 border mt-1 rounded-sm px-4 focus:border-blue-400 focus:outline-none"
      >
        <option>All</option>
        <option value={"Junior Suite"}>Junior Suite</option>
        <option value={"Executive Suite"}>Executive Suite</option>
        <option value={"Super Delux"}>Super Delux</option>
      </select>
    </div>
  );
}

SearchCategory.propTypes = {
  cari: PropType.func,
};
