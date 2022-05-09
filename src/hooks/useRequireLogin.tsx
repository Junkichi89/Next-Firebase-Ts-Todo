import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react';
import { useRouter } from "next/router"
import { auth } from 'src/lib/firebase'



export function useRequireLogin() {
  const router = useRouter()
  
  useEffect(()=>{
    return onAuthStateChanged(auth, async (user) => {
      if(user) return 
      router.push('/signin')
    })
  },[])
}