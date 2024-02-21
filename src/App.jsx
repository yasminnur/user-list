import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = (callback) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        callback(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    getUsers((data) => {
      setUsers(data);
    })

  }, []);

  return (
    <>
      <div className="all">
      <div className="user">
      <h1 className="title">user list</h1>
        <div className="searchContainer">
          <div className="search-input">
            <input type="text" placeholder="Search User" onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>

        
          <div className="cardContainer">
          {users.length > 0 &&
            users.filter((item) => {
              if (search === "") {
                return item;
              } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
              }
            }).map((item, index) => (
          <div className="card" key={index}>
            <div className="row atas">
              <div className="col kiri">
                <img src="./assets/avatar.svg" alt="" />
              </div>
              <div className="col kanan">
                <div className="cardHead">
                  <h3 className="name">{item.name}</h3>
                  <h5 className="position">{item.company.name}</h5>
                </div>
                <div className="cardBody">
                  <div className="telpContainer bioContainer">
                    <img src="./public/assets/telp.svg" alt="telp" />
                    <p className="telp">{item.phone}</p>
                  </div>
                  <div className="locContainer bioContainer">
                    <img src="./public/assets/loc.svg" alt="loc" />
                    <p className="loc">{item.address.city}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row bawah">
              <div className="col bioContainer satu">
                <img src="./public/assets/inbox.svg" alt="" />
                <a href="#" className="inbox">{item.website}</a>
              </div>
              <div className="col bioContainer dua">
                <img src="./public/assets/email.svg" alt="" />
                <a href="#" className="email">{item.email.substring(0,10)}...</a>
              </div>
            </div>
          </div>
            ))}
            </div>
        </div>
        </div>
    </>
  );
}

export default App;
