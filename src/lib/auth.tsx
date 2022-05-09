import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithRedirect, signInWithPopup, UserCredential, User } from "@firebase/auth"
import { doc, serverTimestamp } from "@firebase/firestore"
import { onAuthStateChanged, updateProfile } from "firebase/auth"
import { setDoc } from "firebase/firestore"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { atom, useRecoilValue, useSetRecoilState } from "recoil"
import { auth, db } from "./firebase"

type UserState = string[] | null

const userState = atom<User | null>({
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

export const useAuth = (): boolean | void => {
  const [isLoading, setIsLoading] = useState(true)
  const setUser = useSetRecoilState(userState)
  const router = useRouter()
  const path = router.pathname


  useEffect(() => {
    return onAuthStateChanged(auth, async (user: any) => {
      // Todo: path === '/signin' || path === '/signup'をもっとスマートに書きたい
      // ログインしていなくて、ログイン画面登録画面の場合は画面遷移を行わない
      if (!user && path === '/signin' || path === '/signup') {
        setIsLoading(false)
        // ログインしていない場合は。ログイン画面へ
      } else if (!user) {
        await router.push('/signin')
        setIsLoading(false)
      } else {
        setUser(user)
        setIsLoading(false)
      }
    })
  }, [setUser])

  return isLoading
}


export const useUser = (): User | null => {
  return useRecoilValue(userState)
}

