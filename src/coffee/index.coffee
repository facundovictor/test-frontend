# @author facundovictor
##############################################

# Here is stored the radial elements for redraw purposes
radials = []

window.onload = (evt) ->
    # Configure the Hamburguer button to toggle the menu
    # visibilty on click
    registerToggleMenu()

    # Load all radials and keeps it for redraw them on resize
    radials = loadRadials()

    # Load the map
    loadMap()

window.onresize = (evt) ->
    # Reloads all stored radials
    reloadRadials radials

    # Resizes the map
    reloadMap()
