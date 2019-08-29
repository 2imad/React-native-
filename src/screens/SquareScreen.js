import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

COLOR_INC = 15;
const reducer = (state, action) => {
    // state === {red:number, blue:number, green:number}
    //action == { type: 'red || 'blue || 'green' , payload: 15 || -15 }

    switch (action.type) {
        case "change_red":
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case "change_green":
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case "change_blue":
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };

        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <View>
                <ColorCounter
                    onIncrease={() =>
                        dispatch({ type: "change_red", payload: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ type: "change_red", payload: -1 * COLOR_INC })
                    }
                    color="Red"
                />
                <ColorCounter
                    onIncrease={() =>
                        dispatch({ type: "change_blue", payload: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ type: "change_blue", payload: -1 * COLOR_INC })
                    }
                    color="Blue"
                />
                <ColorCounter
                    onIncrease={() =>
                        dispatch({ type: "change_green", payload: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ type: "change_green", payload: -1 * COLOR_INC })
                    }
                    color="Green"
                />
            </View>
            <View>
                <Text
                    style={{
                        height: 100,
                        width: 100,
                        backgroundColor: `rgb(${red},${green},${blue})`
                    }}
                ></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: "rgb(235,0,654)"
    }
});

export default SquareScreen;
