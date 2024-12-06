import { Image, StyleSheet, Text, View, TextInput } from "react-native";

export default function Header() {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.headerLeft}>
                    <Image source={require('../../assets/images/arrow-left-01.png')} />
                </View>
                <View style={styles.headerTitle}>
                    <Image
                        source={require('../../assets/images/asianlinkAI_FINAL APPROVED.png')}
                        style={styles.logo}
                    />
                </View>
                <View style={styles.headerRight}>
                    <Image source={require('../../assets/images/moon-02.png')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#F8F8F8',
        paddingHorizontal: 20,
        gap: 8,
        paddingBottom: 20
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', // Vertically aligns content in the center
        justifyContent: 'space-between', // Spaces out the items evenly
        paddingTop: 49,
        backgroundColor: '#F8F8F8', // Optional background color
    },
    headerLeft: {
        width: 38, // Fixed width for the button
        height: 38, // Fixed height for the button
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
        borderRadius: 20, // Half of width/height for perfect circle
        backgroundColor: '#ffffff', // Background color for the left button
    },
    headerRight: {
        width: 38, // Fixed width for the button
        height: 38, // Fixed height for the button
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
        borderRadius: 20, // Half of width/height for perfect circle
        backgroundColor: '#ffffff', // Background color for the right button
    },
    headerTitle: {
        flex: 1, // Ensures the title occupies the center
        alignItems: 'center', // Centers the title horizontally
    },
    logo: {
        width: 172, // Adjust width based on your logo size
        height: 28, // Adjust height based on your logo size
        resizeMode: 'contain', // Ensures the logo fits within the bounds
    },
    rotate: {
        transform: [{ rotate: '180deg' }], // Rotates the `<` symbol to point to the right
    },
});
