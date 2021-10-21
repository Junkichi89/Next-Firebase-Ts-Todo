import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { signup } from 'src/lib/auth'
import { useRouter } from "next/router"


const SignupForm: React.FC<void> = () => {
  const router = useRouter()
  const handleSignUp = (email, password): void => {
    signup(email, password).catch((error) => console.error(error))
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Must be more than 6 characters')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      handleSignUp(values.email, values.password)
      router.push('/')
    },
  })
  return (
    <Box maxWidth="600px" mx={'auto'}>
      <form onSubmit={formik.handleSubmit}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </FormControl>
          <Button bg={'lightBlue'} type="submit">Submit</Button>
        </VStack>
      </form>
    </Box>
  )
}

export default SignupForm