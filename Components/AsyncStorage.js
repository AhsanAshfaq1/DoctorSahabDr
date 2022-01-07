import AsyncStorage from "@react-native-async-storage/async-storage";


//For Storing ADDITIONAL INFORMATION ABOUT THE CLIENT
export const SaveLogin = async (data) => {
    console.log("Saving Current User");
    await AsyncStorage.setItem(
        "@Doctor-Sahab:Current-User",
        JSON.stringify(data)
    );
    console.log("Saving Done!");
};

export const getLogin = async (setCurrentUser, setLoading) => {
    try {
        console.log("Retrieving from the Persistant Storage.");
        const jsonValue = await AsyncStorage.getItem("@Doctor-Sahab:Current-User");
        if (jsonValue == null) {
            setCurrentUser(jsonValue)
            setLoading(false)
        } else {
            console.log("Getting Data From Storage");
            console.log("Data Retrieved Successfully!");
            console.log(jsonValue)
            setCurrentUser(JSON.parse(jsonValue))
            setLoading(false)
        }
    } catch (e) {
        console.log(e);
    }
};
