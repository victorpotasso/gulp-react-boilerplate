export const app = state => state.app;
export const title = state => app(state).title;
export const isLoading = state => app(state).isLoading;
