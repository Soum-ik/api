import axios from "axios";

const fetch = async () => {
  const res = await axios.get("https://randomuser.me/api/");
  return res;
};

export default fetch;
