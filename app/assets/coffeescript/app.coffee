LP = ((window, document, undefined_) ->

  readmore = (()->
    minheight = 400
    maxHeight = 1600

    toggleLength = (e) ->
      e.preventDefault()
      $this = $(@)
      $content = $($this.data('readmore'))
      if $content.attr('data-state') != 'open'
        expandArticle($content)
        $this.text('Read Less')
      else
        collapsedArticle($content)
        $this.text('Read More')

    expandArticle = ($el) ->
      $el.attr('data-state', 'open')
      $el.animate(
        height: maxHeight
        , 500)

    collapsedArticle = ($el) ->
      $el.attr('data-state', 'closed')
      $el.animate(
        height: minheight
        , 500)

    init: () ->
      $('button[data-readmore]').on 'click', toggleLength
  )()
  lightbox = (()->
    init: () ->
      console.log "I'm a light box"
  )()

  init: () ->
    readmore.init()
    lightbox.init()

) window, document

$ ->
  LP.init()