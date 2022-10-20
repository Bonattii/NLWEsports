import { NavigationContainer } from '@react-navigation/native';
import { AppRoute } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
}
