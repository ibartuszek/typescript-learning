import React from 'react'
import {IEpisode} from "./interfaces"

export default function EpisodeList(props: any): Array<JSX.Element> {
  const {episodes, toggleFavAction, isEpisodeInFav, store} = props
  const {state, dispatch} = store

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        { 
          episode.image !== null 
          ? <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} /> 
          : null
        }
        <div>{episode.name}</div>
        <section style={{display: "flex", justifyContent: "space-between"}}>
          <div>Season: {episode.season} Number: {episode.number}</div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {isEpisodeInFav(state, episode) ? "Unfav" : "Fav"}
          </button>
        </section>
      </section>
    )
  })
}
