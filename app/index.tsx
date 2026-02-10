import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Inicial() {
  return (
    <>
      <View style={s.WrapInicial}>
        <Text style={s.Titulo}>consumo da API dragon ball</Text>
      </View>
      <View style={s.WrapInicial}>
        <Image
          style={s.image}
          source={require("@/assets/api.webp")}
          alt="logo"
        />
      </View>
      <View style={s.WrapInicial}>
        <TouchableOpacity
          style={s.btn}
          onPress={() => {
            router.push("/list");
          }}
        >
          <Text style={s.btnText}>Visitar personagens</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  WrapInicial: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555555",
  },
  Titulo: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#ffffff",
  },
  image: {
    width: "70%",
    height: 300,
  },
  btn: {
    backgroundColor: "#a14545",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
});
