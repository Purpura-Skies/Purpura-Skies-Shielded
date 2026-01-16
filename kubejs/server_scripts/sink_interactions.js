BlockEvents.rightClicked(event => {
  const kitchen_sinks = ['candlelight:basalt_kitchen_sink',
    'candlelight:bamboo_kitchen_sink',
    'candlelight:mud_kitchen_sink',
    'candlelight:end_kitchen_sink',
    'candlelight:granite_kitchen_sink',
    'candlelight:sandstone_kitchen_sink',
    'candlelight:deepslate_kitchen_sink',
    'candlelight:cobblestone_kitchen_sink',
    'candlelight:stone_bricks_kitchen_sink',
    'candlelight:red_nether_bricks_kitchen_sink',
    'candlelight:quartz_kitchen_sink',
    'bakery:kitchen_sink'
    ]

  if (event.item.id == 'minecraft:glass_bottle' && kitchen_sinks.includes(event.block.id)) {
    
    
    if (event.block.properties.filled == 'true') {
        event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'minecraft:item.bottle.fill', 'blocks', 1.0, 1.0)
    event.block.set(event.block.id, {filled: "false", facing: event.block.properties.facing})
    event.player.swing()
    event.item.count--
    event.player.give('legendarysurvivaloverhaul:purified_water_bottle')
    event.cancel()
    }
    else {
        event.player.displayClientMessage("The sink is empty!", true)
        event.cancel()
    }
    }
})


