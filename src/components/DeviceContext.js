
import React from 'react';

const DeviceContext = React.createContext(false);
  
  export const UserProvider = DeviceContext.Provider
  export const UserConsumer = DeviceContext.Consumer

  export default DeviceContext
