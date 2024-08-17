// // Import the functions you need from the SDKs you need
// // import { initializeApp } from '@react-native-firebase/app';
// // import firestore, { collection, getDocs, getFirestore } from '@react-native-firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyBsRZjNgmQMZTpxO-P79QnnoaZQMWsJnJc",
//   authDomain: "meuprojetofirebase-2bd67.firebaseapp.com",
//   projectId: "meuprojetofirebase-2bd67",
//   storageBucket: "meuprojetofirebase-2bd67.appspot.com",
//   messagingSenderId: "66667291906",
//   appId: "1:66667291906:web:08e2f043a06a18d35d8e1b"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export async function addQuestionsToFirestore() {
//   const questions = [
//     {
//       level: 1,
//       question: "Qual é a capital da França?",
//       options: ["Paris", "Londres", "Roma", "Berlim"],
//       correctOptionIndex: 0
//     },
//     {
//       level: 1,
//       question: "Qual animal é conhecido como o 'rei da selva'?",
//       options: ["Elefante", "Tigre", "Leão", "Urso"],
//       correctOptionIndex: 2
//     },
//     {
//       level: 1,
//       question: "Qual fruta é conhecida por seu alto teor de potássio?",
//       options: ["Uva", "Banana", "Maçã", "Laranja"],
//       correctOptionIndex: 1
//     },
//     {
//       level: 1,
//       question: "Qual é o maior oceano do mundo?",
//       options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
//       correctOptionIndex: 3
//     },
//     {
//       level: 2,
//       question: "Em que ano foi proclamada a República do Brasil?",
//       options: ["1889", "1885", "1888", "1886"],
//       correctOptionIndex: 0
//     },
//     {
//       level: 2,
//       question: "Qual planeta é conhecido como o planeta vermelho?",
//       options: ["Vênus", "Marte", "Júpiter", "Saturno"],
//       correctOptionIndex: 1
//     },
//     {
//       level: 2,
//       question: "Qual é a moeda oficial do Japão?",
//       options: ["Dólar", "Yuan", "Euro", "Iene"],
//       correctOptionIndex: 3
//     },
//     {
//       level: 2,
//       question: "Quantos continentes existem no mundo?",
//       options: ["8", "5", "7", "6"],
//       correctOptionIndex: 2
//     },
//     {
//       level: 3,
//       question: "Qual foi a primeira mulher a ganhar um Prêmio Nobel?",
//       options: ["Rosalind Franklin", "Ada Lovelace", "Marie Curie", "Florence Nightingale"],
//       correctOptionIndex: 2
//     },
//     {
//       level: 3,
//       question: "Qual a distância média entre a Terra e o Sol?",
//       options: ["150 milhões de km", "200 milhões de km", "100 milhões de km", "180 milhões de km"],
//       correctOptionIndex: 0
//     },
//     {
//       level: 3,
//       question: "Qual é o nome do rio mais longo do mundo?",
//       options: ["Rio Yangtzé", "Rio Mississipi", "Rio Nilo", "Rio Amazonas"],
//       correctOptionIndex: 3
//     },
//     {
//       level: 3,
//       question: "Em que ano ocorreu a Revolução Francesa?",
//       options: ["1812", "1789", "1776", "1804"],
//       correctOptionIndex: 1
//     },
//     {
//       level: 4,
//       question: "Qual é o elemento mais abundante na atmosfera da Terra?",
//       options: ["Oxigênio", "Nitrogênio", "Argônio", "Dióxido de carbono"],
//       correctOptionIndex: 1
//     },
//     {
//       level: 4,
//       question: "Em qual ano foi fundado o Império Romano?",
//       options: ["330 d.C.", "509 a.C.", "27 a.C.", "476 d.C."],
//       correctOptionIndex: 2
//     },
//     {
//       level: 4,
//       question: "Qual é o nome do maior satélite natural de Saturno?",
//       options: ["Calisto", "Ganimedes", "Phobos", "Titã"],
//       correctOptionIndex: 3
//     },
//     {
//       level: 4,
//       question: "Qual é a fórmula química do gás ozônio?",
//       options: ["O3", "O2", "CO2", "N2O"],
//       correctOptionIndex: 0
//     }
//   ];

//   try {
//     const batchPromises = questions.map((question) =>
//       addDoc(collection(db, 'questions'), question)
//     );

//     await Promise.all(batchPromises);
//     console.log('Todas as perguntas foram adicionadas com sucesso!');
//   } catch (error) {
//     console.error('Erro ao adicionar perguntas: ', error);
//   }
// }

// addQuestionsToFirestore();


// async function fetchQuestionsByLevel(level) {
//   const snapshot = await firestore()
//     .collection('questions')
//     .where('level', '==', level)
//     .get();

//   const questions = snapshot.docs.map(doc => doc.data());
//   return shuffleArray(questions).slice(0, 5); // Seleciona 5 perguntas aleatórias
// }

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// } 