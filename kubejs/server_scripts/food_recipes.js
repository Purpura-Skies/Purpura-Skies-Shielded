ServerEvents.recipes(event => {

//removing FTB smart filter recipe
event.remove({ output: 'ftbfiltersystem:smart_filter' })

//removing tides delight cheese and cheese curds recipe in favor of recipe using dragn's livestock cheese wheel
event.remove([{ type: 'minecraft:smelting', output: 'tidesdelight:cheese' }])
event.remove([{ type: 'farmersdelight:cutting', input: 'vintagedelight:cheese_wheel' }])

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { item: 'dragnlivestock:cheese' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'vintagedelight:cheese_slice', count: 4 }
  ]
})
// replacing tides delight cheese in recipes
event.replaceInput(
  { input: 'tidesdelight:cheese' }, // Arg 1: the filter
  'tidesdelight:cheese',            // Arg 2: the item to replace
  '#forge:cheese'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

//removing duplicate juice recipes from legendary survival overhaul
//event.remove({ output: 'legendarysurvivaloverhaul:melon_juice' })

//replacing recipes that take water with purified water
const minecraftWater = Item.of('minecraft:potion', '{Potion:"minecraft:water"}')

event.replaceInput(
  { input: minecraftWater}, // Arg 1: the filter
  minecraftWater,            // Arg 2: the item to replace
  '#forge:water'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

//replace fruitsdelight juices since the above didn't work
event.remove({ output: 'fruitsdelight:orange_juice' })
event.remove({ output: 'fruitsdelight:lemon_juice' })
event.remove({ output: 'fruitsdelight:pear_juice' })

event.shaped(
  Item.of('fruitsdelight:orange_juice', 1), // arg 1: output
  [
    'ABC',
    'C  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'legendarysurvivaloverhaul:purified_water_bottle',
    B: 'minecraft:sugar',  //arg 3: the mapping object
    C: 'fruitsdelight:orange'
  }
)

event.shaped(
  Item.of('fruitsdelight:lemon_juice', 1), // arg 1: output
  [
    'ABC',
    'C  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'legendarysurvivaloverhaul:purified_water_bottle',
    B: 'minecraft:sugar',  //arg 3: the mapping object
    C: 'fruitsdelight:lemon'
  }
)
event.shaped(
  Item.of('fruitsdelight:pear_juice', 1), // arg 1: output
  [
    'ABC',
    'C  ', // arg 2: the shape (array of strings)
    '   '
  ],
  {
    A: 'legendarysurvivaloverhaul:purified_water_bottle',
    B: 'minecraft:sugar',  //arg 3: the mapping object
    C: 'fruitsdelight:pear'
  }
)

//replace medieval embroidery salt with vintage delight salt
event.replaceInput(
  { input: 'medievalembroidery:salt'}, // Arg 1: the filter
  'medievalembroidery:salt',            // Arg 2: the item to replace
  'vintagedelight:salt_dust'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

//add medieval embroidery food recipes to farmer's delight cooking pot and cutting board and remove old ones
event.remove({ output: 'medievalembroidery:seasoned_elk' })
event.remove({ output: 'medievalembroidery:seasoned_yak' })
event.remove({ output: 'medievalembroidery:seasoned_direwolf' })
event.remove({ output: 'medievalembroidery:seasoned_blewit' })
event.remove({ output: 'medievalembroidery:seasoned_king' })
event.remove({ output: 'medievalembroidery:seasoned_honey' })
event.remove({ output: 'medievalembroidery:seasoned_oyster' })
event.remove({ output: 'medievalembroidery:seasoned_porcini' })
event.remove({ output: 'medievalembroidery:seasoned_woods_chicken' })
event.remove({ output: 'medievalembroidery:seasoned_yellowfoot' })
event.remove({ output: 'medievalembroidery:seasoned_matsutake' })

event.recipes.farmersdelight.cooking(
      ['medievalembroidery:elk','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_elk', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:yak','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_yak', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:direwolf','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_direwolf', // output
      1, // exp
      200 // cookTime
  )

event.recipes.farmersdelight.cooking(
      ['medievalembroidery:blewit','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_blewit', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:honey','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_honey', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:king','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_king', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:oyster','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_oyster', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:matsutake','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_matsutake', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:porcini','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_porcini', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:yellowfoot','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_yellowfoot', // output
      1, // exp
      200 // cookTime
  )
event.recipes.farmersdelight.cooking(
      ['medievalembroidery:woods_chicken','vintagedelight:salt_dust','#forge:herbs'],
      'medievalembroidery:seasoned_woods_chicken', // output
      1, // exp
      200 // cookTime
  )


//replacing farmers delight cut recipes
event.remove([{ type: 'farmersdelight:cutting', input: 'farmersdelight:minced_beef' }])
event.remove([{ type: 'farmersdelight:cutting', input: 'farmersdelight:chicken_cuts' }])
event.remove([{ type: 'farmersdelight:cutting', input: 'farmersdelight:bacon' }])
event.remove([{ type: 'farmersdelight:cutting', input: 'farmersdelight:mutton_chops' }])
event.remove([{ type: 'farmersdelight:cutting', input: 'farmersdelight:cooked_mutton_chops' }])

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'forge:raw_beef' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:minced_beef', count: 2 }
  ]
})

event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'forge:raw_beef' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:minced_beef', count: 2 }
  ]
})
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'forge:raw_chicken' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:chicken_cuts', count: 2 },
    {item: 'minecraft:bonemeal', count: 1}
  ]
})
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'dragnlivestock:makes_pork_jerky' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:bacon', count: 2 }
  ]
})
event.custom({
  type: 'farmersdelight:cutting',
  ingredients: [
    { tag: 'dragnlivestock:makes_mutton_jerky' }
  ],
  tool: { tag: 'forge:tools/knives' },
  result: [
    { item: 'farmersdelight:mutton_chops', count: 2 }
  ]
})


// Replace delightful animal fat with hexerei animal fat
event.replaceInput(
  { input: 'delightful:animal_fat' }, // Arg 1: the filter
  'delightful:animal_fat',            // Arg 2: the item to replace
  'hexerei:animal_fat'         // Arg 3: the item to replace it with
  // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
)

event.remove({ input: 'hexerei:animal_fat', output: 'minecraft:candle' })

  console.log('Hello! The recipe event has fired!')
})