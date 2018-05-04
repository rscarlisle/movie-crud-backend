
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', table => {
    table.string('id')
    table.string('title').notNullable().defaultsTo('')
    table.string('director').notNullable().defaultsTo('')
    table.integer('year').notNullable().defaultsTo(3011)
    table.string('rating').defaultsTo(parseInt(Math.random() * 1000) / 10)
    table.string('url')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
};
