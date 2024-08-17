import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizly</Text>
            <StatusBar style="auto" />
            <Image style={styles.stretch} source={require('../../assets/images/dog.png')} />
            <View style={styles.levels}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Game', { level: 1 })}>
                    <Text style={styles.buttonText}>Nível 1</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Game', { level: 2 })}>
                    <Text style={styles.buttonText}>Nível 2</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Game', { level: 3 })}>
                    <Text style={styles.buttonText}>Nível 3</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Game', { level: 4 })}>
                    <Text style={styles.buttonText}>Nível 4</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8367C7',
    },
    title: {
        fontFamily: "Poppins",
        marginTop: 40,
        fontSize: 48,
        fontWeight: '800',
        color: 'white',
    },
    stretch: {
        width: 230,
        height: 230,
        resizeMode: 'stretch',
    },
    levels: {
        width: 350,
        height: 500,
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#FF7900',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        elevation: 3,
        width: 300,
        height: 70,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
