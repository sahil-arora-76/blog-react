import React from "react";
import axios from "axios";
import config from "../config";

const DeleteButton = ({ blogId, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Send a delete request to your backend
      await axios.delete(`${config.BASE_URL}/api/blogs/${blogId}`);
      // Call the onDelete callback to update the UI
      alert("Deleted")
      window.location.reload();
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("deleted")
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
