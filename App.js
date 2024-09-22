// import { StyleSheet, View } from 'react-native'
// import React from 'react'
// import Navigation from './Screen/AuthNavigation'




// export default function App() {
//   return (
//    <Navigation/>
//   )
// }

// const styles = StyleSheet.create({})

import React from 'react';
import { CartProvider } from './Screen/MainScreen/CartContext';
import Navigation from './Screen/AuthNavigation'
const App = () => {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
};

export default App;
