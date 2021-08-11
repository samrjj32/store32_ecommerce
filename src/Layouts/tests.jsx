import React, { useEffect, useState } from "react";
import axios from "axios";

function Tests() {
  const [imageData, setImageData] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [user, setUser] = useState({});

  const [error, setError] = useState([]);

  const getUsers = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => reject(error));
    });
  };

  const getAlbums = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}/albums/`)
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
  };

  const getPhotos = (id) => {
    console.log(id);
    return new Promise((resolve, reject) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
    });
  };

  useEffect(() => {
    getUsers(3)
      .then((res) => {
        setUser(res);
        return getAlbums(res.id)
          .then((data) => {
            setAlbums(data);
            return getPhotos(res.id);
          })
          .then((result) => setImageData(result))
          .catch((error) => setError("error at fetching albums"));
      })
      .catch((err) => setError("error at fetching user data"));
  }, []);

  // console.table(albums.splice(0, 5));

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p> id : {user.id}</p>
        <p> name : {user.username}</p>
        <p> email: {user.email}</p>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* <div style={{ display: "flex", flexWrap: "wrap" ,justifyContent:"center" }}> */}

        {albums.map((item) => (
          <div
            style={{
              width: "200px",
              padding: "10px",
              background: "cadetblue",
              margin: "10px",
            }}
          >
            <p>id : {item.id}</p>
            <p>user : {item.userId}</p>
            <p>{item.title}</p>
          </div>
        ))}
        {/* </div> */}

        {imageData.splice(0, 10).map((item) => (
          <div style={{ width: "300px" }}>
            <p> album id :{item.albumId}</p>
            <p>title :{item.title}</p>
            <img style={{ maxWidth: "100px" }} src={item.url}></img>
          </div>
        ))}
        <div>{error}</div>
      </div>
    </div>
  );
}

export default Tests;
