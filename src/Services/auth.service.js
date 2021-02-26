import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  debugger;
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, address, phoneNumber, gender, firstName, lastName, lastSeen) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      address,
      phoneNumber,
      gender,
      firstName,
      lastName,
      lastSeen
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();