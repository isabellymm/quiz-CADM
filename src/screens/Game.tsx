import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, ActivityIndicator, Modal, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsRZjNgmQMZTpxO-P79QnnoaZQMWsJnJc",
    authDomain: "meuprojetofirebase-2bd67.firebaseapp.com",
    projectId: "meuprojetofirebase-2bd67",
    storageBucket: "meuprojetofirebase-2bd67.appspot.com",
    messagingSenderId: "66667291906",
    appId: "1:66667291906:web:08e2f043a06a18d35d8e1b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Game() {
    const route = useRoute();
    const { level } = route.params;

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchQuestionsByLevel(level);
    }, [level]);

    const fetchQuestionsByLevel = async (level) => {
        try {
            const q = query(collection(db, 'questions'), where('level', '==', level));
            const querySnapshot = await getDocs(q);
            const fetchedQuestions = querySnapshot.docs.map(doc => doc.data());
            setQuestions(fetchedQuestions);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar perguntas: ', error);
            setLoading(false);
        }
    };

    const handleAnswer = (selectedIndex) => {
        setSelectedAnswerIndex(selectedIndex);
        const correctIndex = questions[currentQuestionIndex].correctOptionIndex;

        if (selectedIndex === correctIndex) {
            setIsCorrect(true);
            setScore(score + 10);
        } else {
            setIsCorrect(false);
            setShowModal(true);
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswerIndex(null);
                setIsCorrect(null);
            } else {
                setShowModal(true);
            }
        }, 1000);
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#FFFFFF" />;
    }

    if (questions.length === 0) {
        return <Text style={styles.title}>Nenhuma pergunta encontrada para este nível.</Text>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizly</Text>

            <View style={styles.questionContainer}>
                <Text style={styles.questionTitle}>{questions[currentQuestionIndex].question}</Text>
            </View>

            <View style={styles.levels}>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.button,
                            selectedAnswerIndex === index && isCorrect === true && styles.correctButton,
                            selectedAnswerIndex === index && isCorrect === false && styles.incorrectButton,
                        ]}
                        onPress={() => handleAnswer(index)}
                        disabled={selectedAnswerIndex !== null}
                    >
                        <Text style={styles.buttonText}>{option}</Text>
                    </Pressable>
                ))}
            </View>

            <Modal
                visible={showModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image style={styles.stretch} source={require('../../assets/images/coroa.png')} />
                        <Text style={styles.modalText}>Jogo finalizado!</Text>
                        <Text style={styles.modalText}>Sua pontuação: {score}</Text>
                        <Pressable style={styles.modalButton} onPress={() => setShowModal(false)}>
                            <Text style={styles.modalButtonText}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 20,
    },
    questionContainer: {
        width: 350,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 25,
        alignItems: 'center',
    },
    questionTitle: {
        fontFamily: "Poppins",
        margin: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#280A82',
    },
    levels: {
        width: 350,
        height: 420,
        marginTop: 30,
        backgroundColor: '#8367C7',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: '#FF7900',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        elevation: 3,
        width: 320,
        height: 80,
        borderColor: 'white',
        borderWidth: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    correctButton: {
        backgroundColor: '#10CCCC',
    },
    incorrectButton: {
        backgroundColor: '#dc3545',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 24,
        marginBottom: 15,
        fontFamily: "Poppins",
        fontWeight: 'bold',
    },
    modalButton: {
        backgroundColor: '#FF7900',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    stretch: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
});