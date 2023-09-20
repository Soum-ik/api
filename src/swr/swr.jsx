// import useSWR from "swr";

import axios from "axios";
import useSWR from "swr";

// const fetcher = async (...args) => {
//   const res = await fetch(...args);
//   const data = await res.json();
//   return(data); ;
// };

// export default function Api() {
//   const { data, error, isLoading } = useSWR(
//     "https://random-data-api.com/api/v2/users",
//     fetcher
//   );

//   if (error) {
//     return <h1>There was an error</h1>;
//   }
//   if (isLoading) {
//     return <h1>Loading...imga </h1>;
//   }

//   return (
//     <div>
//       <h1>hello world</h1>
//       <div>{data.email}</div>
//     </div>
//   );
// }

const fetcher = async (...args) => {
  const res = await axios(...args);
  return res.data;
};

export default function Api() {
  const { data, isLoading } = useSWR(
    "https://randomuser.me/api/",
    fetcher
  );

  if (isLoading) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <div>
        <h1>Api fetching</h1>
        <div>{data.info.version}</div>
      </div>
    </>
  );
}
