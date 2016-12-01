/**
 * @file
 * Client-side scripts for the block_og_context module.
 */

(function ($) {

/**
 * Provide the summary information for the block_og_context settings vertical tab.
 */
Drupal.behaviors.blockOGContextVisibilitySettingsSummary = {
  attach: function (context) {

    $('fieldset#edit-og-context', context).drupalSetSummary(function (context) {
      return $('select option:selected', context).text();
    });

  }
};

})(jQuery);
