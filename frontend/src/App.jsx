import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get("/api/items/"); 
      setItems(res.data);
    } catch (error) {
      console.error("Failed to fetch items", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen w-[1624px] bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Items List</h1>
        {items.length === 0 ? (
          <p className="text-gray-500">No items found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <li key={item.id} className="py-3 text-gray-700">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
