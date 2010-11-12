// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function () {
    $("li.clickdown > a").live('click', function() {
        $(this).parent().toggleClass("active");
        return false;
    });
    $("li.clickdown").live('mouseleave', function() { 
        //$(this).removeClass("active");
        return false;
    });
    $("body").live('click', function() {
        $("li.clickdown.active").removeClass("active");
    });
});
