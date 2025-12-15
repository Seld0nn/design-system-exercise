import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { ThemeProvider, Heading, Text } from "design-system";

// FIFA World Cup 2026 - Official Group Stage Data
const groups = [
  {
    name: "A",
    teams: ["México", "Sudáfrica", "Corea del Sur", "Por definir"],
    host: true,
  },
  {
    name: "B",
    teams: ["Canadá", "Por definir", "Catar", "Suiza"],
    host: true,
  },
  {
    name: "C",
    teams: ["Brasil", "Marruecos", "Haití", "Escocia"],
  },
  {
    name: "D",
    teams: ["Estados Unidos", "Paraguay", "Australia", "Por definir"],
    host: true,
  },
  {
    name: "E",
    teams: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
  },
  {
    name: "F",
    teams: ["Países Bajos", "Japón", "Por definir", "Túnez"],
  },
  {
    name: "G",
    teams: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
  },
  {
    name: "H",
    teams: ["España", "Cabo Verde", "Arabia Saudí", "Uruguay"],
  },
  {
    name: "I",
    teams: ["Francia", "Senegal", "Por definir", "Noruega"],
  },
  {
    name: "J",
    teams: ["Argentina", "Argelia", "Austria", "Jordania"],
  },
  {
    name: "K",
    teams: ["Portugal", "Por definir", "Uzbekistán", "Colombia"],
  },
  {
    name: "L",
    teams: ["Inglaterra", "Croacia", "Ghana", "Panamá"],
  },
];

// Opening matches
const openingMatches = [
  {
    teams: "México vs Sudáfrica",
    date: "11 Jun",
    time: "15:00",
    venue: "Estadio Ciudad de México",
    group: "A",
  },
  {
    teams: "Estados Unidos vs Paraguay",
    date: "12 Jun",
    time: "21:00",
    venue: "SoFi Stadium, Los Ángeles",
    group: "D",
  },
  {
    teams: "Brasil vs Marruecos",
    date: "13 Jun",
    time: "18:00",
    venue: "MetLife Stadium, Nueva Jersey",
    group: "C",
  },
  {
    teams: "Argentina vs Argelia",
    date: "16 Jun",
    time: "21:00",
    venue: "Arrowhead Stadium, Kansas City",
    group: "J",
  },
];

// World Cup Content
function WorldCupContent() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text variant="overline" color="accent">
          COPA MUNDIAL FIFA 2026
        </Text>
        <Heading level={1} color="inverse">
          Fase de Grupos
        </Heading>
        <Text variant="body" color="inverse">
          Estados Unidos · México · Canadá
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsBar}>
        <View style={styles.statItem}>
          <Text variant="label" color="accent">
            48
          </Text>
          <Text variant="caption" color="secondary">
            Equipos
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="label" color="accent">
            12
          </Text>
          <Text variant="caption" color="secondary">
            Grupos
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text variant="label" color="accent">
            16
          </Text>
          <Text variant="caption" color="secondary">
            Sedes
          </Text>
        </View>
      </View>

      {/* Groups */}
      <View style={styles.section}>
        <Heading level={3} color="primary">
          Grupos
        </Heading>
        <Text variant="bodySmall" color="secondary">
          Los 2 primeros avanzan a octavos de final
        </Text>

        <View style={styles.groupsGrid}>
          {groups.map((group) => (
            <View key={group.name} style={styles.groupCard}>
              <View style={styles.groupHeader}>
                <Text variant="label" color="inverse">
                  Grupo {group.name} {group.host ? "🏟️" : ""}
                </Text>
              </View>
              <View style={styles.teamList}>
                {group.teams.map((team, index) => (
                  <View key={team + index} style={styles.teamRow}>
                    <Text variant="caption" color="tertiary">
                      {index + 1}
                    </Text>
                    <Text
                      variant="bodySmall"
                      color={team === "Por definir" ? "tertiary" : "primary"}
                    >
                      {team}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Opening Matches */}
      <View style={styles.section}>
        <Heading level={3} color="primary">
          Partidos Inaugurales
        </Heading>
        <Text variant="bodySmall" color="secondary">
          El torneo comienza el 11 de junio de 2026
        </Text>

        {openingMatches.map((match, idx) => (
          <View key={idx} style={styles.matchCard}>
            <View style={styles.matchHeader}>
              <Text variant="overline" color="accent">
                Grupo {match.group}
              </Text>
              <Text variant="caption" color="secondary">
                {match.date}
              </Text>
            </View>
            <Heading level={5}>{match.teams}</Heading>
            <Text variant="caption" color="tertiary">
              {match.venue}
            </Text>
          </View>
        ))}
      </View>

      {/* Notice */}
      <View style={styles.notice}>
        <Text variant="label" color="warning">
          ⚠️ Repechajes Pendientes
        </Text>
        <Text variant="bodySmall" color="secondary">
          Equipos marcados como{" "}
          <Text variant="bodySmall" color="tertiary" italic>
            "Por definir"
          </Text>{" "}
          dependen de resultados de repechaje.
        </Text>
      </View>
    </ScrollView>
  );
}

// App
export default function App() {
  return (
    <ThemeProvider>
      <WorldCupContent />
    </ThemeProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f3",
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#1a4d3e",
    padding: 24,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#d4a030",
    alignItems: "center",
    gap: 4,
  },
  statsBar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 32,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.06)",
  },
  statItem: {
    alignItems: "center",
    gap: 2,
  },
  section: {
    padding: 16,
    gap: 8,
  },
  groupsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 8,
  },
  groupCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  groupHeader: {
    backgroundColor: "#1a4d3e",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#d4a030",
  },
  teamList: {
    padding: 8,
    gap: 4,
  },
  teamRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  matchCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#d4a030",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    gap: 2,
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  notice: {
    marginHorizontal: 16,
    backgroundColor: "#fffbeb",
    borderWidth: 1,
    borderColor: "#fcd34d",
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  footer: {
    marginTop: 24,
    gap: 2,
  },
});
