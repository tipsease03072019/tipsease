exports.up = function(knex, Promise) {
  return knex.schema.createTable("transactions", table => {
    table.increments();
    table
      .integer("users_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("user_balance")
      .unsigned()
      .notNullable()
      .references("balance")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("tip").defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("transactions");
};
