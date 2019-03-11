exports.up = function(knex, Promise) {
  return knex.schema.createTable("customers", table => {
    table.increments();
    table
      .string("username", 128)
      .unique()
      .notNullable();
    table.string("password", 128).notNullable();
    table.string("email", 128).unique();
    table.string("img_url", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("customers");
};
