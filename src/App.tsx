import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './App.styles';

//Components
import Header from './Header';
import Footer from './Footer';
import Todos from './Todos';

//Data

const App = () => {

  const [todos, setTodos] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Yapılacaklar'} count={todos.filter((item: any) => item.done == false).length} />

      {
        todos.length == 0 && <Text style={styles.alert}>Yapılacak bir iş ekleyin</Text>
      }


      <View style={styles.footer}>
        <Todos todos={todos} setTodos={setTodos} />
        <Footer add={todos} onadd={setTodos} placeholder={'Yapılacaklar...'} butonTitle={'Kaydet'} />
      </View>
    </SafeAreaView >
  )
}

export default App;