exports.up = function(knex, Promise) {
  return knex.schema.createTable('trackReview', function(tbl) {
    tbl.string('reviewId').primary()
    tbl.datetime('dateCreated')
    tbl.datetime('dateModified')
    tbl.integer('rating')
    tbl.string('trackName')
    tbl.text('reviewText')
    tbl.string('userId').unique()
    tbl.foreign('userId').references('userId').inTable('users')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trackReview')
}
