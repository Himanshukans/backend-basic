require("dotenv").config();
const express = require("express"); // it is also a imort way to import express module
const app = express(); // app is important for listening
const port = 4000;

const githubData = {
  login: "Himanshukans",
  id: 203653327,
  node_id: "U_kgDODCOAzw",
  avatar_url: "https://avatars.githubusercontent.com/u/203653327?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Himanshukans",
  html_url: "https://github.com/Himanshukans",
  followers_url: "https://api.github.com/users/Himanshukans/followers",
  following_url:
    "https://api.github.com/users/Himanshukans/following{/other_user}",
  gists_url: "https://api.github.com/users/Himanshukans/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/Himanshukans/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Himanshukans/subscriptions",
  organizations_url: "https://api.github.com/users/Himanshukans/orgs",
  repos_url: "https://api.github.com/users/Himanshukans/repos",
  events_url: "https://api.github.com/users/Himanshukans/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Himanshukans/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Himanshu Kansotia",
  company: null,
  blog: "",
  location: "Delhi, India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 19,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2025-03-17T12:53:29Z",
  updated_at: "2026-10-09T12:35:09Z",
};

app.get("/", (req, res) => {
  res.send("Himanshu Kansotia");
});

app.get("/twitter", (req, res) => {
  res.send("https://twitter.com/himanshukansotia");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Successful. Welcome to Himanshu's World</h1>");
});

app.get("/logout", (req, res) => {
  res.send("<h1>Logout Successful. See you soon</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
