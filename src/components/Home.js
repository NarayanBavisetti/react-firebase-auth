import React from 'react';
import { useAuth } from '../context/AuthContext';


export default function Home() {
  
const {user} = useAuth()
  return (
    <div >
 hi bro
    </div>
  );
}
