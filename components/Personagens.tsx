import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Personagens({ item }: any) {
  return (
    <>
      <Link href={`/modal/${item.id}`} asChild>
        <View style={s.body}>
          <Text style={s.titulo}>{item.name}</Text>
          <Image source={{ uri: item.image }}></Image>
          <Text style={s.ki}>{item.ki}</Text>
          <Text style={s.race}>{item.race}</Text>
          <View style={s.imagecontainer}>
            <Image
              source={{ uri: item.image }}
              contentFit="cover"
              style={s.image}
            />
          </View>
        </View>
      </Link>
    </>
  );
}

const s = StyleSheet.create({
  titulo: {
    color: "#ffffff",
    fontSize: 32,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "JetBrains Mono",
  },
  imagecontainer: {
    width: 220,
    height: 500,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  body: {
    gap: 5,
    backgroundColor: "#313131",
    borderRadius: 50,
    borderColor: "#a2a2a2",
    borderWidth: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  ki: {
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "JetBrains Mono",
  },
  race: {
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "JetBrains Mono",
  },
});
