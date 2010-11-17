// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function () {
    $("li.clickdown > a").live('click', function() {
        $(this).parent().toggleClass("active");
        return false;
    });
    /*
     * uncomment this if you want the menu to disappear on loss of focus
    $("li.clickdown").live('mouseleave', function() { 
        $(this).removeClass("active");
        return false;
    });
    */
    $("body").live('click', function() {
        $("li.clickdown.active").removeClass("active");
    });
    $("a[href=#]").live('click', function() { return false; });
});

window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};
 
// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){
    log('document.write(): ',arguments);
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments); 
  };
})(document);

