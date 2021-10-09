import bcrypt from "bcryptjs";
const userData = [
  {
    name: "Hari Udasi",
    password: bcrypt.hashSync("123456", 10),
    email: "test@example.com",
    isMaster: true,
  },
  {
    name: "Ram",
    password: bcrypt.hashSync("123456", 10),
    email: "ram@example.com",
  },
  {
    name: "Hari Basnet",
    password: bcrypt.hashSync("123456", 10),
    email: "haribasnet@example.com",
  },
  {
    name: "Nishan Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "nishan@example.com",
  },
  {
    name: "Hari",
    password: bcrypt.hashSync("123456", 10),
    email: "test4@example.com",
  },
  {
    name: "asad Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "bipi2n@example.com",
  },
  {
    name: "asdad as",
    password: bcrypt.hashSync("123456", 10),
    email: "tessst@example.com",
  },
  {
    name: "asd Thapa",
    password: bcrypt.hashSync("123456", 10),
    email: "bipina@example.com",
  },
];

export default userData;
