# SBF Lernen ⚓

An interactive web application built with React and Vite to prepare for the official German **Sportbootführerschein (SBF See & Binnen)** exams. 

---

## Features 🚀

- **Lern-Cockpit (Practice Mode):** Practice all official questions across categories (Basisfragen, See-spezifisch, Binnen-spezifisch, Segeln).
- **Prüfungs-Center (Exam Mode):** Take realistic mock exams following official ELWIS questionnaire rules and time constraints.
- **Visual Learning:** Includes official sign graphics, lights, and day shapes.
- **Navigation Tasks:** Practice the 15 official charts-based tasks (Kartenaufgaben) for the SBF See.

---

## Important: Navigational Chart PDF 🗺️

Due to copyright restrictions, the official D49 practice chart PDF is not bundled directly inside the code repository.

To access the map tasks:
1. Obtain the official D49 tasks PDF: **`Seekarte_D49_Aufgaben_SBF_SEE.pdf`**.
2. Place the file inside the project directory at:
   `src/data/Seekarte_D49_Aufgaben_SBF_SEE.pdf`

---

## Quick Start Guide ⏱️

Here is how to get the application up and running on your computer.

### Option A: The Automatic Way (Recommended)
If you are using an AI coding assistant (like Cursor, Windsurf, or Copilot) in your editor:
> Simply ask your AI assistant: 
> **"Install the dependencies and start the local development server."**

---

### Option B: The Manual Way (Windows Command Prompt)
No programming experience is required! Just follow these step-by-step instructions:

1. **Install Node.js:** 
   If you don't have it installed yet, download and install Node.js from [nodejs.org](https://nodejs.org/). Choose the "LTS" (recommended) version.
   
2. **Open the Terminal:**
   Press the `Windows Key`, type **`cmd`**, and press `Enter` to open the Command Prompt.

3. **Navigate to the App Folder:**
   Change the folder directory to where you downloaded this project. For example, if you extracted it to your Desktop, type the following command and press `Enter`:
   ```cmd
   cd OneDrive\Desktop\SBF Lernen
   ```
   *(Adjust the path if you saved it elsewhere, e.g., `cd Downloads\sbf-lernen`).*

4. **Install App Libraries:**
   Type the following command to download and install all necessary app components:
   ```cmd
   npm install
   ```

5. **Start the App:**
   Once the installation is complete, start the application locally by running:
   ```cmd
   npm run dev
   ```

6. **Open in Browser:**
   The terminal will display a local link (typically `http://localhost:5173`). Click it or copy-paste it into your web browser (Chrome, Edge, Firefox, etc.) to start learning!
