# Quizly - Jogo de Perguntas e Respostas
Quizly é um aplicativo de perguntas e respostas desenvolvido em React Native que utiliza o Firebase Firestore como banco de dados para armazenar as perguntas e Firebase Authentication para gerenciar o login dos usuários. O objetivo do jogo é responder corretamente a uma série de perguntas para acumular pontos. O jogo possui 4 níveis de dificuldade, cada um com 5 perguntas.

<p align="center"> 
<img src="https://github.com/user-attachments/assets/c43719d0-3b5d-43fc-9cc9-1514025f88e4" width="200">
<img src="https://github.com/user-attachments/assets/2fde8ebc-fcc6-4ed9-a652-8f19a8d1a604" width="200">
<img src="https://github.com/user-attachments/assets/0574ad7a-1055-446c-80a8-f22d77fc2194" width="200">
<img src="https://github.com/user-attachments/assets/3ca88d39-d59b-4fa7-ad26-3b8b58a17c66" width="200">
</p>

### Funcionalidades
- Níveis de Dificuldade: O jogo possui 4 níveis de dificuldade, com 5 perguntas cada.
- Banco de Dados no Firebase Firestore: As perguntas e respostas são armazenadas no Firestore, permitindo fácil manipulação e escalabilidade.
- Pontuação: O usuário acumula pontos a cada resposta correta.
- Modal de Finalização: Um modal exibe a pontuação final do usuário ao finalizar o jogo ou quando ele erra uma questão.

### Tecnologias Utilizadas
- React Native: Framework principal utilizado para o desenvolvimento do aplicativo.
- Firebase Firestore: Utilizado para armazenar as perguntas e respostas.
- Expo: Ambiente de desenvolvimento para React Native.

### Configuração e Execução
#### Pré-requisitos
- Node.js instalado
- Expo CLI instalado globalmente (npm install -g expo-cli)
- Conta no Firebase e um projeto configurado.
