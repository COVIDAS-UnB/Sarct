import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage, ToastAndroid, Platform, AlertIOS } from 'react-native';

import api from '~/services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storagedToken = await AsyncStorage.getItem('@AquiGel:token');
      const storagedUser = await AsyncStorage.getItem('@AquiGel:user');

      if (storagedToken && storagedUser) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  async function signIn(data, reset) {
    setLoading(true);
    try {
      const response = await api.post('sessions', data);
      const { token, ...profile } = response.data;
      setUser(profile);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('@AquiGel:token', token);
      await AsyncStorage.setItem('@AquiGel:user', JSON.stringify(profile));

      reset();
    } catch (err) {
      const msg =
        'Parece que ocorreu algum problema durante o login, verifique seus dados';
      if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
      } else {
        AlertIOS.alert(msg);
      }
    }
    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
