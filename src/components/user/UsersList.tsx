import React from 'react'
import Link from 'next/link'
import {
  Flex,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react'
import UsersListItem from './UsersListItem'

const UsersList: React.FC<any> = ({ users }: any) => {

  return (
    <OrderedList>
      {users.map((user:any) => (
        <UsersListItem user={user} key={user.id} />
      ))}

    </OrderedList>
  )
}

export default UsersList