import {IAction, IEpisode, IState} from "./interfaces"

export const fetchDataAction = async (dispatch: any) => {
  const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode): IAction => {
  let dispatchObj 
  if (isEpisodeInFav(state, episode)) {
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

export const isEpisodeInFav = (state: IState, episode: IEpisode): boolean => state.favourites.includes(episode)