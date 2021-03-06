exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table
      .string("uid", 35)
      .unique()
      .notNullable();
    table
      .string("username", 128)
      .unique()
      .notNullable();
    table.string("img_url", 128);
    table.string("account_type", 128).notNullable();
    table.integer("balance").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
