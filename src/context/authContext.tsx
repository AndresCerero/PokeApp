import React, {useState, createContext} from 'react';

export const AuthContext = createContext({
  auth: undefined,
  login: userData => {},
  logOut: () => {},
  favorites: [],
  addFavorite: id => {},
  removeFavorite: id => {},
  isFavorited: id => {},
});

export function AuthProvider(props) {
  const {children} = props;
  const [auth, setAuth] = useState(undefined);
  const [favorites, setFavorites] = useState([]);

  const login = userData => {
    setAuth(userData);
  };

  const logOut = () => {
    setAuth(undefined);
  };

  const addFavorite = id => {
    setFavorites(prevFavorites => [...prevFavorites, id]);
  };

  const removeFavorite = id => {
    setFavorites(prevFavorites => prevFavorites.filter(favId => favId !== id));
  };

  const isFavorited = id => {
    return favorites.includes(id);
  };

  const valueContext = {
    auth,
    login,
    logOut,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorited,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
