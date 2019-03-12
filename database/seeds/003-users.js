exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "employee",
          password: "pass",
          email: "employee@email.com",
          img_url: "https://www.fillmurray.com/640/360",
          account_type: "employee",
          balance: 100
        },
        {
          id: 2,
          username: "cherry",
          password: "pie",
          email: "cherrypie@email.com",
          img_url: "https://loremflickr.com/640/360",
          account_type: "costumer"
        },
        {
          id: 3,
          username: "full",
          password: "user",
          email: "fulluser@email.com",
          img_url: "http://via.placeholder.com/640x360",
          account_type: "employee",
          balance: 50
        }
      ]);
    });
};
