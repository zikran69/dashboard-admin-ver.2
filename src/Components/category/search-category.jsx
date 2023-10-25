import PropType from "prop-types";

export default function SearchCategory({ search }) {
  const searching = (e) => {
    search(e.target.value.toLowerCase());
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
