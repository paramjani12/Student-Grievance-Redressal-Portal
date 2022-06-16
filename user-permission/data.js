const ROLE = {
    ADMIN: 'admin',
    BASIC: 'student'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'Harshil Joshi', role: ROLE.ADMIN },
      { id: 2, name: 'Rima Patel', role: ROLE.ADMIN },
      { id: 3, name: 'student', role: ROLE.BASIC }
    ],
    pages: [
      { id: 1, name: "harshil's Project", userId: 1 },
      { id: 2, name: "rima's Project", userId: 2 },
      { id: 3, name: "student's Project", userId: 3 }
    ]
  }