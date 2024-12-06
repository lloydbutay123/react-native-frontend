import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        position: 'relative',
    },
    scrollContainer: {
        flexGrow: 1, // Ensures the content fills the remaining space
        justifyContent: 'space-between', // Pushes the footer to the bottom
    },
    container: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
    },
    input: {
        fontSize: 14,
        height: 60,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'rgba(219, 219, 220, 1)',
        fontFamily: 'Poppins_400Regular',
    },
    button: {
        backgroundColor: 'navy',
        padding: 10,
        borderRadius: 12,
        height: 60,
        justifyContent: 'center',
    },
    socialButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 20,
        borderRadius: 12,
        height: 60,
        shadowColor: 'rgba(0, 0, 0, 0.12)', // Shadow color
    shadowOffset: { width: 0, height: 0 }, // Shadow offset
    shadowOpacity: 0.12, // Opacity of the shadow
    shadowRadius: 10, // Blur radius
    elevation: 10, // For Android
    },
    socialButtonText: {
        color: 'rgbsa(11, 11, 11, 1)',
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 500,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
    },
    promptText: {
        color: 'blue',
        fontWeight: 700,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: 'Poppins_700Bold',
    }
});

export default globalStyles;
