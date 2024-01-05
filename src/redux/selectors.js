export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filterWord;

export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const selectIsRefreshing = state => state.user.isRefreshing;
