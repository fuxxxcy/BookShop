import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:5555/books/${id}`);
      setLoading(false);
      enqueueSnackbar("Book deleted successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("An error occurred. Please check console.", {
        variant: "error",
      });
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl mb-8">
          Are you sure you want to delete this book?
        </h3>
        <div className="flex gap-4">
          <button
            className="p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            onClick={handleDeleteBook}
          >
            Yes
          </button>
          <button
            className="p-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
