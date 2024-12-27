"use client"

import { useParams } from 'next/navigation';

export default function Chatpage() {
  const { id } = useParams();
  return (
    <h1>Chatpage with ID: {id}</h1>
  )
}
