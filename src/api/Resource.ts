import LoadState from "./LoadState"

export enum ResourceLoadState {
    Loading,
    Failure,
    Loaded,
}

type Resource<T> = {
    state: ResourceLoadState,
    value: T
}

export default Resource;