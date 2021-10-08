import bcrypt from "bcryptjs";
const userData = [
  {
    name: "Hari Udasi",
    password: bcrypt.hashSync("123456", 10),
    email: "test@example.com",
    isAdmin: true,
  },
  {
    name: "Ram",
    password: bcrypt.hashSync("123456", 10),
    email: "ram@example.com",
    isAdmin: false,
  },
  {
    name: "Hari Basnet",
    password: bcrypt.hashSync("123456", 10),
    email: "haribasnet@example.com",
    isAdmin: true,
  },
  {
    name: "Nishan Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "nishan@example.com",
    isAdmin: false,
  },
  {
    name: "Hari",
    password: bcrypt.hashSync("123456", 10),
    email: "test4@example.com",
    isAdmin: true,
  },
  {
    name: "asad Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "bipi2n@example.com",
    isAdmin: false,
  },
  {
    name: "asdad as",
    password: bcrypt.hashSync("123456", 10),
    email: "tessst@example.com",
    isAdmin: true,
  },
  {
    name: "asd Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "bipina@example.com",
    isAdmin: false,
  },
];

export default userData;
