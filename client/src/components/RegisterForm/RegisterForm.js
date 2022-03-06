import React from "react";
import { useState } from "react";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";

function RegisterForm() {
  const checklist = ["Novels", "History", "Science"];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [isChecked, setIsChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(checklist.length).fill(false)
  );

  // const [user, setUser] = useState({
  //   firstName: "",
  //   email: "",
  //   password:""
  // })

  const [favoriteCatogories, setFavoriteCatogories] = useState([]);
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    for (let i = 0; i <= checkedState.length; i++) {
      if (checkedState[i]) {
        setFavoriteCatogories(...favoriteCatogories, checklist[i]);
      }
      if (!checkedState[i]) {
        setFavoriteCatogories(...favoriteCatogories, "");
      }
    }
  };
  // const trans = (checklist, x) => {
  //   let a = [];
  //   if (x[0]) {
  //     a.push(checklist[0]);
  //   }
  //   if (x[1]) {
  //     a.push(checklist[1]);
  //   }
  //   if (x[2]) {
  //     a.push(checklist[2]);
  //   } else console.log("error");
  //   return a;
  // };

  //   const handleChange = (e)=> {
  //  setUser({...user, [e.traget.name] : [e.target.value]})
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) a.push(checklist[i]);
    }

    createUser();
    console.log(
      {
        firstName,
        lastName,
        email,
        birthday,
        phone,
        checkedState,
        favoriteCatogories,
        // new Date(),
        isChecked,
      },
      { a }
    );
  };
  const createUser = () => {
    Axios.post("http://localhost:3001/register", {
      firstName,
      lastName,
      email,
      password,
      birthday,
      phone,
      //favoriteCatogories,
      isChecked,
      createdAt: new Date(),
    })
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <form className="register">
        <fieldset>
          {/* <legend>Register Form</legend> */}

          <div class="form-row">
            <div className="container1">
              {" "}
              <div class="form-group col-md-4">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=" First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div class="form-group col-md-4">
                <label for="lastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=" Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="container2">
              <div class="form-group col-md-4">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="form-group col-md-4">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container2">
            {" "}
            <div class="form-group col-md-4">
              <label for="birthday">Birthday</label>
              <input
                type="date"
                class="form-control"
                id="Birthday"
                value={birthday}
                onChange={(e) => {
                  setBirthday(e.target.value);
                }}
              />
            </div>
            <div class="form-group col-md-4">
              <label for="Phone">Phone</label>
              <input
                type="numbers"
                class="form-control"
                id="Phone"
                placeholder="+971585349935"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="form-row container4 ">
            {/* <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div> */}
            <div class="form-group  col-md-4">
              <label for="Category">Select your favorite Categories</label>
              <br></br>
              {/* <option selected>Select your favorite Categories...</option> */}
              <div className="toppings-list">
                {checklist.map((name, index) => {
                  return (
                    <div key={index}>
                      {/* <div className="toppings-list-item"> */}
                      <div className="left-section">
                        <input
                          type="checkbox"
                          id={`custom-checkbox-${index}`}
                          name={name}
                          value={name}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                        />
                        {"          " + name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <br></br>
          <div class="form-group container4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="Check"
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(!isChecked);
                }}
              />
            </div>
            <label class="form-check-label" for="Check">
              I read the conditions and I agree
            </label>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            class="btn btn-primary container4 "
          >
            Sign in
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegisterForm;
