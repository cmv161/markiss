import React from 'react';

const {
  Provider: StoreServiceProvider,
  Consumer: StoreServiceConsumer
}= React.createContext();

export {
  StoreServiceConsumer,
  StoreServiceProvider
}


// пробрасывает контекст сквозь компоненты
