import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { signup } from 'src/lib/auth'
import { useRouter } from "next/router"
import { getAuth } from '@firebase/auth'
import { updateProfile } from 'firebase/auth'


interface FormData {
  username: string
  email: string
  password: string
}

const SignupForm: React.FC<void> = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = async (data: FormData): Promise<void> => {
    await signup(data.email, data.password, data.username).catch((error) => console.error(error))
    router.push('/')
  }

  return (
    <Box maxWidth="600px" mx={'auto'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <label>Username</label>
          <Input
            type="text"
            {...register("username", { required: true, min: 6, max: 20 })}
          />
          <label>Email Address</label>
          <Input
            type="email"
            {...register("email", { required: true })}
          />
          <label>password</label>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          <Button bg={'lightBlue'} type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  )
}

export default SignupForm