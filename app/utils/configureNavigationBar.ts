import * as NavigationBar from 'expo-navigation-bar';

export default async function configureNavigationBar() {
  await NavigationBar.setPositionAsync('absolute');
  await NavigationBar.setBackgroundColorAsync('#363636');
  await NavigationBar.setButtonStyleAsync('light');
  await NavigationBar.setBorderColorAsync('#363636');
}
