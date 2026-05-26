# SBF Lernen ⚓

Kostenlose App zur Vorbereitung zu allen SBF-Theorieprüfungen. Enthält ausschließlich die offiziellen Fragen aus dem ELWIS-Katalog. Lerne effektiv im bewährten Spaced-Repetition Format, speichere deinen Fortschritt und teste dich in Prüfungssimulationen!

---

## Features

- **Lern-Cockpit:** Lerne alle offiziellen Fragen nach Kategorien geordnet (Basisfragen, Spez. Fragen See, Spez. Fragen Binnen, Spez. Fragen Segeln).
- **Spaced-Repetition:** Nutze ein intelligentes Lernsystem zur gezielten Wiederholung schwieriger und fälliger Fragen.
- **Prüfungs-Center:** Simuliere reale Prüfungen unter Einhaltung der offiziellen ELWIS-Fragebogen-Regeln und Zeitvorgaben.
- **Visuelles Lernen:** Enthält alle offiziellen Grafiken zu Schifffahrtszeichen, Lichtern und Schallsignalen.
- **Navigationsaufgaben:** Übe die 15 offiziellen Kartenaufgaben für den SBF See direkt in der App.

---

## Wichtig: Seekarten-PDF für die Navigation 

Aufgrund von Urheberrechtsbestimmungen ist das offizielle D49-Kartenaufgaben-PDF nicht direkt im Code-Repository enthalten.

Um die Navigationsaufgaben zu nutzen:
1. Besorge dir das offizielle PDF der D49-Kartenaufgaben: **`Seekarte_D49_Aufgaben_SBF_SEE.pdf`**.
2. Lege die Datei in das Projektverzeichnis unter:
   `src/data/Seekarte_D49_Aufgaben_SBF_SEE.pdf`
3. Drucke das PDF in Originalgröße auf A3-Papier

---

## Quick-Start-Anleitung 

So installierst und startest du die Anwendung auf deinem Computer:

### Option A: Der automatische Weg (Empfohlen)
Wenn du einen KI-Codierungsassistenten (wie Cursor, Windsurf oder Copilot) in deinem Editor nutzt:
> Frage einfach deinen KI-Assistenten:
> **"Installiere die Abhängigkeiten und starte den lokalen Entwicklungsserver."**

---

### Option B: Der manuelle Weg (Windows Eingabeaufforderung)
Keine Programmierkenntnisse erforderlich! Folge einfach diesen Schritten:

1. **Node.js installieren:**
   Lade Node.js von [nodejs.org](https://nodejs.org/) herunter und installiere es (wähle die "LTS"-Version).
   
2. **Terminal öffnen:**
   Drücke die `Windows-Taste`, tippe **`cmd`** ein und drücke `Enter`, um die Eingabeaufforderung zu öffnen.

3. **In den App-Ordner wechseln:**
   Wechsle in das Verzeichnis, in das du dieses Projekt heruntergeladen hast. Wenn es z.B. auf deinem Desktop liegt, tippe folgenden Befehl ein und drücke `Enter`:
   ```cmd
   cd OneDrive\Desktop\SBF Lernen
   ```
   *(Passe den Pfad an, falls das Verzeichnis woanders liegt, z.B. `cd Downloads\sbf-lernen`).*

4. **Abhängigkeiten installieren:**
   Tippe folgenden Befehl ein, um alle erforderlichen App-Komponenten herunterzuladen:
   ```cmd
   npm install
   ```

5. **App starten:**
   Sobald die Installation abgeschlossen ist, starte die App lokal mit dem Befehl:
   ```cmd
   npm run dev
   ```

6. **Im Browser öffnen:**
   Im Terminal wird eine Adresse angezeigt (meistens `http://localhost:5173`). Klicke darauf oder kopiere sie in deinen Webbrowser (Chrome, Edge, Firefox usw.), um mit dem Lernen zu beginnen!

---

## Viel Erfolg! 🐟
