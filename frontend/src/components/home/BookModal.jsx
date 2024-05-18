import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg h-auto bg-white rounded-xl p-6 flex flex-col relative shadow-lg"
      >
        <AiOutlineClose
          className="absolute right-4 top-4 text-2xl text-red-600 cursor-pointer hover:text-red-800 transition-colors duration-200"
          onClick={onClose}
        />
        <div className="flex flex-col items-start">
          <h2 className="mb-2 px-4 py-1 bg-red-300 rounded-lg text-white font-semibold">
            {book.publishYear}
          </h2>
          <h4 className="my-2 text-gray-500 text-sm">{book._id}</h4>
          <div className="flex justify-start items-center gap-2 mb-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="text-xl font-semibold">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-2 mb-4">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="text-lg">{book.author}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
