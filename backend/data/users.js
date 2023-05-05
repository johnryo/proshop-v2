import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.net',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Jones',
    email: 'john@test.net',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Anna Smith',
    email: 'anna@test.net',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
