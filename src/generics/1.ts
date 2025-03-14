import axios from "axios";

type User = {
  userId: 1;
  name: "Bob";
  isOnline: true;
};

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
fetchData<User>("url");
