module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@email.com',
          cpf: '00000000000',
          password_hash:
            '$2a$08$qIsRtf1ubNyXJ19KlhyrX.a8cIc5TSyh8HfhCtNLb7xh1Yebo6EOW',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
