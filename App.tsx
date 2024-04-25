import * as React from 'react';
import StartNavigator from './navigation/StartNavigator';
// import {Provider} from 'react-redux';
// import Store from './store/configureStore';
// import {persistStore} from 'redux-persist';
// import {PersistGate} from 'redux-persist/es/integration/react';
// import SplashScreen from './components/demarrage/SplashScreen';

const App = () => {
  // let persistor = persistStore(Store);
  return (
    // <Provider store={Store}>
    //   <PersistGate loading={<SplashScreen />} persistor={persistor}>
    <StartNavigator />
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
