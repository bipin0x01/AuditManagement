import bcrypt from "bcryptjs";
const userData = [
  {
    name: "Hari Udasi",
    password: bcrypt.hashSync("123456", 10),
    email: "test@example.com",
    isAdmin: true,
  },
  {
    name: "Bipin Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "bipin@example.com",
    isAdmin: false,
  },
];

export default userData;
