exports.seed = function (knex, insert) {
    return knex('ingredient_step_mapping').insert([
        {
            ingredient_id: 1,
            step_id: 1
        },
        {
            ingredient_id: 3,
            step_id: 3
        },
        {
            ingredient_id: 2,
            step_id: 1
        },
        {
            ingredient_id: 4,
            step_id: 2
        },
        {
            ingredient_id: 2,
            step_id: 2
        }
    ])
}