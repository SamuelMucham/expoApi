import Personagens from "@/components/Personagens";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
export default function List() {
  const [personagens, setPersonagens] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const ferchCharacters = async () => {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?page=" + page,
      );
      const data = await response.json();
      setPersonagens((prev: any) => [...(prev || []), ...data.items]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page > 0 && page < 7) {
      ferchCharacters();
    }
  }, [page]);
  return (
    <>
      <View style={s.sreen}>
        <Text style={s.titulo}> Lista de Personagens</Text>

        {loading ? (
          <View style={s.wrapimage}>
            <Image source={require("@/assets/load.gif")} style={s.loading} />
          </View>
        ) : (
          <FlatList
            data={personagens}
            renderItem={({ item }: any) => {
              return <Personagens item={item} />;
            }}
            onEndReached={loading ? null : () => setPage((prev) => prev + 1)}
          />
        )}
      </View>
    </>
  );
}

const s = StyleSheet.create({
  sreen: {
    backgroundColor: "#555555",
    flex: 1,
    alignItems: "center",
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
