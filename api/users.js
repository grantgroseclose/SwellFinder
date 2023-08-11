import client from "./client";

const register = (userInfo) => client.post("/users", userInfo);

const update = (user) => client.post("/user", user);

export default { register, update };
