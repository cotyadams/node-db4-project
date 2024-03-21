exports.seed = function (knex, promise) {
    const date = new Date(Date.now())
    return knex('recipes').insert([
        {
            recipe_name: 'peanut butter and jelly sandwich',
            created_at: (date.toLocaleString())
        },
        {
            recipe_name: 'breakfast sandwich',
            created_at: (date.toLocaleString())
        }
    ])
}