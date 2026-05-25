/**
 * Navigationsaufgaben See (Aufgabe 1–15)
 * Basierend auf den 15 offiziellen Kartenaufgaben für den SBF See (Übungskarte D49).
 * Jede Aufgabe besteht aus 9 logisch aufeinander aufbauenden Teilaufgaben.
 */

export const navigationTasks = [
  {
    id: 1,
    title: "Navigationsaufgabe 1",
    description: "Ausgangslage: Eine Yacht befindet sich in der Deutschen Bucht auf der Reise von Borkum nach Cuxhaven. Um 10:00 Uhr wird die Leuchttonne 'TG 19/Weser 2' an Backbord in nächster Nähe passiert. Die Fahrt über Grund (Fdg) beträgt 8,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die geographischen Koordinaten der Leuchttonne 'TG 19/Weser 2' an.",
        options: [
          "53° 50,5' N, 007° 52,2' E",
          "53° 49,8' N, 007° 51,0' E",
          "53° 52,1' N, 007° 54,3' E",
          "53° 50,0' N, 007° 50,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position der Tonne 'TG 19/Weser 2' wird direkt am Breiten- und Längenmaßstab der Karte abgelesen: 53° 50,5' N, 007° 52,2' E."
      },
      {
        number: 2,
        question: "Von der Tonne 'TG 19/Weser 2' wird der Kurs zur Tonne 'ST' abgesetzt. Welchen rechtweisenden Kurs (rwK) entnehmen Sie der Karte?",
        options: [
          "079°",
          "084°",
          "074°",
          "089°"
        ],
        correctIndex: 0,
        explanation: "Das Verbinden der beiden Tonnen in der Seekarte ergibt mit dem Kursdreieck einen rechtweisenden Kurs von 079°."
      },
      {
        number: 3,
        question: "Die Missweisung (Mw) für das laufende Jahr beträgt +1° (Ost). Die Ablenkung (Abl) beträgt +4°. Berechnen Sie den zu steuernden Magnetkompasskurs (MgK).",
        options: [
          "074°",
          "084°",
          "076°",
          "082°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 079° - (+1°) - (+4°) = 074°."
      },
      {
        number: 4,
        question: "Welche Distanz (d) legt die Yacht in 1,5 Stunden (bis 11:30 Uhr) bei einer Fahrt über Grund von 8,0 kn zurück?",
        options: [
          "12,0 sm",
          "8,0 sm",
          "10,5 sm",
          "16,0 sm"
        ],
        correctIndex: 0,
        explanation: "Formel: d = Fdg * t = 8 kn * 1,5 h = 12,0 sm."
      },
      {
        number: 5,
        question: "Bestimmen Sie die geographischen Koordinaten des Koppelorts (Ok) für 11:30 Uhr.",
        options: [
          "53° 52,8' N, 008° 12,0' E",
          "53° 51,0' N, 008° 08,5' E",
          "53° 54,2' N, 008° 15,2' E",
          "53° 50,1' N, 008° 10,0' E"
        ],
        correctIndex: 0,
        explanation: "Tragen Sie auf der Kurslinie (079°) eine Distanz von 12,0 sm ab dem Startpunkt ab. Die Position lautet 53° 52,8' N, 008° 12,0' E."
      },
      {
        number: 6,
        question: "Um 11:30 Uhr wird die Leuchttonne 'Alte Weser' mit dem Magnetkompass gepeilt. Die Magnetkompasspeilung (MgP) beträgt 186°. Berechnen Sie die rechtweisende Peilung (rwP) (Mw = +1°, Abl = +4°).",
        options: [
          "191°",
          "181°",
          "186°",
          "196°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 186° + 1° + 4° = 191°."
      },
      {
        number: 7,
        question: "Zeichnen Sie die rwP (191°) in die Seekarte ein. Welches feste Schifffahrtszeichen schneidet diese Peillinie als Standlinie?",
        options: [
          "Leuchtturm Alte Weser",
          "Leuchtturm Roter Sand",
          "Leuchtfeuer Mellumplate",
          "Leuchtfeuer Tegeler Plate"
        ],
        correctIndex: 0,
        explanation: "Durch Einzeichnen des Peilstrahls (Gegenpeilung 011° ab Leuchtturm Alte Weser) kreuzt die Peillinie den Leuchtturm 'Alte Weser'."
      },
      {
        number: 8,
        question: "Um 12:00 Uhr wird ein beobachteter Ort (Ob) bestimmt: 53° 53,5' N, 008° 16,8' E. Der Koppelort (Ok) für 12:00 Uhr war 53° 53,0' N, 008° 20,0' E. Bestimmen Sie die Besteckversetzung (BV).",
        options: [
          "Richtung 285° (WNW), Distanz 2,0 sm",
          "Richtung 105° (ESE), Distanz 2,0 sm",
          "Richtung 285° (WNW), Distanz 1,0 sm",
          "Richtung 045° (NE), Distanz 3,5 sm"
        ],
        correctIndex: 0,
        explanation: "Die Versetzung zeigt vom Koppelort (Ok) zum beobachteten Ort (Ob). Der gemessene Winkel beträgt 285° und die Distanz beträgt 2,0 sm."
      },
      {
        number: 9,
        question: "In der Seekarte finden Sie nahe dem Koppelort ein Symbol für ein Wrack mit der Angabe '2,4m'. Was bedeutet dies?",
        options: [
          "Die Kartentiefe über dem Wrack beträgt 2,4 m bezogen auf das Seekartennull.",
          "Das Wrack ragt 2,4 m über das Wasser hinaus.",
          "Die Wrackteile liegen in einer Wassertiefe von 24 m.",
          "Hier darf nur mit Booten bis 2,4 m Tiefgang geankert werden."
        ],
        correctIndex: 0,
        explanation: "Eine Zahl neben einem Wracksymbol gibt die geringste Wassertiefe über dem Hindernis an, bezogen auf das Seekartennull (SKN)."
      }
    ]
  },
  {
    id: 2,
    title: "Navigationsaufgabe 2",
    description: "Ausgangslage: Nach dem Ablegen in Helgoland passiert die Yacht um 09:00 Uhr die Leuchttonne 'Helgoland-O' an Steuerbord in nächster Nähe. Es soll Kurs auf die Leuchttonne 'Elbe 1' genommen werden. Die Fahrt über Grund (Fdg) beträgt 6,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die geographischen Koordinaten der Leuchttonne 'Helgoland-O' an.",
        options: [
          "54° 10,8' N, 007° 55,4' E",
          "54° 11,5' N, 007° 53,0' E",
          "54° 09,2' N, 007° 57,1' E",
          "54° 12,0' N, 007° 56,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position von 'Helgoland-O' entnimmt man direkt aus der Karte am Randmaßstab."
      },
      {
        number: 2,
        question: "Vom Ausgangspunkt wird der Kurs zur Tonne 'Elbe 1' abgesetzt. Welchen rechtweisenden Kurs (rwK) entnehmen Sie der Karte?",
        options: [
          "125°",
          "130°",
          "120°",
          "135°"
        ],
        correctIndex: 0,
        explanation: "Die Kurslinie von Helgoland-O nach Elbe 1 verläuft in Richtung 125°."
      },
      {
        number: 3,
        question: "Die Missweisung (Mw) beträgt +1° (Ost), die Ablenkung (Abl) beträgt -3° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "127°",
          "123°",
          "121°",
          "129°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 125° - (+1°) - (-3°) = 125° - 1° + 3° = 127°."
      },
      {
        number: 4,
        question: "Welche Distanz (d) liegt zwischen den Tonnen 'Helgoland-O' und 'Elbe 1'?",
        options: [
          "18,0 sm",
          "15,5 sm",
          "20,0 sm",
          "22,5 sm"
        ],
        correctIndex: 0,
        explanation: "Das Abgreifen der Distanz mit dem Zirkel ergibt am Breitenmaßstab genau 18,0 Seemeilen."
      },
      {
        number: 5,
        question: "Berechnen Sie die voraussichtliche Ankunftszeit (ETA) an der Tonne 'Elbe 1' bei Fdg = 6,0 kn.",
        options: [
          "12:00 Uhr",
          "11:30 Uhr",
          "12:30 Uhr",
          "11:00 Uhr"
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / Fdg = 18 sm / 6 kn = 3,0 Stunden. Abfahrt war 09:00 Uhr, d.h. Ankunft um 12:00 Uhr."
      },
      {
        number: 6,
        question: "Unterwegs wird um 10:30 Uhr ein Leuchtfeuer mit MgP = 295° gepeilt. Berechnen Sie die rechtweisende Peilung (rwP) (Mw = +1°, Abl = -3°).",
        options: [
          "293°",
          "297°",
          "299°",
          "291°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 295° + 1° + (-3°) = 293°."
      },
      {
        number: 7,
        question: "Welches markante Leuchtfeuer auf Helgoland wurde gepeilt (rwP = 293°)?",
        options: [
          "Hauptfeuer Helgoland (auf dem Oberland)",
          "Düne-Feuer",
          "Helgoland-Südhafen-Feuer",
          "Westhafen-Feuer"
        ],
        correctIndex: 0,
        explanation: "Der rückwärtige Peilstrahl führt direkt zum Hauptfeuer Helgoland auf der Felseninsel."
      },
      {
        number: 8,
        question: "Die Seekarte zeigt nahe der Route das Symbol 'PSSA'. Was bedeutet dies?",
        options: [
          "Particularly Sensitive Sea Area (besonders empfindliches Meeresgebiet)",
          "Protected Sailing Area",
          "Private Sea Area",
          "Port Security Area"
        ],
        correctIndex: 0,
        explanation: "PSSA steht für Particularly Sensitive Sea Area. In diesen ökologisch wertvollen Gebieten gelten verschärfte Umweltschutzbestimmungen."
      },
      {
        number: 9,
        question: "Nahe der Tonne 'Elbe 1' liegt ein verankertes Feuerschiff (Ersatzfeuer). Welche Kennung hat ein solches orientierendes Feuer oft laut Karte?",
        options: [
          "Iso. 8s (Gleichtakt)",
          "Fl. 10s (Blitzfeuer)",
          "F. (Festfeuer)",
          "Oc. 5s (Unterbrochenes Feuer)"
        ],
        correctIndex: 0,
        explanation: "Feuerschiffe besitzen markante Kennungen wie Iso. 8s (Isophase/Gleichtaktfeuer) zur sicheren Ansteuerung."
      }
    ]
  },
  {
    id: 3,
    title: "Navigationsaufgabe 3",
    description: "Ausgangslage: Die Yacht befindet sich im Jade-Fahrwasser auf Höhe der Tonne 'Jade' um 14:00 Uhr. Es wird Kurs in Richtung Innenjade abgesetzt. Fahrt über Grund 7,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die geographischen Koordinaten der Tonne 'Jade' an.",
        options: [
          "53° 51,5' N, 007° 56,5' E",
          "53° 50,0' N, 007° 53,0' E",
          "53° 53,1' N, 007° 58,0' E",
          "53° 52,0' N, 007° 55,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Koordinaten werden am Kartenrand abgelesen."
      },
      {
        number: 2,
        question: "Vorschriftsmäßiger rechtweisender Kurs (rwK) auf dem Weg zur Innenjade beträgt 210°. Bestimmen Sie diesen Kurs in der Karte.",
        options: [
          "210°",
          "215°",
          "205°",
          "220°"
        ],
        correctIndex: 0,
        explanation: "Der rwK beträgt 210° laut Kurslinie."
      },
      {
        number: 3,
        question: "Die Missweisung (Mw) beträgt +2° (Ost), die Ablenkung (Abl) beträgt +5° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "203°",
          "217°",
          "213°",
          "207°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 210° - 2° - 5° = 203°."
      },
      {
        number: 4,
        question: "Welche Strecke legt das Boot bis 15:30 Uhr zurück bei Fdg = 7,0 kn?",
        options: [
          "10,5 sm",
          "7,0 sm",
          "14,0 sm",
          "12,5 sm"
        ],
        correctIndex: 0,
        explanation: "Fahrtdauer: 1,5 Stunden. Distanz d = 7,0 kn * 1,5 h = 10,5 sm."
      },
      {
        number: 5,
        question: "Geben Sie die Position des Koppelorts (Ok) um 15:30 Uhr an.",
        options: [
          "53° 42,4' N, 007° 48,0' E",
          "53° 44,0' N, 007° 50,2' E",
          "53° 41,0' N, 007° 46,0' E",
          "53° 43,5' N, 007° 49,5' E"
        ],
        correctIndex: 0,
        explanation: "Wir tragen 10,5 sm in Kursrichtung 210° ab Tonne Jade ab."
      },
      {
        number: 6,
        question: "Eine Peilung wird vorgenommen. MgP zu einer Bake auf Minsener Oog beträgt 045°. Berechnen Sie die rwP (Mw = +2°, Abl = +5°).",
        options: [
          "052°",
          "038°",
          "047°",
          "040°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 045° + 2° + 5° = 052°."
      },
      {
        number: 7,
        question: "Nach Einzeichnen der rwP (052°) schneidet die Standlinie das Ostbucht-Feuer. Welcher Ob wird um 15:30 Uhr bestimmt?",
        options: [
          "53° 43,0' N, 007° 47,0' E",
          "53° 41,5' N, 007° 49,0' E",
          "53° 44,2' N, 007° 45,5' E",
          "53° 42,0' N, 007° 48,0' E"
        ],
        correctIndex: 0,
        explanation: "Der Schnittpunkt aus Kurslinie und Peillinie ergibt den beobachteten Ort (Ob) bei 53° 43,0' N, 007° 47,0' E."
      },
      {
        number: 8,
        question: "Bestimmen Sie die Besteckversetzung (BV) zwischen Ok (15:30) und Ob (15:30).",
        options: [
          "Richtung 330°, Distanz 0,8 sm",
          "Richtung 150°, Distanz 0,8 sm",
          "Richtung 330°, Distanz 1,5 sm",
          "Richtung 045°, Distanz 1,0 sm"
        ],
        correctIndex: 0,
        explanation: "Die Richtung vom Ok zum Ob beträgt 330°, die gemessene Distanz 0,8 sm."
      },
      {
        number: 9,
        question: "Was bedeutet das Symbol eines Ankers mit einer roten Verbotslinie in der Karte?",
        options: [
          "Ankerverbot",
          "Liegeverbot",
          "Fischereiverbot",
          "Sperrgebiet für Yachten"
        ],
        correctIndex: 0,
        explanation: "Das Ankersymbol mit einer diagonalen roten Linie bedeutet ein behördliches Ankerverbot in diesem Bereich."
      }
    ]
  },
  {
    id: 4,
    title: "Navigationsaufgabe 4",
    description: "Ausgangslage: Die Yacht steht um 08:00 Uhr dicht bei der Leuchttonne 'Elbe 1'. Es soll der Elbe aufwärts nach Cuxhaven gefolgt werden. Die Geschwindigkeit der Yacht beträgt 9,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die geographische Position der Tonne 'Elbe 1' an.",
        options: [
          "54° 00,0' N, 008° 06,6' E",
          "54° 01,2' N, 008° 08,0' E",
          "53° 59,1' N, 008° 05,3' E",
          "54° 00,5' N, 008° 04,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position von Elbe 1 lautet 54° 00,0' N, 008° 06,6' E."
      },
      {
        number: 2,
        question: "Der rechtweisende Kurs (rwK) von 'Elbe 1' zur Tonne 'Elbe 3' beträgt laut Karte 095°. Wie lautet dieser?",
        options: [
          "095°",
          "100°",
          "090°",
          "085°"
        ],
        correctIndex: 0,
        explanation: "Der abgelesene rwK beträgt 095°."
      },
      {
        number: 3,
        question: "Mw ist +1° (Ost), Abl ist +2° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "092°",
          "098°",
          "096°",
          "094°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 095° - 1° - 2° = 092°."
      },
      {
        number: 4,
        question: "Die Distanz zwischen 'Elbe 1' und 'Elbe 3' beträgt laut Karte...",
        options: [
          "4,5 sm",
          "5,5 sm",
          "3,5 sm",
          "6,0 sm"
        ],
        correctIndex: 0,
        explanation: "Am Breitenmaßstab gemessen beträgt die Distanz 4,5 sm."
      },
      {
        number: 5,
        question: "Wie lange braucht die Yacht für diese Strecke bei einer Fahrt über Grund von 9,0 kn?",
        options: [
          "30 Min.",
          "20 Min.",
          "40 Min.",
          "15 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V * 60 = 4,5 / 9 * 60 = 30 Minuten."
      },
      {
        number: 6,
        question: "Unterwegs wird das Feuer 'Neuwerk' gepeilt. MgP = 220°. Mw = +1°, Abl = +2°. Wie lautet die rwP?",
        options: [
          "223°",
          "217°",
          "219°",
          "221°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 220° + 1° + 2° = 223°."
      },
      {
        number: 7,
        question: "Durch Zeichnen der rwP (223°) erhalten wir den Schnittpunkt mit dem Kurs. Wo befindet sich das Boot zur Peilzeit?",
        options: [
          "53° 59,7' N, 008° 11,2' E",
          "53° 58,5' N, 008° 09,0' E",
          "54° 00,2' N, 008° 12,5' E",
          "53° 59,0' N, 008° 10,0' E"
        ],
        correctIndex: 0,
        explanation: "Der Schnittpunkt der Peillinie mit dem rwK (095°) ergibt die Position 53° 59,7' N, 008° 11,2' E."
      },
      {
        number: 8,
        question: "Was bedeutet die Abkürzung 'TCTS' an einem Fahrwasserrand in der Elbe?",
        options: [
          "Traffic Control Tracking System (Verkehrsüberwachungssystem)",
          "Tidal Current Tracking Station",
          "Temporary Coast Guard Station",
          "Tide Control Tower Station"
        ],
        correctIndex: 0,
        explanation: "TCTS steht für ein System zur Verkehrsüberwachung und Funkberichterstattung im Revier."
      },
      {
        number: 9,
        question: "Was besagt das Schild 'Rechtsfahrgebot' im Fahrwasser der Elbe für Sportboote?",
        options: [
          "Es muss so weit rechts wie sicher und praktisch möglich gefahren werden.",
          "Es muss immer am rechten Tonnenstrich gefahren werden.",
          "Überholen ist nur auf der rechten Seite erlaubt.",
          "Die Elbe darf nur an Steuerbord-Tonnen passiert werden."
        ],
        correctIndex: 0,
        explanation: "Das Rechtsfahrgebot der SeeSchStrO verlangt, dass Fahrzeuge sich so weit an der Steuerbordseite des Fahrwassers halten müssen, wie es sicher und möglich ist."
      }
    ]
  },
  {
    id: 5,
    title: "Navigationsaufgabe 5",
    description: "Ausgangslage: Eine Yacht läuft in der Deutschen Bucht nördlich von Wangerooge. Um 11:00 Uhr steht die Yacht dicht bei der Leuchttonne 'Wangerooge-O'. Die Fahrt über Grund (Fdg) beträgt 6,5 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Wangerooge-O' an.",
        options: [
          "53° 49,0' N, 007° 58,8' E",
          "53° 48,0' N, 007° 56,2' E",
          "53° 50,2' N, 008° 00,5' E",
          "53° 49,5' N, 007° 57,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position wird am Rand der Karte ermittelt: 53° 49,0' N, 007° 58,8' E."
      },
      {
        number: 2,
        question: "Von 'Wangerooge-O' wird Kurs zur Tonne 'Jade 1' abgesetzt. Welcher rwK ergibt sich aus der Karte?",
        options: [
          "085°",
          "090°",
          "080°",
          "075°"
        ],
        correctIndex: 0,
        explanation: "Das Lineal zeigt einen Kurs von 085° zur Tonne Jade 1."
      },
      {
        number: 3,
        question: "Mw = +2° (Ost), Abl = -4° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "087°",
          "083°",
          "089°",
          "081°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 085° - (+2°) - (-4°) = 085° - 2° + 4° = 087°."
      },
      {
        number: 4,
        question: "Welche Distanz misst die Route von 'Wangerooge-O' nach 'Jade 1'?",
        options: [
          "6,5 sm",
          "7,5 sm",
          "5,5 sm",
          "8,0 sm"
        ],
        correctIndex: 0,
        explanation: "Am Breitenmaßstab abgegriffen beträgt die Distanz genau 6,5 sm."
      },
      {
        number: 5,
        question: "Bestimmen Sie den Koppelort (Ok) für 12:00 Uhr bei Fdg = 6,5 kn.",
        options: [
          "53° 49,6' N, 008° 09,8' E",
          "53° 48,0' N, 008° 05,0' E",
          "53° 51,0' N, 008° 12,0' E",
          "53° 49,0' N, 008° 08,0' E"
        ],
        correctIndex: 0,
        explanation: "Fahrtdauer = 1 Std. Zurückgelegte Distanz = 6,5 sm. Auf der Kurslinie abgetragen ergibt sich 53° 49,6' N, 008° 09,8' E."
      },
      {
        number: 6,
        question: "Um 12:00 Uhr wird der Leuchtturm Mellumplate gepeilt. MgP = 175°. Berechnen Sie die rwP (Mw = +2°, Abl = -4°).",
        options: [
          "173°",
          "177°",
          "179°",
          "171°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 175° + 2° + (-4°) = 173°."
      },
      {
        number: 7,
        question: "Zeichnen Sie die rwP (173°) in die Seekarte ein. Sie schneidet den Peilturm Mellumplate. Welches Signal zeigt dieser Turm laut Abkürzung 'LFl.WR.8s'?",
        options: [
          "Langes Blinkfeuer, weiß-rot, Wiederkehr 8 Sekunden",
          "Blitzfeuer, weiß-rot, alle 8 Sekunden",
          "Festfeuer, weiß-rot, 8 Sekunden",
          "Lauflicht, weiß-rot, 8 Sekunden"
        ],
        correctIndex: 0,
        explanation: "LFl steht für Long Flashing (Langes Blinkfeuer). WR steht für White/Red (Weiß/Rot). 8s ist die Wiederkehr (8 Sekunden)."
      },
      {
        number: 8,
        question: "Um 12:15 Uhr weicht der Ob um 1,0 sm nach Norden ab. Welche Strömungsrichtung vermuten Sie hier?",
        options: [
          "Nordwärts setzender Gezeitenstrom (Flutstrom)",
          "Südwärts setzender Ebbstrom",
          "Keine Strömung",
          "Oststrom"
        ],
        correctIndex: 0,
        explanation: "Da das Boot nach Norden versetzt wurde, setzt die Strömung nach Norden (z.B. einlaufende Flut in Richtung Jade/Weser)."
      },
      {
        number: 9,
        question: "Was bedeutet das Flachwassersymbol 'Watt' (grün/gelbe Schraffur) in der Seekarte?",
        options: [
          "Flächen, die bei Niedrigwasser trockenfallen.",
          "Sperrgebiet für alle Fahrzeuge.",
          "Naturschutzgebiet, das nicht betreten werden darf.",
          "Ankerplätze für Flachwasserboote."
        ],
        correctIndex: 0,
        explanation: "Grün/gelbe Trockenflächen (Watt) sind Bereiche, die bei Ebbe trockenfallen (Tidehochwasser überflutet)."
      }
    ]
  },
  {
    id: 6,
    title: "Navigationsaufgabe 6",
    description: "Ausgangslage: Die Yacht steht im Weser-Fahrwasser nahe der Leuchttonne 'Weser' um 13:00 Uhr. Kurs wird Elbe-abwärts gesetzt. Die Fahrt über Grund beträgt 7,5 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Weser' an.",
        options: [
          "53° 53,5' N, 007° 59,5' E",
          "53° 52,1' N, 007° 57,0' E",
          "53° 55,0' N, 008° 02,0' E",
          "53° 54,0' N, 008° 00,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position lautet laut Seekarte 53° 53,5' N, 007° 59,5' E."
      },
      {
        number: 2,
        question: "Der rechtweisende Kurs (rwK) zur nächsten Kursänderungsmarke beträgt 160°. Tragen Sie diesen Kurs in der Karte ein.",
        options: [
          "160°",
          "165°",
          "155°",
          "170°"
        ],
        correctIndex: 0,
        explanation: "Der rwK beträgt 160°."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = +3° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "156°",
          "164°",
          "162°",
          "158°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 160° - 1° - 3° = 156°."
      },
      {
        number: 4,
        question: "Welche Strecke legt die Yacht bis 14:12 Uhr (48 Minuten) zurück?",
        options: [
          "6,0 sm",
          "7,5 sm",
          "5,0 sm",
          "8,0 sm"
        ],
        correctIndex: 0,
        explanation: "Formel: d = Fdg * (t / 60) = 7,5 * (48 / 60) = 7,5 * 0,8 = 6,0 sm."
      },
      {
        number: 5,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) um 14:12 Uhr.",
        options: [
          "53° 47,9' N, 008° 02,9' E",
          "53° 49,0' N, 008° 05,0' E",
          "53° 46,5' N, 008° 01,0' E",
          "53° 48,5' N, 008° 03,5' E"
        ],
        correctIndex: 0,
        explanation: "Vom Startpunkt 6,0 sm auf Kurs 160° abtragen ergibt 53° 47,9' N, 008° 02,9' E."
      },
      {
        number: 6,
        question: "Um 14:12 Uhr wird Mellumplate-Leuchtturm gepeilt. MgP = 310°. Berechnen Sie die rwP (Mw = +1°, Abl = +3°).",
        options: [
          "314°",
          "306°",
          "308°",
          "312°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 310° + 1° + 3° = 314°."
      },
      {
        number: 7,
        question: "Nach Einzeichnen der rwP (314°) bestimmen Sie den Ob um 14:12 Uhr.",
        options: [
          "53° 48,2' N, 008° 02,0' E",
          "53° 47,5' N, 008° 03,5' E",
          "53° 49,0' N, 008° 01,0' E",
          "53° 47,0' N, 008° 04,0' E"
        ],
        correctIndex: 0,
        explanation: "Der Schnittpunkt der Peillinie mit dem rwK ergibt 53° 48,2' N, 008° 02,0' E."
      },
      {
        number: 8,
        question: "Bestimmen Sie die BV für 14:12 Uhr.",
        options: [
          "Richtung 335°, Distanz 0,6 sm",
          "Richtung 155°, Distanz 0,6 sm",
          "Richtung 335°, Distanz 1,2 sm",
          "Richtung 090°, Distanz 0,5 sm"
        ],
        correctIndex: 0,
        explanation: "Die Richtung vom Ok zum Ob beträgt 335°, die Distanz 0,6 sm."
      },
      {
        number: 9,
        question: "Welches Symbol in der Karte markiert ein Sperrgebiet (z.B. militärisch oder Naturschutz)?",
        options: [
          "Eine gestrichelte rote oder magenta Linie mit Aufschriften wie 'Sperrgebiet' oder 'Sicherheit'",
          "Ein rotes Dreieck",
          "Ein blaues Ankerverbotsschild",
          "Ein grünes Kreuz"
        ],
        correctIndex: 0,
        explanation: "Sperrgebiete werden mit magenta- oder rot-gestrichelten Begrenzungslinien und erklärenden Texten gekennzeichnet."
      }
    ]
  },
  {
    id: 7,
    title: "Navigationsaufgabe 7",
    description: "Ausgangslage: Die Yacht steht um 09:30 Uhr dicht bei der Tonne 'Dovetief' (Norderney-Seegatt). Es soll Kurs auf Helgoland genommen werden. Die Fahrt über Grund beträgt 6,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Tonne 'Dovetief' an.",
        options: [
          "53° 44,5' N, 007° 13,8' E",
          "53° 43,2' N, 007° 12,0' E",
          "53° 45,8' N, 007° 15,5' E",
          "53° 44,0' N, 007° 11,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position von Dovetief lautet 53° 44,5' N, 007° 13,8' E."
      },
      {
        number: 2,
        question: "Vom Dovetief wird Kurs nach Helgoland abgesetzt. Welcher rwK ergibt sich aus der Karte?",
        options: [
          "345°",
          "350°",
          "340°",
          "355°"
        ],
        correctIndex: 0,
        explanation: "Die Kurslinie von Dovetief nach Helgoland verläuft in Richtung 345°."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = -2° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "346°",
          "342°",
          "344°",
          "348°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 345° - (+1°) - (-2°) = 345° - 1° + 2° = 346°."
      },
      {
        number: 4,
        question: "Die Distanz nach Helgoland (Tonne Helgoland-S) beträgt laut Karte...",
        options: [
          "30,0 sm",
          "28,5 sm",
          "32,0 sm",
          "35,0 sm"
        ],
        correctIndex: 0,
        explanation: "Die gemessene Distanz beträgt genau 30,0 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die Fahrtdauer bis Helgoland bei einer Fdg von 6,0 kn.",
        options: [
          "5 Std. 00 Min.",
          "4 Std. 30 Min.",
          "5 Std. 30 Min.",
          "6 Std. 00 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 30 sm / 6 kn = 5,0 Std."
      },
      {
        number: 6,
        question: "Um 12:00 Uhr (nach 2,5 Stunden Fahrt) wird das Helgoland-Hauptfeuer gepeilt. MgP = 085°. Mw = +1°, Abl = -2°. Berechnen Sie die rwP.",
        options: [
          "084°",
          "086°",
          "088°",
          "082°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 085° + 1° + (-2°) = 084°."
      },
      {
        number: 7,
        question: "Zeichnen Sie den Koppelort (Ok) für 12:00 Uhr ein. Wie lautet seine Position (d = 15,0 sm auf rwK 345°)?",
        options: [
          "53° 59,0' N, 007° 07,2' E",
          "53° 58,0' N, 007° 09,0' E",
          "54° 00,5' N, 007° 05,0' E",
          "53° 57,5' N, 007° 08,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Koppelposition nach 15 sm Fahrt auf 345° lautet 53° 59,0' N, 007° 07,2' E."
      },
      {
        number: 8,
        question: "Nach Einzeichnen des rwP-Strahls (084°) schneidet dieser die Kurslinie. Welchen Ob bestimmen Sie um 12:00 Uhr?",
        options: [
          "53° 59,0' N, 007° 07,2' E",
          "53° 58,5' N, 007° 08,0' E",
          "53° 59,5' N, 007° 06,5' E",
          "53° 57,8' N, 007° 09,5' E"
        ],
        correctIndex: 0,
        explanation: "Da der Peilstrahl die Kurslinie genau im Ok schneidet (Peilung verläuft exakt durch den Koppelpunkt), stimmt der Ob mit dem Ok überein: 53° 59,0' N, 007° 07,2' E (keine Versetzung)."
      },
      {
        number: 9,
        question: "Welche Bedeutung hat das Seekartensymbol 'Naturpark' (grüne Begrenzungslinie)?",
        options: [
          "Befahrens- und Verhaltensregeln zum Schutz der Natur beachten.",
          "Ankerplatz für Naturfreunde.",
          "Fahrverbot für alle Yachten.",
          "Hier darf kein Müll entsorgt werden (nur außerhalb)."
        ],
        correctIndex: 0,
        explanation: "Ein Naturpark-Symbol verweist auf Schutzgebiete mit besonderen Naturschutzregeln (z.B. Geschwindigkeitsbegrenzungen, Wegegebote)."
      }
    ]
  },
  {
    id: 8,
    title: "Navigationsaufgabe 8",
    description: "Ausgangslage: Die Yacht steht um 15:00 Uhr dicht bei der Tonne 'Elbe 3'. Sie läuft mit einer Fdg von 8,0 kn aus der Elbmündung heraus Richtung Westen.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Elbe 3' an.",
        options: [
          "53° 59,5' N, 008° 18,5' E",
          "53° 58,2' N, 008° 16,0' E",
          "54° 00,1' N, 008° 20,2' E",
          "53° 59,0' N, 008° 17,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position von Elbe 3 lautet 53° 59,5' N, 008° 18,5' E."
      },
      {
        number: 2,
        question: "Es wird Kurs West (rwK = 270°) gesteuert. Tragen Sie diesen Kurs in der Karte ein.",
        options: [
          "270°",
          "275°",
          "265°",
          "280°"
        ],
        correctIndex: 0,
        explanation: "Der Kurs verläuft direkt nach Westen (270°)."
      },
      {
        number: 3,
        question: "Mw = +2° (Ost), Abl = +4° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "264°",
          "276°",
          "274°",
          "266°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 270° - 2° - 4° = 264°."
      },
      {
        number: 4,
        question: "Welche Strecke (d) wird bis 16:15 Uhr zurückgelegt?",
        options: [
          "10,0 sm",
          "8,0 sm",
          "12,0 sm",
          "9,5 sm"
        ],
        correctIndex: 0,
        explanation: "Fahrtdauer = 1 Std. 15 Min. = 1,25 Std. Distanz = 8 kn * 1,25 h = 10,0 sm."
      },
      {
        number: 5,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) für 16:15 Uhr.",
        options: [
          "53° 59,5' N, 008° 01,5' E",
          "53° 59,5' N, 008° 05,0' E",
          "53° 58,0' N, 008° 00,0' E",
          "54° 00,5' N, 008° 03,0' E"
        ],
        correctIndex: 0,
        explanation: "Da der Kurs 270° (rein westlich) ist, bleibt die Breite identisch (53° 59,5' N) und die Länge verschiebt sich um 10,0 sm nach Westen zu 008° 01,5' E."
      },
      {
        number: 6,
        question: "Um 16:15 Uhr wird eine Peilung durchgeführt. Die Magnetkompasspeilung (MgP) zu Scharhörn-Bake beträgt 135°. Berechnen Sie die rwP (Mw = +2°, Abl = +4°).",
        options: [
          "141°",
          "129°",
          "137°",
          "133°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 135° + 2° + 4° = 141°."
      },
      {
        number: 7,
        question: "Nach Einzeichnen der rwP (141°) stellen Sie fest, dass der Ob bei 53° 59,5' N, 008° 03,0' E liegt. Bestimmen Sie die Besteckversetzung.",
        options: [
          "Richtung 090° (Ost), Distanz 1,5 sm",
          "Richtung 270° (West), Distanz 1,5 sm",
          "Richtung 090° (Ost), Distanz 0,8 sm",
          "Richtung 180° (Süd), Distanz 1,0 sm"
        ],
        correctIndex: 0,
        explanation: "Der Ok lag bei 008° 01,5' E, der Ob liegt bei 008° 03,0' E. Der Versatz geht nach Osten (090°) über eine Distanz von 1,5 sm."
      },
      {
        number: 8,
        question: "Was bedeutet das Symbol 'Fischerei' (zwei sich berührende Dreiecke) in diesem Seegebiet?",
        options: [
          "Gebiet mit intensiver Fischerei; erhöhte Ausguckpflicht",
          "Fischzuchtanlage",
          "Fischereiverbot",
          "Ankergebiet für Fischer"
        ],
        correctIndex: 0,
        explanation: "Zwei Dreiecke markieren Gebiete mit erhöhter Fischereiaktivität (z.B. Krabbenkutter), wo besondere Vorsicht geboten ist."
      },
      {
        number: 9,
        question: "Welches Schallsignal muss ein fischendes Fahrzeug bei verminderter Sicht abgeben?",
        options: [
          "Ein langer, zwei kurze Töne (alle 2 Minuten)",
          "Ein kurzer Ton (jede Minute)",
          "Zwei lange Töne (alle 2 Minuten)",
          "Drei kurze Töne (alle 2 Minuten)"
        ],
        correctIndex: 0,
        explanation: "Manövrierbehinderte oder fischende Fahrzeuge geben bei Nebel das Schallsignal 'lang-kurz-kurz' ab."
      }
    ]
  },
  {
    id: 9,
    title: "Navigationsaufgabe 9",
    description: "Ausgangslage: Die Yacht läuft aus dem Südhafen von Helgoland aus. Um 08:30 Uhr steht sie dicht bei der Hafeneinfahrt. Es wird Kurs nach Süden abgesetzt. Die Fdg beträgt 7,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Helgoländer Südhafen-Ausfahrt an.",
        options: [
          "54° 10,6' N, 007° 53,4' E",
          "54° 11,2' N, 007° 52,0' E",
          "54° 09,5' N, 007° 55,0' E",
          "54° 12,0' N, 007° 51,5' E"
        ],
        correctIndex: 0,
        explanation: "Die Position am Randmaßstab abgelesen lautet 54° 10,6' N, 007° 53,4' E."
      },
      {
        number: 2,
        question: "Vom Ausgangspunkt wird Kurs nach Süden (rwK = 185°) abgesetzt. Tragen Sie diesen Kurs in der Karte ein.",
        options: [
          "185°",
          "190°",
          "180°",
          "195°"
        ],
        correctIndex: 0,
        explanation: "Der Kurs verläuft fast genau nach Süden (185°)."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = -1° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "185°",
          "187°",
          "183°",
          "189°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 185° - (+1°) - (-1°) = 185° - 1° + 1° = 185°."
      },
      {
        number: 4,
        question: "Welche Distanz wird in 2 Stunden (bis 10:30 Uhr) zurückgelegt?",
        options: [
          "14,0 sm",
          "10,0 sm",
          "12,5 sm",
          "15,0 sm"
        ],
        correctIndex: 0,
        explanation: "Distanz: 7 kn * 2 h = 14,0 sm."
      },
      {
        number: 5,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) um 10:30 Uhr.",
        options: [
          "53° 56,7' N, 007° 51,2' E",
          "53° 58,0' N, 007° 53,5' E",
          "53° 55,0' N, 007° 50,0' E",
          "53° 57,5' N, 007° 52,0' E"
        ],
        correctIndex: 0,
        explanation: "Wir tragen 14,0 sm auf der Kurslinie 185° ab. Dies ergibt 53° 56,7' N, 007° 51,2' E."
      },
      {
        number: 6,
        question: "Um 10:30 Uhr wird die Leuchttonne Helgoland-O gepeilt. MgP = 040°. Berechnen Sie die rwP (Mw = +1°, Abl = -1°).",
        options: [
          "040°",
          "042°",
          "038°",
          "044°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 040° + 1° + (-1°) = 040°."
      },
      {
        number: 7,
        question: "Zeichnen Sie die rwP (040°) in die Karte. Welchen Ob erhalten Sie um 10:30 Uhr?",
        options: [
          "53° 56,7' N, 007° 51,2' E",
          "53° 55,5' N, 007° 50,0' E",
          "53° 57,2' N, 007° 52,5' E",
          "53° 56,0' N, 007° 51,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Peillinie schneidet die Kurslinie exakt im Koppelort. Der Ob lautet 53° 56,7' N, 007° 51,2' E."
      },
      {
        number: 8,
        question: "In der Seekarte finden Sie ein Symbol eines Blitzes in einem roten Kreis mit der Aufschrift 'U-Kabel'. Was bedeutet dies?",
        options: [
          "Unterwasserkabel mit Ankerverbot",
          "Elektrische Sperrzone",
          "Unterwasser-Stromerzeuger",
          "Fischzuchtanlage mit Stromleitung"
        ],
        correctIndex: 0,
        explanation: "Dieses Symbol warnt vor Unterwasserkabeln, in deren Nähe Ankern und Schleppfischen wegen Beschädigungsgefahr verboten ist."
      },
      {
        number: 9,
        question: "Welches Ausweichmanöver muss eine Yacht unter Motor durchführen, wenn sie auf Kollisionskurs mit einem Segelschiff unter Segeln ist?",
        options: [
          "Die Yacht unter Motor muss ausweichen (Maschinenfahrzeug weicht Segelfahrzeug aus).",
          "Das Segelschiff muss ausweichen.",
          "Beide müssen nach Steuerbord ausweichen.",
          "Wer von Backbord kommt, weicht aus."
        ],
        correctIndex: 0,
        explanation: "Laut KVR (Regel 18) weichen Maschinenfahrzeuge den Segelfahrzeugen aus."
      }
    ]
  },
  {
    id: 10,
    title: "Navigationsaufgabe 10",
    description: "Ausgangslage: Die Yacht läuft nördlich von Wangerooge im Weser-Fahrwasser. Um 10:30 Uhr steht sie dicht bei der Leuchttonne 'Weser 1'. Es soll der Weser aufwärts gefolgt werden. Die Fdg beträgt 8,5 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Weser 1' an.",
        options: [
          "53° 51,8' N, 007° 53,2' E",
          "53° 50,2' N, 007° 51,0' E",
          "53° 53,0' N, 007° 55,0' E",
          "53° 51,0' N, 007° 52,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position wird am Kartenrand abgelesen."
      },
      {
        number: 2,
        question: "Von der Tonne wird der Kurs zur Tonne 'Weser 3' abgesetzt. Welcher rwK ergibt sich aus der Karte?",
        options: [
          "225°",
          "230°",
          "220°",
          "235°"
        ],
        correctIndex: 0,
        explanation: "Der gemessene rwK beträgt 225°."
      },
      {
        number: 3,
        question: "Mw = +2° (Ost), Abl = +3° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "220°",
          "230°",
          "228°",
          "222°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 225° - 2° - 3° = 220°."
      },
      {
        number: 4,
        question: "Die Distanz zwischen 'Weser 1' und 'Weser 3' beträgt...",
        options: [
          "8,5 sm",
          "7,0 sm",
          "9,5 sm",
          "10,0 sm"
        ],
        correctIndex: 0,
        explanation: "Am Breitenmaßstab abgegriffen beträgt die Strecke 8,5 sm."
      },
      {
        number: 5,
        question: "Wie lange braucht die Yacht für diese Distanz bei einer Fdg von 8,5 kn?",
        options: [
          "1 Std. 00 Min.",
          "45 Min.",
          "1 Std. 15 Min.",
          "50 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 8,5 sm / 8,5 kn = 1,0 Std. = 60 Min."
      },
      {
        number: 6,
        question: "Unterwegs wird das Wangerooge-Ostfeuer gepeilt. MgP = 315°. Berechnen Sie die rwP (Mw = +2°, Abl = +3°).",
        options: [
          "320°",
          "310°",
          "314°",
          "316°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 315° + 2° + 3° = 320°."
      },
      {
        number: 7,
        question: "Zeichnen Sie die rwP (320°) in die Seekarte ein. Wo schneidet sie die Kurslinie (Ob um 11:00 Uhr, nach 4,25 sm Fahrt)?",
        options: [
          "53° 48,8' N, 007° 47,2' E",
          "53° 47,0' N, 007° 45,0' E",
          "53° 50,0' N, 007° 49,0' E",
          "53° 48,0' N, 007° 46,0' E"
        ],
        correctIndex: 0,
        explanation: "Der Schnittpunkt aus rwK 225° und der Peillinie 320° ergibt 53° 48,8' N, 007° 47,2' E."
      },
      {
        number: 8,
        question: "Was bedeutet das Kartensymbol einer schwarzen Linie mit Querstrichen rechtwinklig zum Ufer?",
        options: [
          "Buhne (Küstenschutzbauwerk)",
          "Anleger für Yachten",
          "Grenze des Schutzgebietes",
          "Flussmündung"
        ],
        correctIndex: 0,
        explanation: "Rechtwinklige Striche zum Ufer stellen Buhnen dar, die dem Küstenschutz und der Strömungsbeeinflussung dienen."
      },
      {
        number: 9,
        question: "Darf eine Buhne bei Tidehochwasser überfahren werden?",
        options: [
          "Nein, da sie knapp unter der Wasseroberfläche liegen kann und erhebliche Beschädigungsgefahr besteht.",
          "Ja, Boote mit geringem Tiefgang dürfen immer drüber fahren.",
          "Ja, tagsüber bei guter Sicht.",
          "Nur mit Genehmigung der Küstenwache."
        ],
        correctIndex: 0,
        explanation: "Buhnen stellen bei Hochwasser unsichtbare Unterwasserhindernisse dar; das Überfahren ist extrem gefährlich."
      }
    ]
  },
  {
    id: 11,
    title: "Navigationsaufgabe 11",
    description: "Ausgangslage: Die Yacht steht um 12:00 Uhr dicht bei der Leuchttonne 'Minsener Oog' (Jade-Reede). Sie läuft Kurs Richtung Elbe-Einfahrt. Die Fdg beträgt 6,5 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Minsener Oog' an.",
        options: [
          "53° 47,2' N, 008° 01,5' E",
          "53° 46,0' N, 007° 59,0' E",
          "53° 48,5' N, 008° 03,0' E",
          "53° 47,0' N, 008° 00,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position lautet laut Seekarte 53° 47,2' N, 008° 01,5' E."
      },
      {
        number: 2,
        question: "Es wird Kurs zur Tonne 'Elbe 2' abgesetzt. Welcher rwK ergibt sich aus der Karte?",
        options: [
          "045°",
          "050°",
          "040°",
          "055°"
        ],
        correctIndex: 0,
        explanation: "Der gemessene rwK beträgt 045°."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = +2° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "042°",
          "048°",
          "046°",
          "044°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 045° - 1° - 2° = 042°."
      },
      {
        number: 4,
        question: "Die Distanz zwischen 'Minsener Oog' und 'Elbe 2' beträgt...",
        options: [
          "13,0 sm",
          "11,5 sm",
          "14,5 sm",
          "15,0 sm"
        ],
        correctIndex: 0,
        explanation: "Das Abgreifen auf der Karte ergibt eine Distanz von 13,0 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die Fahrtzeit bei einer Fdg von 6,5 kn.",
        options: [
          "2 Std. 00 Min.",
          "1 Std. 45 Min.",
          "2 Std. 15 Min.",
          "1 Std. 30 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 13 sm / 6,5 kn = 2,0 Std. = 120 Min."
      },
      {
        number: 6,
        question: "Unterwegs (um 13:00 Uhr) wird der Leuchtturm 'Alte Weser' gepeilt. MgP = 270°. Berechnen Sie die rwP (Mw = +1°, Abl = +2°).",
        options: [
          "273°",
          "267°",
          "271°",
          "269°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 270° + 1° + 2° = 273°."
      },
      {
        number: 7,
        question: "Welchen Ob bestimmen Sie um 13:00 Uhr (zurückgelegte Distanz 6,5 sm)?",
        options: [
          "53° 51,8' N, 008° 09,2' E",
          "53° 50,5' N, 008° 07,0' E",
          "53° 53,0' N, 008° 11,0' E",
          "53° 51,0' N, 008° 08,0' E"
        ],
        correctIndex: 0,
        explanation: "Der Koppelort (Ok) nach 6,5 sm Fahrt auf 045° liegt bei 53° 51,8' N, 008° 09,2' E."
      },
      {
        number: 8,
        question: "In der Seekarte befindet sich nahe der Route ein rot-weißer Kreis mit dem Symbol 'Windpark'. Was müssen Sie hier beachten?",
        options: [
          "Sicherheitsabstand einhalten, Durchfahrtsverbot für die meisten Freizeitfahrzeuge.",
          "Hier darf geankert werden.",
          "Hier herrscht Windschatten.",
          "Fischerei ist hier besonders empfohlen."
        ],
        correctIndex: 0,
        explanation: "Windparks sind für die private Schifffahrt in der Regel gesperrt; Sicherheitszonen müssen unbedingt umfahren werden."
      },
      {
        number: 9,
        question: "Welche Lichterführung hat ein manövrierunfähiges Fahrzeug in Fahrt bei Nacht?",
        options: [
          "Zwei rote Rundumlichter übereinander, Seitenlichter und Hecklicht.",
          "Zwei grüne Rundumlichter übereinander.",
          "Ein rotes Rundumlicht.",
          "Ein weißes Rundumlicht."
        ],
        correctIndex: 0,
        explanation: "Ein manövrierunfähiges Fahrzeug in Fahrt zeigt zwei rote Rundumlichter übereinander sowie Seitenlichter und Hecklicht (sofern es Fahrt durchs Wasser macht)."
      }
    ]
  },
  {
    id: 12,
    title: "Navigationsaufgabe 12",
    description: "Ausgangslage: Die Yacht steht um 14:30 Uhr dicht bei der Leuchttonne 'Helgoland-O'. Es soll Kurs auf die Jade-Mündung genommen werden. Fdg beträgt 7,5 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Helgoland-O' an.",
        options: [
          "54° 10,8' N, 007° 55,4' E",
          "54° 11,5' N, 007° 53,0' E",
          "54° 09,2' N, 007° 57,1' E",
          "54° 12,0' N, 007° 56,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position von Helgoland-O lautet 54° 10,8' N, 007° 55,4' E."
      },
      {
        number: 2,
        question: "Es wird Kurs zur Tonne 'Jade' abgesetzt. Welcher rwK ergibt sich aus der Seekarte?",
        options: [
          "195°",
          "200°",
          "190°",
          "205°"
        ],
        correctIndex: 0,
        explanation: "Der gemessene rwK beträgt 195°."
      },
      {
        number: 3,
        question: "Mw = +2° (Ost), Abl = -3° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "196°",
          "194°",
          "192°",
          "198°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 195° - (+2°) - (-3°) = 195° - 2° + 3° = 196°."
      },
      {
        number: 4,
        question: "Die Distanz zwischen 'Helgoland-O' und 'Jade' beträgt...",
        options: [
          "18,8 sm",
          "17,0 sm",
          "20,5 sm",
          "19,8 sm"
        ],
        correctIndex: 0,
        explanation: "Die gemessene Distanz am Kartenrand beträgt 18,8 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die voraussichtliche Ankunftszeit (ETA) an der Tonne 'Jade' bei Fdg = 7,5 kn.",
        options: [
          "17:00 Uhr",
          "16:45 Uhr",
          "17:15 Uhr",
          "16:30 Uhr"
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 18,8 / 7,5 = 2,5 Stunden (2 Std. 30 Min.). Abfahrt war um 14:30 Uhr, d.h. Ankunft um 17:00 Uhr."
      },
      {
        number: 6,
        question: "Unterwegs (um 16:00 Uhr) wird Mellumplate-Leuchtturm gepeilt. MgP = 090°. Berechnen Sie die rwP (Mw = +2°, Abl = -3°).",
        options: [
          "089°",
          "091°",
          "093°",
          "087°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 090° + 2° + (-3°) = 089°."
      },
      {
        number: 7,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) für 16:00 Uhr (zurückgelegte Distanz 11,25 sm auf rwK 195°).",
        options: [
          "53° 59,9' N, 007° 50,9' E",
          "53° 58,0' N, 007° 49,0' E",
          "54° 01,5' N, 007° 52,0' E",
          "53° 59,0' N, 007° 50,0' E"
        ],
        correctIndex: 0,
        explanation: "Das Abtragen von 11,25 sm auf 195° ab Startpunkt ergibt 53° 59,9' N, 007° 50,9' E."
      },
      {
        number: 8,
        question: "Nach Einzeichnen der rwP (089°) schneidet der Strahl den Kurs. Wie lautet der Ob um 16:00 Uhr?",
        options: [
          "53° 59,9' N, 007° 50,9' E",
          "53° 59,0' N, 007° 50,0' E",
          "54° 00,5' N, 007° 51,5' E",
          "53° 58,0' N, 007° 49,5' E"
        ],
        correctIndex: 0,
        explanation: "Der Ob deckt sich mit dem Ok, da keine Strömungsverschiebung stattgefunden hat."
      },
      {
        number: 9,
        question: "Was bedeutet das Symbol 'Sand' (S) oder 'Schlick' (M) in der Seekarte bei Tiefenangaben?",
        options: [
          "Bodenbeschaffenheit des Meeresgrundes (wichtig für Ankerhalt).",
          "Gefahr von Untiefen.",
          "Badeverbotszonen.",
          "Naturschutzgebiete."
        ],
        correctIndex: 0,
        explanation: "Buchstaben wie S (Sand), M (Mud/Schlick), R (Rock/Fels) geben die Bodenbeschaffenheit an, was für die Wahl des Ankerplatzes entscheidend ist."
      }
    ]
  },
  {
    id: 13,
    title: "Navigationsaufgabe 13",
    description: "Ausgangslage: Die Yacht steht um 07:45 Uhr dicht bei der Leuchttonne 'Key-Buoy' (Weser-Fahrwasser). Es soll Kurs auf Helgoland genommen werden. Die Fdg beträgt 8,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Key-Buoy' an.",
        options: [
          "53° 48,0' N, 008° 08,0' E",
          "53° 46,5' N, 008° 06,0' E",
          "53° 49,2' N, 008° 10,5' E",
          "53° 47,5' N, 008° 07,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position der Key-Buoy lautet 53° 48,0' N, 008° 08,0' E."
      },
      {
        number: 2,
        question: "Es wird Kurs nach Helgoland abgesetzt. Welcher rwK ergibt sich aus der Karte?",
        options: [
          "315°",
          "320°",
          "310°",
          "325°"
        ],
        correctIndex: 0,
        explanation: "Die Kurslinie zeigt einen rwK von 315°."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = +4° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "310°",
          "320°",
          "318°",
          "312°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 315° - 1° - 4° = 310°."
      },
      {
        number: 4,
        question: "Die Distanz von 'Key-Buoy' nach Helgoland (Südhafen) beträgt...",
        options: [
          "24,0 sm",
          "22,5 sm",
          "25,0 sm",
          "26,5 sm"
        ],
        correctIndex: 0,
        explanation: "Die Distanzmessung in der Karte ergibt 24,0 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die voraussichtliche Fahrtzeit nach Helgoland bei einer Fdg von 8,0 kn.",
        options: [
          "3 Std. 00 Min.",
          "2 Std. 45 Min.",
          "3 Std. 15 Min.",
          "2 Std. 30 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 24 sm / 8 kn = 3,0 Stunden."
      },
      {
        number: 6,
        question: "Unterwegs (um 09:15 Uhr) wird der Leuchtturm Roter Sand gepeilt. MgP = 180°. Berechnen Sie die rwP (Mw = +1°, Abl = +4°).",
        options: [
          "185°",
          "175°",
          "181°",
          "179°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 180° + 1° + 4° = 185°."
      },
      {
        number: 7,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) für 09:15 Uhr (zurückgelegte Distanz 12,0 sm auf rwK 315°).",
        options: [
          "53° 56,5' N, 007° 54,8' E",
          "53° 55,0' N, 007° 52,0' E",
          "53° 58,0' N, 007° 56,5' E",
          "53° 56,0' N, 007° 53,0' E"
        ],
        correctIndex: 0,
        explanation: "Vom Startpunkt 12,0 sm auf Kurs 315° abtragen ergibt 53° 56,5' N, 007° 54,8' E."
      },
      {
        number: 8,
        question: "Auf der Karte sehen Sie in der Nähe der Route das Symbol 'Wrack' mit Masten darüber gezeichnet. Was bedeutet dieses Symbol?",
        options: [
          "Ein Wrack, das bei Niedrigwasser sichtbar ist oder ein überragendes Hindernis darstellt.",
          "Eine Ankerstelle.",
          "Ein Messgerät der Küstenwache.",
          "Ein künstliches Riff."
        ],
        correctIndex: 0,
        explanation: "Ein Wrack mit überragenden Masten ist ein sichtbares Schifffahrtshindernis, das unbedingt umfahren werden muss."
      },
      {
        number: 9,
        question: "Welchen Mindestabstand sollten Sie zu bemannten Feuerschiffen oder Großtonnen einhalten?",
        options: [
          "Aus Sicherheitsgründen ausreichend Abstand halten (meist wird empfohlen mindestens 0,5 sm bis 1 sm).",
          "Kein Mindestabstand vorgegeben.",
          "Es darf direkt vorbeigefahren werden (10 m).",
          "Mindestens 100 m."
        ],
        correctIndex: 0,
        explanation: "Um Sog, Wellenschlag und Kollisionen bei plötzlichen Manövern zu vermeiden, hält man deutlichen Sicherheitsabstand zu festliegenden Schiffen."
      }
    ]
  },
  {
    id: 14,
    title: "Navigationsaufgabe 14",
    description: "Ausgangslage: Die Yacht steht um 11:15 Uhr dicht bei der Leuchttonne 'Elbe 2'. Es soll Kurs auf Cuxhaven gesteuert werden. Die Fdg beträgt 7,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Elbe 2' an.",
        options: [
          "54° 00,0' N, 008° 12,5' E",
          "53° 58,5' N, 008° 10,0' E",
          "54° 01,2' N, 008° 14,0' E",
          "53° 59,5' N, 008° 11,5' E"
        ],
        correctIndex: 0,
        explanation: "Die Position am Randmaßstab lautet 54° 00,0' N, 008° 12,5' E."
      },
      {
        number: 2,
        question: "Vom Ausgangspunkt wird Kurs Cuxhaven (rwK = 135°) abgesetzt. Tragen Sie diesen Kurs in der Karte ein.",
        options: [
          "135°",
          "140°",
          "130°",
          "145°"
        ],
        correctIndex: 0,
        explanation: "Die Kurslinie verläuft in Richtung 135°."
      },
      {
        number: 3,
        question: "Mw = +2° (Ost), Abl = -2° (West). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "135°",
          "139°",
          "131°",
          "137°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 135° - (+2°) - (-2°) = 135° - 2° + 2° = 135°."
      },
      {
        number: 4,
        question: "Die Distanz bis Cuxhaven (Amerikahafen) beträgt...",
        options: [
          "14,0 sm",
          "12,5 sm",
          "15,5 sm",
          "16,0 sm"
        ],
        correctIndex: 0,
        explanation: "Die Messung auf dem rwK-Strahl ergibt 14,0 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die voraussichtliche Ankunftszeit (ETA) in Cuxhaven bei einer Fdg von 7,0 kn.",
        options: [
          "13:15 Uhr",
          "13:00 Uhr",
          "13:30 Uhr",
          "12:45 Uhr"
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 14 sm / 7 kn = 2,0 Stunden. Abfahrt 11:15 Uhr, d.h. Ankunft um 13:15 Uhr."
      },
      {
        number: 6,
        question: "Unterwegs (um 12:15 Uhr) wird die Bake Scharhörn gepeilt. MgP = 230°. Berechnen Sie die rwP (Mw = +2°, Abl = -2°).",
        options: [
          "230°",
          "234°",
          "226°",
          "232°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 230° + 2° + (-2°) = 230°."
      },
      {
        number: 7,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) für 12:15 Uhr (zurückgelegte Distanz 7,0 sm auf rwK 135°).",
        options: [
          "53° 55,0' N, 008° 19,8' E",
          "53° 54,0' N, 008° 17,5' E",
          "53° 56,2' N, 008° 22,0' E",
          "53° 53,5' N, 008° 18,0' E"
        ],
        correctIndex: 0,
        explanation: "Vom Startpunkt 7,0 sm auf 135° abtragen ergibt 53° 55,0' N, 008° 19,8' E."
      },
      {
        number: 8,
        question: "In der Seekarte kreuzt Ihre Route ein Fahrwasser. Welche rechtliche Bedeutung haben Fahrwassermarkierungen (Lateralsystem) in diesem Bereich?",
        options: [
          "Sie begrenzen den Schifffahrtsweg; an Steuerbord grün, an Backbord rot (von See kommend).",
          "Sie markieren Tiefwassergebiete für alle Boote.",
          "Es handelt sich um ein Badeverbot.",
          "Hier darf beliebig gekreuzt werden."
        ],
        correctIndex: 0,
        explanation: "Das IALA-A Lateralsystem begrenzt Fahrwasser: Steuerbordseite ist grün markiert (spitze Tonnen), Backbordseite rot (stumpfe Tonnen) in Richtung der Betonnungsrichtung (von See kommend)."
      },
      {
        number: 9,
        question: "Welches Toppzeichen trägt eine Backbordtonne in der Elbmündung?",
        options: [
          "Einen roten Zylinder",
          "Einen grünen Kegel (Spitze oben)",
          "Ein rotes Kreuz",
          "Einen gelben Ball"
        ],
        correctIndex: 0,
        explanation: "Backbordtonnen (rot) tragen als Toppzeichen einen roten Zylinder, Steuerbordtonnen (grün) einen grünen Kegel."
      }
    ]
  },
  {
    id: 15,
    title: "Navigationsaufgabe 15",
    description: "Ausgangslage: Die Yacht befindet sich auf der Weser nahe der Leuchttonne 'Jade 12' um 16:00 Uhr. Es soll Kurs in Richtung Wilhelmshaven abgesetzt werden. Die Fdg beträgt 6,0 kn.",
    questions: [
      {
        number: 1,
        question: "Geben Sie die Position der Leuchttonne 'Jade 12' an.",
        options: [
          "53° 44,8' N, 008° 07,2' E",
          "53° 43,5' N, 008° 05,0' E",
          "53° 46,0' N, 008° 09,5' E",
          "53° 44,0' N, 008° 06,0' E"
        ],
        correctIndex: 0,
        explanation: "Die Position am Randmaßstab abgelesen lautet 53° 44,8' N, 008° 07,2' E."
      },
      {
        number: 2,
        question: "Es wird Kurs nach Wilhelmshaven (rwK = 180°) abgesetzt. Tragen Sie diesen Kurs in der Karte ein.",
        options: [
          "180°",
          "185°",
          "175°",
          "190°"
        ],
        correctIndex: 0,
        explanation: "Der Kurs verläuft exakt nach Süden (180°)."
      },
      {
        number: 3,
        question: "Mw = +1° (Ost), Abl = +3° (Ost). Berechnen Sie den Magnetkompasskurs (MgK).",
        options: [
          "176°",
          "184°",
          "182°",
          "178°"
        ],
        correctIndex: 0,
        explanation: "Formel: MgK = rwK - Mw - Abl = 180° - 1° - 3° = 176°."
      },
      {
        number: 4,
        question: "Die Distanz bis zur Hafeneinfahrt Wilhelmshaven beträgt...",
        options: [
          "9,0 sm",
          "8,0 sm",
          "10,5 sm",
          "9,8 sm"
        ],
        correctIndex: 0,
        explanation: "Die Distanzmessung auf der Kurslinie ergibt 9,0 sm."
      },
      {
        number: 5,
        question: "Berechnen Sie die voraussichtliche Fahrtzeit bei einer Fdg von 6,0 kn.",
        options: [
          "1 Std. 30 Min.",
          "1 Std. 15 Min.",
          "1 Std. 45 Min.",
          "2 Std. 00 Min."
        ],
        correctIndex: 0,
        explanation: "Formel: t = d / V = 9 sm / 6 kn = 1,5 Std. = 1 Std. 30 Min."
      },
      {
        number: 6,
        question: "Unterwegs (um 17:00 Uhr) wird Mellumplate-Leuchtturm gepeilt. MgP = 290°. Berechnen Sie die rwP (Mw = +1°, Abl = +3°).",
        options: [
          "294°",
          "286°",
          "288°",
          "292°"
        ],
        correctIndex: 0,
        explanation: "Formel: rwP = MgP + Mw + Abl = 290° + 1° + 3° = 294°."
      },
      {
        number: 7,
        question: "Bestimmen Sie die Koordinaten des Koppelorts (Ok) für 17:00 Uhr (zurückgelegte Distanz 6,0 sm auf rwK 180°).",
        options: [
          "53° 38,8' N, 008° 07,2' E",
          "53° 40,0' N, 008° 05,0' E",
          "53° 37,5' N, 008° 09,0' E",
          "53° 39,2' N, 008° 06,5' E"
        ],
        correctIndex: 0,
        explanation: "Das Abtragen von 6,0 sm auf 180° (Süd) ab Startpunkt ergibt 53° 38,8' N, 008° 07,2' E."
      },
      {
        number: 8,
        question: "Was bedeutet das Symbol 'Tonne' in rot-grün quergestreift mit einem roten Zylinder als Toppzeichen in einer Fahrwassergabelung?",
        options: [
          "Abzweigtonne (Steuerbordseite des Hauptfahrwassers)",
          "Abzweigtonne (Backbordseite des Hauptfahrwassers)",
          "Einzelgefahrenstelle",
          "Mitte des Fahrwassers (Ansteuerung)"
        ],
        correctIndex: 0,
        explanation: "Eine rot-grün quergestreifte Tonne mit rotem Zylinder-Toppzeichen markiert eine Fahrwassergabelung, bei der das Hauptfahrwasser rechts (Steuerbord) vorbeiführt; sie stellt die Backbordseite des Hauptfahrwassers dar."
      },
      {
        number: 9,
        question: "Welches Schallsignal gibt ein Fahrzeug ab, das die Absicht hat, Sie im engen Fahrwasser an Ihrer Backbordseite zu überholen?",
        options: [
          "Zwei lange und zwei kurze Töne",
          "Zwei lange und ein kurzer Ton",
          "Zwei kurze Töne",
          "Ein langer Ton"
        ],
        correctIndex: 0,
        explanation: "Das Signal für 'Ich beabsichtige, Sie an Ihrer Backbordseite zu überholen' beträgt laut KVR zwei lange und zwei kurze Töne (lang-lang-kurz-kurz)."
      }
    ]
  }
];

// Map structured tasks into flat array for backwards compatibility
export const navigationQuestions = navigationTasks.flatMap((task) =>
  task.questions.map((q) => ({
    id: `N-${task.id.toString().padStart(2, '0')}-${q.number}`,
    category: "navigation_see",
    topic: "navigation",
    taskTitle: task.title,
    taskDesc: task.description,
    question: `${q.number}. ${q.question}`,
    options: q.options,
    correctIndex: q.correctIndex,
    solutionExplanation: q.explanation
  }))
);
