import logo from './logo.svg';
import './App.css';
import Cuisines from './components/Cuisines';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'



function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
  })


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header style={{ background: 'pink', fontSize: '2rem' }}>Hello GraphQL Test</header>
        <Cuisines />
      </div>
    </ApolloProvider>
  );
}

export default App;
