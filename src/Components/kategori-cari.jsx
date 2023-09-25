import PropType from "prop-types";

export default function KategoriCari({ database, cari }) {
  const searching = () => {
    // const db_filtered = database.filter((item) =>
    //   item.database.includes(e.target.value)
    // );
    cari(database);
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

KategoriCari.propTypes = {
  database: PropType.array,
  cari: PropType.func,
};
