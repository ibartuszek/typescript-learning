import React from "react"
import {Store} from "./Store"
import {IAction, IEpisode} from "./interfaces"

export default function App(): JSX.Element {
  const {state, dispatch} = React.useContext(Store)

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  const fetchDataAction = async () => {
    const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    })
  }
  
  const toggleFavAction = (episode: IEpisode): IAction => {
    let dispatchObj 
    if (isEpisodeInFav(episode)) {
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id)
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      }
    } else {
      dispatchObj = {
        type: "ADD_FAV",
        payload: episode
      }
    }
    return dispatch(dispatchObj)
  }

  const isEpisodeInFav = (episode: IEpisode): boolean => state.favourites.includes(episode)

  console.log(state)

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          Favourite(s): {state.favourites.length}
        </div>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              { 
                episode.image !== null 
                ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} /> 
                : null
              }
              <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {isEpisodeInFav(episode) ? "Unfav" : "Fav"}
                </button>
              </section>
            </section>
          )
        })}
      </section>
    </React.Fragment>
  )
}