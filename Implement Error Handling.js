try {
    validateInput(username, password);
    await registerUser(username, password);
} catch (error) {
    console.error('Error during registration:', error.message);
}
