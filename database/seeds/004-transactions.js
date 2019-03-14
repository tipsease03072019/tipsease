exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        { id: 1, uid: "f467StrA0ZZ8MAPoe2zcDQk53hO1", tip: 5 },
        { id: 2, uid: "f467StrA0ZZ8MAPoe2zcDQk53hO2", tip: 10 },
        { id: 3, uid: "f467StrA0ZZ8MAPoe2zcDQk53hO3", tip: 15 }
      ]);
    });
};
