
// Make sure the back button works:
$(function(){
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "selected" to any matching nav link.
    $(window).hashchange( function(){
        var hash = location.hash;
        var pageDiv = document.location.hash.substr(4);
        showPivot(pageDiv);
    })

    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $(window).hashchange();
});
      
