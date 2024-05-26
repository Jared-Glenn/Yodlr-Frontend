import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3000";


class YodlrApi {

  static async request(endpoint, data = {}, method = "get", headers={}) {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  static async getUsers() {
    const res = await this.request("users");
    return res;
  }

  static async getUser(id) {
    const res = await this.request(`users/${id}`);
    return res;
  }

  static async registerUser(firstName, lastName, email) {
    const data = { firstName, lastName, email };
    const res = await this.request(`users/`, data, "post");
    return res;
  }
}


export default YodlrApi;