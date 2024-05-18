import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 rounded-tl-md">No</th>
          <th className="border border-gray-300 px-4 py-2">Title</th>
          <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">
            Author
          </th>
          <th className="border border-gray-300 px-4 py-2 hidden md:table-cell">
            Publish Year
          </th>
          <th className="border border-gray-300 px-4 py-2 rounded-tr-md">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr
            key={book._id}
            className="hover:bg-gray-100 transition-colors duration-200"
          >
            <td className="border border-gray-300 px-4 py-2 text-center">
              {index + 1}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              {book.title}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">
              {book.author}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center hidden md:table-cell">
              {book.publishYear}
            </td>
            <td className="border border-gray-300 px-4 py-2 text-center">
              <div className="flex justify-center gap-4">
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
