export interface SliceStateBase {
    loadingStatus?: 'success' | 'idle' | 'failed';
    lastFetchedTime?: number
}