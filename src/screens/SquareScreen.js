import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

COLOR_INC = 15;
const reducer = (state, action) => {
    // state === {red:number, blue:number, green:number}
    //action == { colorTochange: 'red || 'blue || 'green' , amount: 15 || -15 }

    switch (action.colorTochange) {
        case "red":
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case "green":
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case "blue":
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };

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
                        dispatch({ colorTochange: "red", amount: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ colorTochange: "red", amount: -1 * COLOR_INC })
                    }
                    color="Red"
                />
                <ColorCounter
                    onIncrease={() =>
                        dispatch({ colorTochange: "blue", amount: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ colorTochange: "blue", amount: -1 * COLOR_INC })
                    }
                    color="Blue"
                />
                <ColorCounter
                    onIncrease={() =>
                        dispatch({ colorTochange: "green", amount: COLOR_INC })
                    }
                    onDecrease={() =>
                        dispatch({ colorTochange: "green", amount: -1 * COLOR_INC })
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
