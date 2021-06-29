var s=document.getElementById("search");
var img=document.getElementsByClassName("pic");
var inf=document.getElementsByClassName("t");

search.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    
    getQuery(s.value)
        .then(function(results){
            console.log("results :",results);
            var movies=results.filter(result=>result.backdrop_path);
            for(let i=0; i<8;i++){
                img[i].src="https://image.tmdb.org/t/p/w500"+movies[i].backdrop_path;
                inf[i].innerHTML=`<strong>${movies[i].original_title}</strong><br><br>
                                      IMDB Rating  : ${movies[i].vote_average}<br>
                                      Release-date : ${movies[i].release_date}`;
            }
        })
        .catch(err=>console.error(err));
  }
}); 

const getQuery=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4be8a61c04069692ec71d744ddc0b88f&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("Error");
    }
    return data.results;
}

const getQueryDetails=async function(query){ 
    const response=await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=4be8a61c04069692ec71d744ddc0b88f&query=${query}`);
    const data=await response.json();
    if(response.status!==200){
        throw new Error("Error");
    }
    return data.results;
}
