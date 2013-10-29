
// Make sure the back button works:
$(function(){
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "selected" to any matching nav link.
    $(window).hashchange( function(){

        var forceReload = getPageAttribute("reload");
        if (!(typeof forceReload === "undefined")) {
            var map = getPageAttributes();
            delete map["reload"];
            var newHash = getHashForMap(map);
            document.location.hash = newHash;
            document.location.reload(true)
            return;
        }

        var pageDiv = getPageAttribute("p");
        showPivot(pageDiv);
    })

    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $(window).hashchange();
});
      
