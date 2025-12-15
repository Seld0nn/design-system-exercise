"use client";

import { ThemeProvider, Heading, Text } from "design-system";
import styles from "./page.module.css";

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

function WorldCupContent() {
  return (
    <main className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Text variant="overline" color="accent">
            COPA MUNDIAL FIFA 2026
          </Text>
          <Heading level={1}>Fase de Grupos</Heading>
          <Text variant="body" color="secondary">
            Estados Unidos · México · Canadá
          </Text>
        </div>
      </header>

      {/* Tournament Stats */}
      <section className={styles.statsBar}>
        <div className={styles.statItem}>
          <Text variant="label" color="accent">
            48
          </Text>
          <Text variant="caption" color="secondary">
            Equipos
          </Text>
        </div>
        <div className={styles.statItem}>
          <Text variant="label" color="accent">
            12
          </Text>
          <Text variant="caption" color="secondary">
            Grupos
          </Text>
        </div>
        <div className={styles.statItem}>
          <Text variant="label" color="accent">
            16
          </Text>
          <Text variant="caption" color="secondary">
            Sedes
          </Text>
        </div>
        <div className={styles.statItem}>
          <Text variant="label" color="accent">
            104
          </Text>
          <Text variant="caption" color="secondary">
            Partidos
          </Text>
        </div>
      </section>

      {/* Groups Grid */}
      <section className={styles.groupsSection}>
        <Heading level={2} color="primary">
          Grupos
        </Heading>
        <Text variant="bodySmall" color="secondary">
          Los 2 primeros de cada grupo avanzan a octavos de final
        </Text>

        <div className={styles.groupsGrid}>
          {groups.map((group) => (
            <div key={group.name} className={styles.groupCard}>
              <div className={styles.groupHeader}>
                <Heading level={5}>
                  Grupo {group.name}
                  {group.host && <span className={styles.hostBadge}>🏟️</span>}
                </Heading>
              </div>
              <div className={styles.teamList}>
                {group.teams.map((team, index) => (
                  <div key={team + index} className={styles.teamRow}>
                    <Text variant="caption" color="tertiary">
                      {index + 1}
                    </Text>
                    <Text
                      variant="body"
                      color={team === "Por definir" ? "tertiary" : "primary"}
                    >
                      {team}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Opening Matches */}
      <section className={styles.matchesSection}>
        <Heading level={2} color="primary">
          Partidos Inaugurales
        </Heading>
        <Text variant="bodySmall" color="secondary">
          El torneo comienza el 11 de junio de 2026
        </Text>

        <div className={styles.matchesGrid}>
          {openingMatches.map((match, idx) => (
            <div key={idx} className={styles.matchCard}>
              <div className={styles.matchHeader}>
                <Text variant="overline" color="accent">
                  Grupo {match.group}
                </Text>
                <Text variant="caption" color="secondary">
                  {match.date} · {match.time}
                </Text>
              </div>
              <Heading level={5}>{match.teams}</Heading>
              <Text variant="caption" color="tertiary">
                {match.venue}
              </Text>
            </div>
          ))}
        </div>
      </section>

      {/* Notice */}
      <section className={styles.noticeSection}>
        <div className={styles.notice}>
          <Text variant="label" color="warning">
            ⚠️ Repechajes Pendientes
          </Text>
          <Text variant="bodySmall" color="secondary">
            Algunos equipos están marcados como{" "}
            <Text variant="bodySmall" color="tertiary" italic>
              "Por definir"
            </Text>{" "}
            porque dependen de resultados de repechaje. Los grupos finales se
            confirmarán en marzo de 2026.
          </Text>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <WorldCupContent />
    </ThemeProvider>
  );
}
