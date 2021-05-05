export interface IAction {
  type: string,
  payload: any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {medium: string, original: string}
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  type: string
  url: string
}

export interface IEpisodeProps {
  episodes: IEpisode[],
  toggleFavAction: (episode: IEpisode) => IAction,
  isEpisodeInFav: (episode: IEpisode) => boolean
}

export interface IState {
  episodes: Array<IEpisode>,
  favourites: Array<IEpisode>
}
