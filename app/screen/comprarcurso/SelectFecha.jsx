import Calendario from "@/components/calendario/Calendario";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useGlobalSearchParams } from "expo-router";

const SelectFecha = () => {
  const curso = useGlobalSearchParams();

  return (
    <View style={{ margin: 20 }}>
      <Text style={styles.title}>
        Elige el horario y el dia que deseas tomar tu clase muestra.
      </Text>
      <Calendario props={curso} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default SelectFecha;
