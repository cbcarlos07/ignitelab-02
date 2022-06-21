import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oq3xic0td401xk4ja2f6gk/master',
    cache: new InMemoryCache()
})