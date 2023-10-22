import { useEffect, useState } from "react";
import { useContext } from "react";
import { global } from "../../assets/context";

export default function DetailCategory() {
  const [categoryId, setCategoryId] = useState(null);
  const dataId = useContext(global).dataId;
  useEffect(() => {
    fetch(`http://localhost:2000/category/${dataId}`)
      .then((res) => res.json())
      .then(setCategoryId);
  }, []);
  return (
    categoryId && (
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold mb-4">Detail Category</h1>
            </div>
            <table className="mb-4 border-collapse  rounded-lg text-left text-gray-500 w-full">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left min-w-[120px]">
                    Category
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left max-w-fit">
                    Price
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left maz-w-fit">
                    Facilities
                  </th>
                  <th className="border border-b-2 border-opacity-10 border-secondary-blue p-4 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="capitalize text-sm text-gray-700 bg-gray-50">
                <tr>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {categoryId.nameCategory}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    ${categoryId.price}/night
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {categoryId.facilityCategory}
                  </td>
                  <td className="p-4 border-secondary-gray border border-b-2 border-opacity-10">
                    {categoryId.descCategory}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    )
  );
}
