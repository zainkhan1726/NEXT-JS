"use client"

import Image from "next/image";
import { useState , useEffect } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  // varient 1

  // useEffect(() => {
  //   alert("Count is updated")
  // })

  // varient 2

  // useEffect(() => {
  //   alert("I will run only once")
  // },[])

  // varient 3

  // useEffect(() => {
  //   alert("I will run only when count is updated")
  // }, [count])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-bold text-xl mb-5">Counter</h1>
      <div className="flex flex-row items-center justify-center gap-4 w-1/4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}
