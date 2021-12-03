import axios from "axios";

export async function authorizeSpotify() {
  const token = getTokenFromStorage();
  const { data } = await axios.get(`/spotify/authorize?token=${token}`);
  return data;
}

export async function getSongs() {
  const headers = {
    Authorization: `Token ${getTokenFromStorage()}`,
  };
  return await axios
    .get("/tracks/", { headers })
    .catch((error) => window.location.replace("/spotify-auth"))
    .then((response) => response.data);
}

export async function login(username, password) {
  const response = await axios.post("/users/api-token-auth/", {
    username,
    password,
  });
  if (response.status === 200) {
    const { token } = response.data;
    addTokenToStorage(token);
    window.location.replace("/");
  }
}

function getTokenFromStorage() {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    window.location.replace("/login");
  }
}

function addTokenToStorage(token) {
  localStorage.setItem("token", token);
}
