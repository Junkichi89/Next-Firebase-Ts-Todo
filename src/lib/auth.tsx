import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup, UserCredential } from "@firebase/auth"
import { doc, serverTimestamp } from "@firebase/firestore"
import { onAuthStateChanged, updateProfile } from "firebase/auth"
import { setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { auth, db } from "./firebase"

type UserState = any | null

const userState = atom<UserState>({
  key: 'userState',
  default: null,
  dangerouslyAllowMutability: true,
})

export const login = async (email: string, password: string): Promise<void> => {
  await signInWithEmailAndPassword(auth, email, password)
}

export const logout = (): Promise<void> => {
  return signOut(auth)
}

export const signup = async (email: string, password: string, username: string): Promise<any> => {
  await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
    const user = userCredential.user
    await await updateProfile(user, {
      displayName: username
    }).then(() => console.log("user's displayName updated")).catch((error) => console.error(error))

    await setDoc(doc(db, 'users', user.uid), { id: user.uid, displayName: username, created_at: serverTimestamp() })
  })
}

export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true)
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    return onAuthStateChanged(auth, async (user) => {
      setUser(user)
      setIsLoading(false)
    })
  }, [setUser])

  return isLoading
}


export const useUser = (): UserState => {
  return useRecoilValue(userState)
}
