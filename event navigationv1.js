<div id="boxcast-widget-YOUR_BOXCAST_ID"><script type="text/javascript"> var s = document.createElement("script"); var h = (("https:" == document.location.protocol) ? "https:" : "http:"); s.src = h + "//boxcast.com/widget/YOUR_BOXCAST_ID.js?title=1&description=1&history=1"; document.getElementsByTagName("head")[0].appendChild(s); </script></div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" type="text/javascript"></script>

<a href="" id="boxcast-prev" hidden> [<- Newer] </a>
<a href="" id="boxcast-all"> [All Events] </a>
<a href="" id="boxcast-next"> [Older ->] </a><br>
<form action="" id="search-form">
  Search for events: <input id="event-search" type="text"/>
  <input type="submit" value="Search"/>
</form> 

<script type="text/javascript">
$(document).ready(function() {
  
  $("#boxcast-next").removeAttr("disabled");
   $("#boxcast-next").click(function(event) {
    event.preventDefault();    
     var prev = $("ul.history li:not(.hidden)").last();
     var next = prev.next();
      for(var i = 0; i < 10; i++) {
        prev.addClass("hidden"); 
        next.removeClass("hidden");
        prev = prev.prev();
        next = next.next();
     if(!$("ul.history").children().last().hasClass('hidden')){
       $("#boxcast-next").hide();}    
       $("#boxcast-prev").show();
    }
  });
    $("#boxcast-prev").click(function(event) { 
      event.preventDefault();          
       var next = $("ul.history li:not(.hidden)").first();
       var prev = next.prev();
       for(var i = 0; i < 10; i++) {
        prev.removeClass("hidden"); 
        next.addClass("hidden");
        prev = prev.prev();
        next = next.next();
      if(!$("ul.history").children().first().hasClass('hidden')){     
        $("#boxcast-prev").hide();}
        $("#boxcast-next").show();
      }
    });
    $("#boxcast-all").click(function(event) {
      event.preventDefault();
      $("ul.history li.hidden").removeClass("hidden");
      $("#boxcast-prev").hide();
      $("#boxcast-next").hide();
      $("#boxcast-all").hide();
    });
   $("#search-form").submit(function(e){
      $("ul.history li:not(.hidden)").addClass("hidden");
      var searchExp = new RegExp($("#event-search").val(),"gi");
      $("a").filter(function() {
         return this.innerText.match(searchExp);
      }).parent().removeClass("hidden");    
      $("#boxcast-prev").hide();
      $("#boxcast-next").hide();
      $("#boxcast-all").show();
      return false;
    });
});
</script>