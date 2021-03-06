import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    debugger;
    return axios
      .post(`${API_URL}signin`, {
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

  register(
    username,
    email,
    address,
    phoneNumber,
    gender,
    firstName,
    lastName,
    lastSeen,
    age
  ) {
    return axios.post(
      `${API_URL}clinic/${this.getCurrentUser().id}/signupCustomer`,
      {
        username,
        email,
        address,
        phoneNumber,
        gender,
        firstName,
        lastName,
        lastSeen,
        age,
      }
    );
  }

  registerClinic(username, email, password) {
    return axios.post(`${API_URL}clinic/signup`, {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
