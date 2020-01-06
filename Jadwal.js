$.ajax({
  url : 'http://api.football-data.org/v2/matches',
  headers: {
       'X-Auth-Token' :'979e5056bb8242dca5ac781bee9ac19e' },
    success :main =>{
      const dftrMain = main.matches
      let mboh = ''
      dftrMain.forEach(b=>{
        mboh +=jadwalHarini(b)
      })
      $('.scaduleKlas').html(mboh)
      console.log(dftrMain);

    },
    error:(e)=>{
      console.log("Maff tidak bisa",e);
    }

})

function jadwalHarini(b){
  return`  <div class="card" align="center" style="width: 24rem;">
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${b.homeTeam.name} vs ${b.awayTeam.name}</li>
        </ul>
      </div>
    </div>`
}
