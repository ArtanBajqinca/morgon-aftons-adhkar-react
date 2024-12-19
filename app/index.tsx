import '../gesture-handler';
import { Redirect } from 'expo-router';

export default function RedirectToStart() {
  return <Redirect href="/views/start-screen" />;
}
