LootJS.modifiers((event) => {

    event.addLootTableModifier(/dragnlivestock:entities\/.*/)
        .modifyLoot(Ingredient.all, (itemStack) => {
            let count = itemStack.getCount();
            itemStack.setCount(Math.max(1, Math.floor(count * 0.5))); 
            return itemStack;
        });

    event.addEntityLootModifier([
        'dragnlivestock:o_cow', 
        'dragnlivestock:o_pig', 
        'dragnlivestock:o_mooshroom'
    ])
    .randomChance(0.30)
    .pool(pool => {
        pool.addLoot("hexerei:animal_fat");
        pool.applyLootingBonus([1, 2]); 
        pool.limitCount(1, 4); 
    });


    event.addEntityLootModifier([
        'dragnlivestock:o_sheep', 
        'dragnlivestock:farm_goat'
    ])
    .randomChance(0.20)
    .pool(pool => {
        pool.addLoot("hexerei:animal_fat");
        pool.applyLootingBonus([0, 1]); 
        pool.limitCount(1, 2);
    });

});