exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          uid: "f467StrA0ZZ8MAPoe2zcDQk53hO1",
          username: "employee",
          img_url: "https://www.fillmurray.com/640/360",
          account_type: "f5c3522b165b1589a6cb5a2aee1da7f7",
          balance: 100
        },
        {
          id: 2,
          uid: "f467StrA0ZZ8MAPoe2zcDQk53hO2",
          username: "cherry",
          img_url: "https://loremflickr.com/640/360",
          account_type: "1c5bc292728db250bf56c216870babab"
        },
        {
          id: 3,
          uid: "f467StrA0ZZ8MAPoe2zcDQk53hO3",
          username: "full",
          img_url: "http://via.placeholder.com/640x360",
          account_type: "f5c3522b165b1589a6cb5a2aee1da7f7",
          balance: 50
        }
      ]);
    });
};
