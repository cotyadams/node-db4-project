exports.seed = function (knex, isnert) {
    return knex('ingredients').insert([
        {
            ingredient_name: 'peanut butter',
            ingredient_amount: '2 tbsp'
        },
        {
            ingredient_name: 'bread',
            ingredient_amount: '1 slice'
        },
        {
            ingredient_name: 'eggs',
            ingredient_amount: '2'
        },
        {
            ingredient_name: 'jelly',
            ingredient_amount: '2 tbsp'
        }
    ])
}