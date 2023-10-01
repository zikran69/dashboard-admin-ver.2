import { useEffect, useState } from "react";
import AdminDetail from "./adminDetail";
import AdminEdit from "./adminEdit";
export default function DataAdmin({ dataAdmin }) {
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("https://651107013ce5d181df5da09e.mockapi.io/admin/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      {dataAdmin ? (
        <>
          {dataAdmin.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.username}</td>
              <td>{product.level}</td>
              <td>{product.lastLogin}</td>
              <td>{product.status}</td>
              <td>
                <div className="w-[190px]">
                  <AdminDetail idData={product.id} />
                  <button
                    title="hapus"
                    onClick={() => {
                      Removefunction(product.id);
                    }}
                    className="modal-hapusnya mr-1 py-1 px-5 bg-red-400 rounded-md hover:bg-hover-red"
                  >
                    <i className="ri-delete-bin-line text-white"></i>
                  </button>
                  <AdminEdit idData={product.id} />
                </div>
              </td>
            </tr>
          ))}
        </>
      ) : (
        <tr></tr>
      )}
    </>
  );
}
