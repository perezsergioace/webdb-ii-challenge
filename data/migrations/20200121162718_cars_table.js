
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();

      tbl.string("vin", 17).index();

      tbl.string("make", 255).index();

      tbl.string("model", 255).index();

      tbl.integer("mileage");

      tbl.string("transmissionType", 255).index();

      tbl.string("status", 255).index();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
