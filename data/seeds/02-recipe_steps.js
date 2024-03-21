exports.seed = function (knex, insert) {
    return knex('recipe_steps').insert([
        {
            step_number: 1,
            step_instructions: 'spread pb onto bread'
        },
        {
            step_number: 2,
            step_instructions: 'spread jelly on bread'
        },
        {
            step_number: 1,
            step_instructions: 'cook eggs'
        }
   ])
}