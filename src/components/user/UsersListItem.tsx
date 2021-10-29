import React from 'react'
import Link from 'next/link'
import {
  Flex,
  ListItem,
  Text,
} from '@chakra-ui/react'

const UsersListItem: React.FC<any> = ({ user }: any) => {

  return (
    <>
      <ListItem key={user.id}>
        <Flex align="center" py="10px" justify="space-between">
          <Text fontSize="20px">{user.username}</Text>
          <Link href={`/users/${user.id}`}>
            <a >
              ユーザー情報
            </a>
          </Link>
        </Flex>
      </ListItem>

    </>
  )
}

export default UsersListItem