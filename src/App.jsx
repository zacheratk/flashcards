import './App.css';
import CardSet from './components/CardSet';

const App = () => {
  return (
    <div className='App'>
      <h1>Flashcards</h1>
      <p>Learn to memorize the notes of your guitar with flashcards! Select a difficulty and get started!</p>
      <CardSet />
    </div>
  );
}

export default App