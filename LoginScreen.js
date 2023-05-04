import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import googleLogo from './Logos/GoogleL.png';
import appleLogo from './Logos/AppleL.png';

export default function LoginScreen() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const onFocus = (input) => {
    if (input === 'email') {
      setEmailFocused(true);
    } else if (input === 'password') {
      setPasswordFocused(true);
    }
  };

  const onBlur = (input) => {
    if (input === 'email') {
      setEmailFocused(false);
    } else if (input === 'password') {
      setPasswordFocused(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DrugE</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor={emailFocused ? '#00000000' : '#003f5c'}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => onFocus('email')}
          onBlur={() => onBlur('email')}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor={passwordFocused ? '#00000000' : '#003f5c'}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => onFocus('password')}
          onBlur={() => onBlur('password')}
        />
      </View>
      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} /> 
      </View>
      <TouchableOpacity style={styles.googleBtn}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={googleLogo} style={styles.googleLogo} />
          <Text style={styles.googleText}>Continue with Google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appleBtn}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={appleLogo} style={styles.appleLogo} />
          <Text style={styles.appleText}>Continue with Apple</Text>
        </View>  
      </TouchableOpacity>
      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', textAlignVertical: 'center' }}>
        <Text style={styles.dontHaveAccountText}>Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text  style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        </Text>
        
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    width: 350,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  inputText: {
    width: '100%', 
    height: '100%',
    color: 'black',
    fontSize: 16, 
  },
  loginBtn: {
    width: 350,
    backgroundColor: '#fb5b5a',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  forgotPasswordContainer: {
    width: 350,
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#003f5c',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    color: '#a1a1a1',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#a1a1a1',
    marginHorizontal: 10,
    opacity: 1,
    width: 72.5, // Change this to adjust the length of the lines
  },
  googleBtn: {
    borderRadius: 5,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10, // add this property to increase the margin
  },
  googleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  appleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appleBtn: {
    borderRadius: 5,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10, // add this property to increase the margin
  },
  appleLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
  dontHaveAccountText: {
    position: 'absolute',
    bottom: 20,
    marginBottom: 0,
    alignContent: 'center', 
    fontSize: 14,
    color: '#a1a1a1',
    textAlignVertical: 'center'
  },
  signUpText: {
    color: '#a1a1a1',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
   textAlignVertical:'center',
  },
});