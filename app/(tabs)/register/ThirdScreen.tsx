// screens/ThirdScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Container, FormControl, Text } from 'native-base';

const ThirdScreen: React.FC<{ navigation: any }> =({ navigation }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <Container style={styles.container}>
      {/* <Content> */}
        <FormControl>
          <TextInput
            placeholder="Field 1"
            value={text1}
            onChangeText={(text) => setText1(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Field 2"
            value={text2}
            onChangeText={(text) => setText2(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Field 3"
            value={text3}
            onChangeText={(text) => setText3(text)}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Button title="Previous" onPress={handlePrevious} />
          </View>
        </FormControl>
      {/* </Content> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ThirdScreen;
