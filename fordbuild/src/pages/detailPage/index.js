import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams(); // Extract the "id" parameter

  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch the item details based on the "id" parameter
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost/fordsPart/backend.php?id=${id}`
        );

        // Set the retrieved item details to the state
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };  

    fetchItemDetails();
  }, [id]);

  return (
    <div style={{padding:"100px"}}>
      {item ? (
        <ul>
          <li>{item.year}</li>
          <li>{item.make}</li>
          <li>{item.model}</li>
          <li>{item.keywords}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
