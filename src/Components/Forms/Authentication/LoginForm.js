import React, { useState } from "react";
import FormValidationLogic from "./FormValidationLogic";
import authService from "../../../Services/auth.service";
import { Grid, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import NavigationBar from "../../../Navbar/NavigationBar";
import LinearBuffer from "../Other/LinearBuffer";

const avatarStyle = {
  backgroundColor: "#6c93ea",
};

const LoginForm = () => {
  const [clinicName, setclinicName] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const history = useHistory();

  const {
    checkForClinicName,
    checkForPassword,
    clinicNameValid,
    passwordValid,
  } = FormValidationLogic({
    clinicName: clinicName,
    password: password,
    email: "",
  });

  const login = (e) => {
    setloading(true);
    e.preventDefault();

    clinicNameValid && passwordValid
      ? authService
          .login(clinicName, password)
          .then(() => redirectUser())
          .catch((err) => {
            setTimeout(() => {
              seterror("Wrong clinic name or password");
            }, 1500);
          })
      : console.log("");
    setTimeout(() => {
      setloading(false);
    }, 1000);
  };

  const redirectUser = () => {
    history.push(`/dash`);
    window.location.reload("/dash");
  };

  const closeNotification = () => {
    seterror("");
  };

  const onChangeClinicName = async (e) => {
    const clinicName = await e.target.value;
    setclinicName(await clinicName);
    checkForClinicName();
  };

  const onChangePassword = async (e) => {
    const password = await e.target.value;
    setpassword(await password);
    checkForPassword();
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <div
        className="is-max-desktop box mt-5"
        style={{ width: "35%", margin: "0 auto" }}
      >
        <Grid align="center" className="mt-2">
          <Avatar style={avatarStyle}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/pet-shop-14/500/pet_10-512.png"
              alt=""
            />
          </Avatar>
        </Grid>
        <br />
        <div style={{ textAlign: "center" }}>
          <p className="title">Login as Clinic</p>
        </div>
        <form onSubmit={login}>
          <br />
          <div class="field">
            <label class="label">Clinic name</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class={clinicNameValid ? "input is-primary" : "input is-danger"}
                type="text"
                placeholder="Type your clinic name"
                onChange={onChangeClinicName}
                value={clinicName}
                name="name"
              />
              {clinicNameValid === true ? (
                <div>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            {clinicNameValid === true ? (
              <div>
                <p class="help is-success">Valid clinic name</p>
              </div>
            ) : (
              <p class="help is-danger">
                Username must be between 3 and 25 characters
              </p>
            )}
          </div>
          <br />
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class={passwordValid ? "input is-primary" : "input is-danger"}
                type="password"
                placeholder="Type your password"
                onChange={onChangePassword}
                value={password}
              />
              {passwordValid === true ? (
                <div>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            {passwordValid ? (
              <p class="help is-success">Valid password</p>
            ) : (
              <p class="help is-danger">
                Password must contain letters and numbers only.
              </p>
            )}
          </div>
          <br />
          <div>
            <p>
              {error ? (
                <div class="notification is-danger is-light">
                  <button class="delete" onClick={closeNotification}></button>
                  {error}
                </div>
              ) : (
                ""
              )}
            </p>
            {loading ? <LinearBuffer /> : ""}
          </div>
          <br />
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control" style={{ position: "absolute", right: "34%" }}>
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
