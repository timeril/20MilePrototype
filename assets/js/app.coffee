$ ->

	$('#hw-nav a').on 'click', (event) ->
		event.preventDefault()
		$('#hw-nav').removeClass().addClass('span12').addClass($(@).attr('href'))
		$('#hw-nav').next().removeClass().addClass('span12').addClass($(@).attr('href'))