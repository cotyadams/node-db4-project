const db = require('../data/db-config.js');



async function getRecipe(id) {
    return await db('recipes as r')
        .leftJoin('recipe_recipe_steps_mapping as rrsm', 'rrsm.recipe_id', 'r.recipe_id')
        .leftJoin('recipe_steps as rs', 'rs.step_id', 'rrsm.step_id')
        .leftJoin('ingredient_step_mapping as ism', 'ism.step_id', 'rs.step_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'ism.ingredient_id')
        .where('r.recipe_id', id)
        .select('r.*', 'rs.step_number', 'rs.step_instructions', 'rs.step_id', 'i.ingredient_name', 'i.ingredient_amount');
}

module.exports = {
    getRecipe
}