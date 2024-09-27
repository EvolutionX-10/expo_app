import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";

const googleIcon = require("@/assets/images/google.png");
const facebookIcon = require("@/assets/images/facebook.png");
const appleIcon = require("@/assets/images/apple.png");

const LoginScreen: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const navigation = useNavigation();

	const handleLogin = () => {
		console.log("Login with", email, password);
	};

  const handleForgotPassword = () => {
    // @ts-expect-error
    navigation.navigate("Forgot");
  };

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login here</Text>
			<Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>

			<Input placeholder="Email" value={email} onChangeText={setEmail} />
			<Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

			<TouchableOpacity onPress={handleForgotPassword}>
				<Text style={styles.forgotPasswordText}>Forgot your password?</Text>
			</TouchableOpacity>

			<View
				style={{
					paddingVertical: 20,
					width: "100%",
				}}
			>
				<Button title="Sign in" onPress={handleLogin} style={styles.signInButton} />
			</View>

			<Text style={styles.createAccountText}>Create new account</Text>

			<Text style={styles.orContinueWithText}>Or continue with</Text>

			<View style={styles.socialLoginContainer}>
				<IconButton icon={googleIcon} onPress={() => console.log("Login with Google")} />
				<IconButton icon={facebookIcon} onPress={() => console.log("Login with Facebook")} />
				<IconButton icon={appleIcon} onPress={() => console.log("Login with Apple")} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#1f41bb",
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 30,
		color: "#333",
	},
	input: {
		width: "100%",
		marginBottom: 20,
	},
	forgotPasswordText: {
		color: "#1f41bb",
		marginBottom: 30,
	},
	signInButton: {
		width: "100%",
		// marginBottom: 20,
		backgroundColor: "#1f41bb",
	},
	createAccountText: {
		marginBottom: 20,
		color: "#333",
	},
	orContinueWithText: {
		fontSize: 14,
		color: "#333",
		marginBottom: 10,
	},
	socialLoginContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
});

export default LoginScreen;
