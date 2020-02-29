import { NetInfo } from 'react-native';

class Network {
  public static getStatus(): Promise<boolean> {
    return NetInfo.isConnected.fetch((isConnected) => {
      return Promise.resolve(isConnected);
    });
  }
}

export default Network;