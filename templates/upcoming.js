!function(){function a(a,e){return a.write('<div class="parallax upcoming"style="background-image: url(\'').reference(e.get(["parallaxPhoto"],!1),e,"h").write("'); min-height: ").reference(e.get(["parallaxHeight"],!1),e,"h").write('px"></div><div id="upcoming" class="upcoming container body section" data-spy="scroll" data-target="#scrollspy-nav"><h1>').reference(e.get(["title"],!1),e,"h").write('</h1><div class="row"><div class="fb-container col-md-6 offset-md-3 text-center"><div class="fb-page" data-href="https://www.facebook.com/dalgazul/" data-tabs="events" data-width="500"data-height="1000"data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"data-show-facepile="false"><blockquote cite="https://www.facebook.com/dalgazul/" class="fb-xfbml-parse-ignore"><ahref="https://www.facebook.com/dalgazul/">Dalgazul</a></blockquote></div></div></div></div>')}return dust.register("upcoming",a),a}();