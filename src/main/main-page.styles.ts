import {StyleSheet} from 'react-native';

export function useStyles() {
  return StyleSheet.create({
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f7f7f7',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: '500',
      color: '#777',
      marginBottom: 30,
    },
    viewContainer: {
      width: '80%',
      alignItems: 'center',
    },
    textInput: {
      width: '100%',
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ddd',
      backgroundColor: '#fff',
    },
    orText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#555',
      marginVertical: 15,
    },
  });
}
