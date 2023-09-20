import axios from "axios";
import { useState } from "react";

export default function Api() {
  const [result, setResult] = useState([]);
  async function getResult() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    setResult(res.data);
  }
  return (
    <div>
      <h1>hello world</h1>
      <div>{result?.title}</div>
      <button onClick={() => getResult()}>fetch</button>
    </div>
  );
}
