import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

export default function Api() {
  const { data,error,isLoading} = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher, 
  );

  if(error){
    return <h1>There was an error</h1>
  }
  if(isLoading){
    return <h1>Loading...imga </h1>
  }

  return (
    <div>
      <h1>hello world</h1>
      <div>{data.title}</div>
    </div>
  );
}
