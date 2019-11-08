
        /// For the Album Page, use the https://deezerdevs-deezer.p.rapidapi.com/album/{id} API.
        //You can get the album ID from the search API es.: json.data[0].album.id
        
        function loadAlbum(searchAlbum) {
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?limit=6&q=" + searchAlbum, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "90a4cce2e8msh71a30f294ae0070p198be9jsnb52964849910"
                }
            })
                .then(response => response.json())
                .then(albumsResponse => {
                    console.log(albumsResponse);
                    var div = `
                    <div class="row">`

                    let albumId = albumsResponse.data;
                    albumId.forEach(albums => {

                        div += `
                        <div class="card">
    <img src="${albums.album.cover}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-white text-center">${albums.title}</h5>
      <p class="card-text text-white text-center">${albums.id}</p>
      </div>
  </div>`
 document.querySelector("#albumsPage").innerHTML += div + "</div>"
                    });
                });
                                    }
                                

  // For the Artist page, use the https://deezerdevs-deezer.p.rapidapi.com/artist/{id} API
 // You can get the artist ID from the search API es.: json.data[0].artist.id                                  
                                    
function getArtistInfo (searchArtist){
    fetch ("https://deezerdevs-deezer.p.rapidapi.com/search?limit=6&q="+ searchArtist , {
        "method": "GET",
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "b0f442ef2fmsh48d14fda6e39b49p1ce2f7jsnf2274d03026e"
        }
    }) 
    .then(response => response.json())
                .then(responseArtist => {
                    console.log(responseArtist);
                    var div = `
          <h3> ${searchArtist}</h3>
          <hr>
          <div class ='row'>`

                    let artistId = responseArtist.data;
                    artistId.forEach(artists => {

                        div += `
            <div class="col-sm-4 col-md-3 col-lg-1">
            <span>${artists.id}</span>
            </div>
                  `
 document.querySelector("#artistPage").innerHTML += div + "</div>"
                    });
                });
                                    }


 window.onload = () => {
     loadAlbum("eminem");
 }
