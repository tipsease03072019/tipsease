exports.up = function(knex, Promise) {
  return knex.schema.createTable("employees", table => {
    table.increments();
    table
      .string("username", 128)
      .unique()
      .notNullable();
    table.string("password", 128).notNullable();
    table.string("email", 128).unique();
    table.string("img_url", 128);
    table.string("account_type", 128).notNullable();
    table.timestamp(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employees");
};
