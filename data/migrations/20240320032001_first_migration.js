/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
        // non referencing tables
        .createTable('recipes', table => {
            table.increments('recipe_id');
            table.string('recipe_name').notNullable();
            table.string('created_at').notNullable();
        })
        .createTable('recipe_steps', table => {
            table.increments('step_id');
            table.integer('step_number').notNullable();
            table.string('step_instructions').notNullable();
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id');
            table.string('ingredient_name').notNullable();
            table.string('ingredient_amount').notNullable();
        })

        // referencing tables
        .createTable('recipe_recipe_steps_mapping', table => {
            table.increments('mapping_id');
            table.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.integer('step_id')
                .notNullable()
                .unsigned()
                .references('step_id')
                .inTable('recipe_steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('ingredient_step_mapping', table => {
            table.increments('mapping_id');
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('recipe_steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
    })
        
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('ingredient_step_mapping')
    .dropTableIfExists('amount_ingredient_mapping')
    .dropTableIfExists('recipe_recipe_steps_mapping')
    .dropTableIfExists('amounts')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipes')
};
