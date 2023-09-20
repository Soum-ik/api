import { useQuery } from "react-query";
import fetch from "./getQuery";

export default function Api() {
  const { data, isLoading } = useQuery("query", () => fetch());

  // console.log(data.data.info.seed);
  if (isLoading) {
    return <h1>loading ...</h1>;
  }

  return (
    <div>
      <h1>Api fetching.</h1>
      <p>{data.status}</p>
    </div>
  );
}
