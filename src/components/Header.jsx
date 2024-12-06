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
            <View style={styles.profile}>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={require('../../assets/images/johnlloyd.jpg')} />
                    <View style={styles.profileText}>
                        <Text style={styles.profileName}>Hi Bo</Text>
                        <Text style={styles.profileDate}>Today, May 8</Text>
                    </View>
                </View>
                <View style={styles.iconContainer}> 
                    <View style={styles.icon}>
                        <Image source={require('../../assets/images/bubble-chat-translate.png')} />
                    </View>
                    <View style={styles.icon}>
                        <Image source={require('../../assets/images/bubble-chat-translate.png')} />
                    </View>
                    <View style={styles.icon}>
                        <Image source={require('../../assets/images/bubble-chat-translate.png')} />
                    </View> 
                </View>
            </View>
            <View style={styles.profile}>
                <View style={styles.inputContainer} placeholder="Search">
                    <Image source={require('../../assets/images/search-01.png')} />
                    <TextInput style={styles.input} placeholder="Search" placeholderTextColor={'rgba(160, 165, 175, 1)'} />
                </View>
                <View style={styles.filterIconContainer}>
                        <Image style={styles.filterIcon} source={require('../../assets/images/bubble-chat-translate.png')} />
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
    profile: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',    
    },
    profileName: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        lineHeight: 24,
    },
    profileDate: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 18, 
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7
    },
    icon: { 
        padding: 12,
        borderWidth: 1,
        borderColor: 'rgba(160, 165, 175, 0.2)',
        borderRadius: 80
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, // Ensures the input container takes available space
        height: 50,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 80,
        borderColor: 'rgba(160, 165, 175, 0.2)',
        gap: 15,
        backgroundColor: 'rgba(241, 242, 247, 1)',
    },
    input: {
        flex: 1, // Make input field flexible within the container
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins_400Regular',
        display: 'flex',
        color: 'rgba(160, 165, 175, 1)'
    },
    filterIconContainer: {
        height: 50,
        width: 50,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(160, 165, 175, 0.2)',
        borderRadius: 80,
    },
    filterIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain', // Ensures icon scales within bounds
    }
});
