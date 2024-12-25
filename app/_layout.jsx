//Fixed Layout Stacks ~Deb
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack, useRouter } from 'expo-router'

const _layout = () => {
  const router = useRouter();

  useEffect(() => {
    if (true) {
      router.replace('/welcome')
    }
  })
  return (
    <Stack
        screenOptions={{
            headerShown: false,
        }
        }   
    />
  )
}

export default _layout