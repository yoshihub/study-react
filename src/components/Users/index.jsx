import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";



export const Users=() =>{
  const{data,error,isLoading,isEmpty}=useUsers()

  if(isLoading){
    return <div>ローデイング中です</div>;
  }

  if(error){
    return <div>{error.message}</div>;
  }

  if(isEmpty){
    return <div>データは空です</div>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {data.map(user=>{
        return(
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className="block p-2 shadow rounded hover:bg-gray-100">
                <h1 className="text-xl font-bold truncate">{user.name}</h1>
                <div className="text-lg truncate">{user.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  )
}
