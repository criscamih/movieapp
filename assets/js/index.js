$(document).ready(()=>{
	const OMDB_KEY="4455de9"
	const OMDB_URL="https://www.omdbapi.com/?apikey="+OMDB_KEY+"&"

	$('#form').on('submit',getMovieByName);

	function getMovieByName(event)
	{	event.preventDefault()
		let pelicula=$('#search-text').val()
		getMovie(pelicula)
	}

	getMovie=(pelicula)=>{
		axios.get(OMDB_URL+'s='+pelicula)
			.then((response)=>{
				console.log(response.data.Search)
				let movies=response.data.Search;
				renderMovies(movies)
			})
			.catch((err)=>{
				console.log(err)
			})
	}

	renderMovies=(movies)=>{
		let output='';
		$.each(movies,(index,movie)=>{
			output+=`<div class="col-md-3  mb-3 text-center ">
						<div class="well p-3">
							<img src=${movie.Poster}>
							<h6 class="text-justify" >${movie.Title}</h6>
							<a href="" class="btn btn-primary " onclick="getMovieById('${movie.imdbID}')">
								Ver Detalle
							</a>
						</div>
					</div>`
		})
		$('#movies').html(output)
		
	}


})
