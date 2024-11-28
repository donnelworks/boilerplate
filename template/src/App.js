import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, stores } from '@stores';
import { SheetProvider } from 'react-native-actions-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@navigations';
import './sheets/sheets.js';

const App = () => {

  global.env = "production"; // production | development
  
  return (
    <Provider store={stores}>
      <PersistGate loading={null} persistor={persistor}>
        <SheetProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SheetProvider>
      </PersistGate>
    </Provider>
  )
}

export default App