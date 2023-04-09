import { gql, useQuery } from "@apollo/client"
import ClientsRow from "./ClientsRow"
import { GET_CLIENTS } from "../queries/clientQueries"
import Spinner from "./Spinner"

export default function Clients() {
    const { loading, error, data } = useQuery(GET_CLIENTS)

    if(loading) return <Spinner/>
    if(error) return <p>Something went wrong</p>
    return <>{!loading&&!error&&(
        <table className="table table-hover mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.clients.map(client=>(
                    <ClientsRow client={client} key={client.id}/>
                ))}
            </tbody>
        </table>
    )}</>
}
