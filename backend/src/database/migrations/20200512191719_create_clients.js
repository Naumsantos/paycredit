
exports.up = function(knex) {
  return knex.schema.createTable('clients', function (table) {
      table.increments('id', 4).primary();
      table.string('cpf_cnpj').notNullable();
      table.string('name').notNullable();
      table.string('telephone').notNullable();
      table.string('type_account').notNullable();
      table.date('birth_date').notNullable();
      table.string('gender').notNullable();
      table.string('func_account').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};
