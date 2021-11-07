
import React from 'react';
import { 
  View, 
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';

import { styles } from './styles';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { Background } from '../../components/Background';

import Illustration from '../../assets/illustration.png';
import Discord from '../../assets/discord.png';

import { theme } from '../../styles/theme';

export function SignIn() {
  const { signIn, isLoading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(`${error}`);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={Illustration} 
          style={styles.image} 
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} 
            e organize suas {'\n'} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          { isLoading 
            ? (<ActivityIndicator color={theme.colors.primary} />)
            : (
              <Button onPress={handleSignIn}>
              <View style={styles.wrapperContent}>
                <View style={styles.iconWrapper}>
                  <Image source={Discord} style={styles.icon} />
                </View>
                <Text style={styles.buttonText}>Entre com Discord</Text>
              </View>
            </Button>
          )}
        </View>
      </View>
    </Background>
  )
}