// screens/FirstScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Container, FormControl, Select, Text } from 'native-base';

const FirstScreen: React.FC<{ navigation: any }> = ({navigation}) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('patient');

  const handleNext = () => {
    navigation.navigate('SecondScreen');
  };

  return (
    <Container style={styles.container}>
      {/* <Content> */}
        <FormControl isRequired>
          {/* <Picker> */}
            <Select
            //   className=''
              placeholder="Você é o paciente ou responsável?"
              selectedValue={role}
              onValueChange={(value) => setRole(value)}
            >
              <Select.Item label="Paciente" value="patient" />
              <Select.Item label="Responsavel" value="responsible" />
            </Select>
          {/* </Item> */}
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
          {/* <Item picker> */}
            <Select
            //   mode="dropdown"
              placeholder="Select Gender"
              selectedValue={gender}
              onValueChange={(value) => setGender(value)}
            >
              <Select.Item label="Male" value="male" />
              <Select.Item label="Female" value="female" />
              <Select.Item label="Other" value="other" />
            </Select>
          {/* </Item> */}
          <View style={styles.buttonContainer}>
            <Button title="Next" onPress={handleNext} />
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
    marginVertical: 20,
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

export default FirstScreen;
