import { useState } from "react";
import TableCategory from "../Components/category/table-category";
import SearchCategory from "../Components/category/search-category";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const [categories, setCategories] = useState(null);
  const [dataValue, setDataValue] = useState("all");
  useState(() => {
    fetch(`http://localhost:2000/category`)
      .then((res) => res.json())
      .then(setCategories)
      .catch((error) => {
        console.log(error.message);
      });
  }, [categories]);
  const navigate = useNavigate();

  const search = (value) => {
    setDataValue(value);
    if (value == "all") {
      fetch(`http://localhost:2000/category`)
        .then((res) => res.json())
        .then(setCategories);
    } else
      fetch(`http://localhost:2000/category/search/${value}`)
        .then((res) => res.json())
        .then(setCategories);
  };

  const deleting = (value) => {
    fetch(`http://localhost:2000/category/delete/${value}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => alert(res.message));
    setTimeout(() => {
      search(dataValue);
    }, 1000);
  };

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">Category</h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4">
            <button
              onClick={() => navigate("/category-add")}
              className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
            >
              <i className="ri-hotel-bed-line mr-2"></i>Add Category
            </button>
            <SearchCategory search={search} />
          </div>
          <TableCategory categories={categories} deleteCategory={deleting} />
        </form>
      </div>
    </div>
  );
}
