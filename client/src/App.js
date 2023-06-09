import AddClientModel from "./components/AddClientModel";
import Clients from "./components/Clients"
import Header from "./components/Header"
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client"


const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          clients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          projects: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache,
  });

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header />
                <div className="container">
                    <AddClientModel/>
                    <Clients/>
                </div>
            </ApolloProvider>
        </>
    )
}

export default App
