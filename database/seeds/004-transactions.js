exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        { id: 1, users_id: 1, user_balance: 25, newBalance: 50 },
        { id: 2, users_id: 1, user_balance: 50, newBalance: 100 },
        { id: 3, users_id: 3, user_balance: 30, newBalance: 50 }
      ]);
    });
};
