import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4">
          <DetailItem label="Id" value={book._id} />
          <DetailItem label="Title" value={book.title} />
          <DetailItem label="Author" value={book.author} />
          <DetailItem label="Publish Year" value={book.publishYear} />
          <DetailItem
            label="Create Time"
            value={new Date(book.createdAt).toString()}
          />
          <DetailItem
            label="Last Update Time"
            value={new Date(book.updateAt).toString()}
          />
        </div>
      )}
    </div>
  );
};

const DetailItem = ({ label, value }) => {
  return (
    <div className="my-4">
      <span className="text-xl mr-4 text-gray-500">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default ShowBook;
