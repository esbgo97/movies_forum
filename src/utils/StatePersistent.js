import AsyncStorage from "@react-native-community/async-storage"

const appInitialState = {
    main: {
        isLoading: false,
        page:"",
        message: "",
        alert: {
            type: "",
            message: ""
        }
    },
    auth: {
        isLogged: false,
        user: null
    }
}

const getState = async () => {
    try {
        let state = await AsyncStorage.getItem("_state_")
        if (state)
            return JSON.parse(state)

        return appInitialState
    } catch (err) {
        alert(handleError(err))
        return appInitialState
    }
}

const setState = async (state) => {
    try {
        let stateString = JSON.stringify(state)
        await AsyncStorage.setItem("_state_", stateString)
        return true
    } catch (err) {
        alert(handleError(err))
        return false
    }
}

export { getState, setState, appInitialState }