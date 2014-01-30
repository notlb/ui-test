(function() {
  var LP;

  LP = (function(window, document, undefined_) {
    var lightbox, readmore;

    readmore = (function() {
      var collapsedArticle, expandArticle, maxHeight, minheight, toggleLength;

      minheight = 400;
      maxHeight = 1600;
      toggleLength = function(e) {
        var $content, $this;

        e.preventDefault();
        $this = $(this);
        $content = $($this.data('readmore'));
        if ($content.attr('data-state') !== 'open') {
          expandArticle($content);
          return $this.text('Read Less');
        } else {
          collapsedArticle($content);
          return $this.text('Read More');
        }
      };
      expandArticle = function($el) {
        $el.attr('data-state', 'open');
        return $el.animate({
          height: maxHeight
        }, 500);
      };
      collapsedArticle = function($el) {
        $el.attr('data-state', 'closed');
        return $el.animate({
          height: minheight
        }, 500);
      };
      return {
        init: function() {
          return $('button[data-readmore]').on('click', toggleLength);
        }
      };
    })();
    lightbox = (function() {
      var buildLightbox, closeLightBox, openLightBox;

      buildLightbox = function($image) {
        var close, container, doppelganger;

        doppelganger = new Image();
        doppelganger.src = $image.attr('src');
        $(doppelganger).addClass('lightboxImage').css({
          marginLeft: -(doppelganger.width + 20) / 2
        });
        container = document.createElement('div');
        close = document.createElement('div');
        $(close).addClass('close').text('×').css({
          marginLeft: (doppelganger.width - 34) / 2
        });
        return $(container).addClass('lightbox').append(close, doppelganger);
      };
      openLightBox = function(e) {
        var $image;

        $image = $(e.currentTarget);
        lightbox = buildLightbox($image);
        return $('body').append(lightbox);
      };
      closeLightBox = function(e) {
        e.preventDefault;
        return $(this).parent().remove();
      };
      return {
        init: function() {
          $('.image img').on('click', openLightBox);
          return $(document).on('click', ".lightbox .close", closeLightBox);
        }
      };
    })();
    return {
      init: function() {
        readmore.init();
        return lightbox.init();
      }
    };
  })(window, document);

  $(function() {
    return LP.init();
  });

}).call(this);
