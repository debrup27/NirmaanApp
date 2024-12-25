//Comment for bug fixes & debugging or new functionalities added
//Fixed Login Logic & Documented ~Sagnik & Debrup
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from "../assets/icons"
import { theme } from '../constants/theme'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../components/BackButton'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import Input from '../components/input'
import Button from '../components/Button'

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        {/*Fixed Text Error ~Sagnik*/}
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert("Login", "Please Fill all Fields Correctly!");
            return
        }
        
        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();

        setLoading(true);

        // Insert Login logic here
        console.log("Email: ", email);
        console.log("Password: ", password);

        setLoading(false);

        if (true) { // if login is successful
            router.push("/home");
        }
    }

  return (
    <ScreenWrapper style={{backgroundColor: "white"}}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}/>

        {/* Welcome */}
        <View>
            <Text style={styles.welcomeText}>Hey,</Text>
            <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
            <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
                {/*Fixed Text Error ~Sagnik*/}
                Please Login to continue
            </Text>
            <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your email"
                onChangeText={value => emailRef.current = value}
            />
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder="Enter your password"
                secureTextEntry
                onChangeText={value => passwordRef.current = value}
            />
            <Text style={styles.forgotPassword}>
                Forgot Password?
            </Text>

            {/* Button */}
            <Button title={"Login"} loading={loading} onPress={onSubmit} />

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Don't have an account?
                </Text>
                <Pressable onPress={() => router.push("signUp")}>
                    <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>
                        Sign Up
                    </Text>
                </Pressable>
            </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: theme.fonts.semiBold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText: {
        textAlign: "center",
        color: theme.colors.text,
        fontSize: hp(1.6),
    }
})