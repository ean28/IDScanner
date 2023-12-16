import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505', // Darker background color
  },
  header: {
    backgroundColor: '#080808', // Darker header background color
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    backgroundColor: '#424242',
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#D2D2D2', // Darker content text color
  },
  footer: {
    backgroundColor: '#080808', // Darker footer background color
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
  tabBarActiveTintColor: '#FCFCFC', // Darker purple color for active tab
  tabBarInactiveTintColor: '#908987', // Inactive tab color (darker gray)
  tabBarBackgroundColor: '#080808', // Tab bar background color
  headerStyle: {
    backgroundColor: '#1E1E1E', // Darker header background color
  },
  headerTintColor: '#fff',
  tabBarStyle: {
    backgroundColor: '#1E1E1E',
  },
});

export default styles;
