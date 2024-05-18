import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg p-4 m-4 relative hover:shadow-2xl transition-shadow duration-300">
      <h2 className="absolute top-2 right-2 px-4 py-1 bg-red-400 text-white rounded-lg shadow">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-400">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2 mb-2">
        <PiBookOpenTextLight className="text-red-400 text-3xl" />
        <h2 className="text-xl font-semibold">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 mb-4">
        <BiUserCircle className="text-red-400 text-3xl" />
        <h2 className="text-lg">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-4 p-4 bg-gray-100 rounded-lg">
        <BiShow
          className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-200"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-500 hover:text-yellow-700 transition-colors duration-200" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-200" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
