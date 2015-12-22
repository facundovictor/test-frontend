# @author facundovictor
##############################################

# registerToggleMenu:
#   It registers the handler of the menu-btn.
registerToggleMenu = ->

    # Toggle menu visibility
    toggle_menu = (evt) ->
        menu = d3.select '.menu'
        if menu.classed 'hidden'
            menu.classed('hidden',false)
        else
            menu.classed('hidden',true)


    # Get the menu button
    menu_btn = d3.select '.content .menu-btn'

    # Attaches the function to the 'click' event
    menu_btn.on 'click.menu', toggle_menu

