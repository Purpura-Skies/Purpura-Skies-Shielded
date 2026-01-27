LootJS.modifiers((event) => {

    // 1. GLOBAL REDUCTION: Keep the reduction for the "loot explosion" issue
    event.addLootTableModifier(/dragnlivestock:entities\/.*/)
        .modifyLoot(Ingredient.all, (itemStack) => {
            let count = itemStack.getCount();
            itemStack.setCount(Math.max(1, Math.floor(count * 0.5))); 
            return itemStack;
        });

    // 2. GROUP A: Cows, Pigs, Mooshrooms (Common: 30% Chance, Max 2)
    event.addEntityLootModifier([
        'dragnlivestock:o_cow', 
        'dragnlivestock:o_pig', 
        'dragnlivestock:o_mooshroom'
    ])
    .randomChance(0.30) // Increased from 15% to 30%
    .addWeightedLoot([1, 2], [Item.of("hexerei:animal_fat")]); // Drops 1 or 2


    // 3. GROUP B: Sheep and Goats (Increased: 20% Chance, Max 1)
    event.addEntityLootModifier([
        'dragnlivestock:o_sheep', 
        'dragnlivestock:farm_goat'
    ])
    .randomChance(0.20) // Increased from 10% to 20%
    .addLoot("hexerei:animal_fat"); // Defaults to count of 1

});