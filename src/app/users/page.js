'use client'

import Link from "next/link";

async function getUsers() {
  let data = await fetch('http://localhost:3000/api/users')
  data = await data.json();
  return data;
}

export default async function Page() {
  const user = await getUsers();
  console.log(user)
  return (
    <div>
      <h1>API User data </h1>
      {
        user.map((item) => (
          <div key={item.id}>
            <p>Name: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Email: {item.email}</p>
            <span><Link href={`/users/${item.id}`}>{item.name}</Link></span>
            <span><Link href={'users/${item.id}/update'}>Edit</Link></span>
          </div>
        ))
      }
    </div>
  )
}