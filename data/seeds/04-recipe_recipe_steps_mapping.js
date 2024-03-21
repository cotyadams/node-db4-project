exports.seed = function (knex, insert) {
    return knex('recipe_recipe_steps_mapping').insert([
        {
            recipe_id: 1,
            step_id: 1
        },
        {
            recipe_id: 1,
            step_id: 2
        },
        {
            recipe_id: 2,
            step_id: 3
        }
    ])
}