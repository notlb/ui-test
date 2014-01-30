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

    buildLightbox = ($image) ->
      doppelganger = new Image()
      doppelganger.src = $image.attr('src')
      $(doppelganger).addClass('lightboxImage')
      .css marginLeft: -(doppelganger.width + 20)/2

      container = document.createElement('div')

      close = document.createElement('div')
      $(close).addClass('close').text('×')
      .css marginLeft: (doppelganger.width - 34)/2

      $(container).addClass('lightbox').append(close, doppelganger)

    openLightBox = (e) ->
      $image = $(e.currentTarget)
      lightbox = buildLightbox($image)
      $('body').append(lightbox)

    closeLightBox = (e) ->
      e.preventDefault
      $(@).parent().remove()

    init: () ->
      $('.image img').on 'click', openLightBox
      # 86'd the key press controls in favor of an 'x'. The metaphor is well known.
      $(document).on 'click', ".lightbox .close", closeLightBox
  )()

  init: () ->
    readmore.init()
    lightbox.init()

) window, document

$ ->
  LP.init()