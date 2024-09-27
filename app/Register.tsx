import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import IconButton from "../components/IconButton";

const googleIcon = require("@/assets/images/google.png");
const facebookIcon = require("@/assets/images/facebook.png");
const appleIcon = require("@/assets/images/apple.png");

const RegisterScreen: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleRegister = () => {
		if (password !== confirmPassword) {
			console.log("Passwords do not match");
			return;
		}
		console.log("Register with", email, password);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create Account</Text>
			<Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

			<Input placeholder="Email" value={email} onChangeText={setEmail} />
			<Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
			<Input placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

			<View
				style={{
					paddingVertical: 20,
					width: "100%",
				}}
			>
				<Button title="Sign up" onPress={handleRegister} style={styles.signUpButton} />
			</View>

			<Text style={styles.alreadyAccountText}>Already have an account</Text>

			<Text style={styles.orContinueWithText}>Or continue with</Text>

			<View style={styles.socialLoginContainer}>
				<IconButton icon={googleIcon} onPress={() => console.log("Register with Google")} />
				<IconButton icon={facebookIcon} onPress={() => console.log("Register with Facebook")} />
				<IconButton icon={appleIcon} onPress={() => console.log("Register with Apple")} />
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
		textAlign: "center",
	},
	input: {
		width: "100%",
		marginBottom: 20,
	},
	signUpButton: {
		width: "100%",
		backgroundColor: "#1f41bb",
	},
	alreadyAccountText: {
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

export default RegisterScreen;
