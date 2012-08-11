(function ($) {
  Drupal.behaviors.zerofourzero = {
    attach: function (context, settings) {


      // ------------------
      // Toggling class on long text fields with summary to indicate
      // if the summary is visible or not
      // ------------------

      function checkIfSummaryIsVisible() {
        $('.node-form .field-type-text-with-summary').each(function(){
          var summary = this;
          setTimeout(function() {
            if($(summary).find('.text-summary-wrapper').is(':visible')) {
              $(summary).addClass('summary-visible');
            } else {
              $(summary).removeClass('summary-visible');
            }
          }, 10);
        });
      }

      $('.link-edit-summary').click(function(){
        checkIfSummaryIsVisible();
      });
      checkIfSummaryIsVisible();


    }
  };
}(jQuery));