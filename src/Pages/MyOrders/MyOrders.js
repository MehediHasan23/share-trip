import React, { useEffect, useState } from "react";
import useProvContext from "../../Hooks/useProvContext";
import "./MyOrders.css";


const MyOrders = () => {
  const {firebase} = useProvContext()
  const {user} = firebase;
  const {email} = user; 
  const [lists, setLists] = useState([]);
  useEffect(() => {
    
    fetch(`https://powerful-dawn-79694.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, [email]);

  //delete order
  const deleteId = (id) => {
    const proceed = window.confirm("you want to sure to delete");
    if (proceed) {
      const url = `https://powerful-dawn-79694.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            alert("delete successfully");
            const remaining = lists.filter((list) => list._id !== id);
            setLists(remaining);
          }
        });
    }
  };

  return (
    <div className="container myOrders">
      <h1 className="text-center">CHECK YOUR PACKAGES</h1>
      <h1 className="text-center">{lists.length}</h1>

      {lists.map((list) => (
        <h1>
          {list.Name}
          <button
            onClick={() => deleteId(list._id)}
            className="btn btn-primary"
          >
            Cancel
          </button>
        </h1>
      ))}
    </div>
  );
};

export default MyOrders;
