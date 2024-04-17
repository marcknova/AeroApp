import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import ModalConfirmacion from "./ModalConfirmacion";

const CardMentor = ({ props, disable }) => {
  const { fotoPerfil, nombreCompleto } = props;
  const data = { ...props, disable: disable };

  return (
    <View>
      <View style={styles.cardContent}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.imgContent}>
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
              }}
              source={{ uri: fotoPerfil }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>{nombreCompleto}</Text>
          <ModalConfirmacion props={nombreCompleto} />
          <Button
            onPress={() => {
              router.navigate({
                pathname: "/screen/vercursomaster/VerPerfilMaster",
                params: data,
              });
            }}
            labelStyle={{ color: "#ffffff" }}
            style={styles.button2}
          >
            Ver Perfil
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    width: "95%",
    height: 300,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: "8%",
    marginVertical: 8,
  },
  imgContent: {
    marginTop: 23,
    marginBottom: 40,
    height: 100,
  },

  name: {
    textAlign: "center",
    fontWeight: "500",
  },

  button2: {
    width: "90%",
    marginTop: 14,
    borderRadius: 10,
    backgroundColor: "#63c5da",
  },
});

export default CardMentor;