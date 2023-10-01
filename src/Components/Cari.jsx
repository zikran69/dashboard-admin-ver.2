import PropType from "prop-types";

export default function Cari({ cari }) {
  const searching = (e) => {
    cari(e.target.value.toLowerCase());
  };
  return (
    <input
      onChange={searching}
      type="search"
      placeholder="cari..."
      className="pl-4 pr-2 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500 order-first sm:order-last text-lg"
    />
  );
}

Cari.propTypes = {
  cari: PropType.func,
};
