// https://github.com/BorisMoore/jsrender

var myTmpl = $.templates("<li><b>{{:title}}</b> ({{:release_date}})</li>");

/* Compile the markup as a named template */
//var tmpl = $.template("movieTemplate", markup);

//var tmpl = $.templates("#movieList", markup);


var url = '//api.themoviedb.org/3/',
  mode = 'search/movie?query=',
  input,
  movieName,
  key = '&api_key=3cd0dd2699b27757b055a6c0ecae86b7';

 $("form").submit(function() {
  var input = $('#movie').val(),
    movieName = encodeURI(input);
  $.ajax({
    type: 'GET',
    url: url + mode + input + key,
    async: false,
    jsonpCallback: 'Callback',
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      console.dir(data.results);

      var movies = data.results;
      
      var html = myTmpl.render(movies);

      $("#movieList").html(html);

      /* Render the template items for each movie
      and insert the template items into the "movieList" */
     // $.tmpl("movieTemplate", movies).appendTo("#movieList");



    },
    error: function(e) {
      console.log(e.message);
    }
  });

  
  return false;
  
});
//});