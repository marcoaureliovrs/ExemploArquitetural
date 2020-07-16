import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { Root } from '@codler/native-base';
import { PersistGate } from 'redux-persist/integration/react';
import { MenuProvider } from 'react-native-popup-menu';
import Router from './src/router';
import { store, persistor } from './src/store';

const App = (prop) => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MenuProvider>
          <Root>
            <Router>
              <SafeAreaView />
            </Router>
          </Root>
        </MenuProvider>
      </PersistGate>
    </Provider>
  )
};

export default App;