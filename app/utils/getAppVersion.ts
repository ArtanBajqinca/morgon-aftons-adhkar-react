import Constants from 'expo-constants';

export default function getAppVersion() {
  return Constants.expoConfig?.version || 'Unknown';
}
