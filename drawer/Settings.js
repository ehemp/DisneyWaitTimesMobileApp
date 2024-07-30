import { View, Text } from "react-native";

const SettingsScreen = ({ navigation, route }) => {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Settings Screen</Text>
</View>
   );
};



export default SettingsScreen