ServerEvents.recipes(event => {
    global.removedItems.forEach(item => {
        event.remove({ output: item })
        event.remove({ input: item })
    })
})
