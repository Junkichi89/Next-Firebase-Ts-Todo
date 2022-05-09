import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { login } from 'src/lib/auth'
import { useRouter } from "next/router"
import Link from 'next/link'


interface FormData {
  username: string
  email: string
  password: string
}

const LoginForm: React.FC<void> = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormData>()
  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      await login(data.email, data.password)
      router.push('/')
    } catch (error: any) {
      console.error(error)
      router.push('/signup')
    }
  }

  return (
    <Box maxWidth="600px" mx={'auto'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
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
      <Box>
        <Link href="/signup">
          <a>ユーザー登録へ</a>
        </Link>
      </Box>
    </Box>
  )
}

export default LoginForm