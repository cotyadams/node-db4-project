const express = require('express');
const {getRecipe, getSteps} = require('./recipe-model.js')


const router = express.Router()


router.get('/:id', async (req, res, next) => {
    const recipe = await getRecipe(req.params.id)
    const ingredientsObj = {}
    recipe.map((node) => {
        if (!ingredientsObj[node.step_id]) {
            ingredientsObj[node.step_id] = []
            ingredientsObj[node.step_id].push({
                ingredient_name: node.ingredient_name,
                ingredient_amount: node.ingredient_amount
            })
        } else {
            ingredientsObj[node.step_id].push({
                ingredient_name: node.ingredient_name,
                ingredient_amount: node.ingredient_amount
            })
        }
        
    })


    const recipeObj = {
        recipe_id: recipe[0].recipe_id,
        recipe_name: recipe[0].recipe_name,
        created_at: recipe[0].created_at,
    }
    const stepsArray = [];
    recipe.map((node, i) => {
            const step = {
                step_number: node.step_number,
                step_instructions: node.step_instructions,
                step_id: node.step_id,
                ingredients: ingredientsObj[node.step_id]
            }
        stepsArray.push(step)
    })
    recipeObj.steps = stepsArray
    res.status(200).json(recipeObj)
})
module.exports = router;