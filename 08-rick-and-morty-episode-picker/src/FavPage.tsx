import React from 'react'
import {Store} from "./Store"
import {IEpisodeProps} from "./interfaces"
import {toggleFavAction, isEpisodeInFav} from "./Action"

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"))

export default function FavPage(): JSX.Element {
  const {state, dispatch} = React.useContext(Store)

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction,
    isEpisodeInFav,
    favourites: state.favourites
  }

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div className="episode-layout">
          <EpisodeList {...props}/>
        </div>
      </React.Suspense>
    </React.Fragment>
  )
}
