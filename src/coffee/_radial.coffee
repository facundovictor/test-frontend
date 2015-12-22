# @author facundovictor
################################################

# Languages to be loaded
languages_data = [
    {name: 'brazil', percent: 100}
    {name: 'italy', percent: 87.5}
    {name: 'england', percent: 75}
    {name: 'spain', percent: 75}
]


# renderRadial
#   Given a radial element, its container and a inner image,
#   It renders/reloads the radial inside the container with
#   the given image.
renderRadial = (radial, container, img) ->

    # Render the radial inside the container and gets its size.
    size = radial.diameter(container.clientWidth + 26).render().getSize()

    # Image size factor
    img_size_factor = 0.9

    # New iamge dimension.
    new_image_dimension = size.width / 2 * img_size_factor
    img.style.width = ''+new_image_dimension+'px'

    # set the image visible
    img.style.display = 'block'

    # New image position.
    new_flag_left = size.width / 2 - (new_image_dimension / 2) + 1
    new_flag_top = size.width / 2 - (img.clientHeight / 2) + 1
    img.style.top = ''+new_flag_top+'px'
    img.style.left = ''+new_flag_left+'px'


# Loads a single radial
loadSingleRadial = (elem, index) ->
    img = elem.children[0]
    div = elem.children[1]
    radial = radialProgress(div).value languages_data[index].percent
    renderRadial radial, div, img
    radial


# Loads all radials
loadRadials = ->
    loadSingleRadial elem, index for elem, index in (d3.selectAll '.languages-container .radial')[0]


# Reloads a single radial
reloadSingleRadial = (radial, elem, index) ->
    img = elem.children[0]
    div = elem.children[1]
    div.innerHTML = ''
    renderRadial radial, div, img


# Reloads all radials
reloadRadials = (radials) ->
    reloadSingleRadial radials[index], elem, index for elem, index in (d3.selectAll '.languages-container .radial')[0]
    
