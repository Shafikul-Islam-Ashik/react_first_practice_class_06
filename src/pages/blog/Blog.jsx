import { useState } from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import { useEffect } from "react";

const Blog = () => {
  const [age, setAge] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("I am from Blog Component");
  }, [count]);

  useEffect(() => {
    console.log("I am from Count");
  }, [count]);

  return (
    <>
      <PageHeader title="Blog" />
      <div className="container">
        <br />
        <br />
        <br />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <br />
        <hr />
        <h1>{count}</h1>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          --
        </button>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          ++
        </button>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Blog;
