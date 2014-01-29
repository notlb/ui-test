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
      return {
        init: function() {
          return console.log("I'm a light box");
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
