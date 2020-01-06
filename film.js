  // $('#cariFilmTombol').on('click', function(){
function klikCari() {
  $.ajax({
    url:'http://www.omdbapi.com/?apikey=4c23989d&s=' + $('.cariFilminput').val(),
    success:film=>{
      const bioskop = film.Search;
      //bioskop.forEach(m=>console.log(m.Year))
      // console.log(bioskop);
      let item = '';
      bioskop.forEach(m =>{
        item+= daftarFilm(m)
      })
      $('.listFilm').html(item)

      $('.modal-detail-buton').on('click', function(){
        $.ajax({
          url:"http://www.omdbapi.com/?apikey=4c23989d&i=" +$(this).data('imdbidnya'),
          success: mod =>{
            const filmDetail = detailFilm(mod)
              $('.modal-body').html(filmDetail)
          },
          error: (e)=>{
            console.log('error');
          }
        })
      })

    },
    error:(salah)=>{
      console.log('maaf ada yang gagal', salah);
    }
  });

}

 // });




function daftarFilm(m) {
  return `<div class="card" style="width: 18rem;">
        <img src="${m.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">judul : ${m.Title}</h5>
            <p class="card-text">genre: ${m.Type}</p>
            <a href="#"  modal-detail-buton  data-toggle="modal" data-target="#movieDetail" data-imdbidnya="${m.imdbID}" class="btn btn-primary modal-detail-buton">Details</a>
          </div>
        </div>`;
}

function detailFilm(mod) {
  return `<div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <img src="${mod.Poster}" alt="" class="container-fluid">
        </div>
        <div class="col-md">
          <ul class="list-group">
            <li class="list-group-item">${mod.Title}</li>
            <li class="list-group-item"><strong>sutradara ${mod.Director}</strong></li>
            <li class="list-group-item">tanggal rilis : ${mod.Released}</li>
            <li class="list-group-item">${mod.Plot}</li>
            <li class="list-group-item">daftar pemain :${mod.Actors}</li>
          </ul>
        </div>
      </div>
    </div>`
}
