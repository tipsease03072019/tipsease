exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("customers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("customers").insert([
        {
          id: 1,
          username: "kanekperez",
          password: "pass",
          email: "kanekperez@email.com",
          img_url: "https://www.fillmurray.com/640/360",
          account_type: "Customer"
        },
        {
          id: 2,
          username: "apple",
          password: "pie",
          email: "applepie@email.com",
          img_url: "https://loremflickr.com/640/360",
          account_type: "Customer"
        },
        {
          id: 3,
          username: "empty",
          password: "user",
          email: "emptyuser@email.com",
          img_url: "http://via.placeholder.com/640x360",
          account_type: "Customer"
        }
      ]);
    });
};
