import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect } from "@firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { auth } from "./firebase"

type UserState = any | null

const userState = atom<UserState>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
})

export const login = (): Promise<void> => {
  const provider = new GoogleAuthProvider()
  return signInWithRedirect(auth, provider)
}

export const logout = (): Promise<void> => {
  return signOut(auth)
}

export const signup = async (email, password): Promise<any> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)

  console.log(userCredential)
  //     .then((userCredential) => {
  //       const user = userCredential.user
  //       console.log(user)
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       console.error(errorCode, errorMessage)
  //     })
}

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [setUser])

  return isLoading
}


export const useUser = (): UserState => {
  return useRecoilValue(userState)
}
