exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        { id: 1, users_id: 1, user_balance: 100, tip: 5 },
        { id: 2, users_id: 1, user_balance: 100, tip: 10 },
        { id: 3, users_id: 3, user_balance: 50, tip: 15 }
      ]);
    });
};
