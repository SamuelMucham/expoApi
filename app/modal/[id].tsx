import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Modal() {
  const local = useLocalSearchParams();
  const id = local.id;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
      );
      const resposnseData = await response.json();
      setData(resposnseData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchCharacter();
    }
  }, [id]);
  if (loading) {
    return (
      <>
        <View style={s.wrapimage}>
          <Image source={require("@/assets/load.gif")} style={s.loading} />
        </View>
      </>
    );
  }

  return (
    <View style={s.container}>
      <Text style={s.name}>{data?.name}</Text>
      <Text style={s.ki}>{data?.ki}</Text>
      <Text style={s.race}>{data?.race}</Text>
      <Image source={{ uri: data?.image }} contentFit="cover" style={s.image} />
    </View>
  );
}

const s = StyleSheet.create({
  image: {
    flex: 1,
    width: "90%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#555555",
  },
  name: {
    color: "#ffffff",
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "JetBrains Mono",
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
  wrapimage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: 100,
    height: 100,
  },
});
