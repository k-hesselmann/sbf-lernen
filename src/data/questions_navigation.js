/**
 * Navigationsaufgaben See (Aufgabe 1–15)
 * Basierend auf den 15 offiziellen Kartenaufgaben für den SBF See (Übungskarte D49).
 * Jede Aufgabe besteht aus 9 logisch aufeinander aufbauenden Teilaufgaben.
 */

export const navigationTasks = [
  {
    "id": 1,
    "title": "Navigationsaufgabe 1",
    "description": "Ein Sportboot befindet sich am 05.05.2012 in der Deutschen Bucht auf der Reise von Borkum nach Cuxhaven. Die Fahrt über Grund beträgt 8 kn. Um 10:00 Uhr wird die Leuchttonne \"TG19/Weser 2\" nahebei passiert. Von dieser Tonne wird der Kurs auf die Ansteuerungstonne der alten Weser \"ST\" abgesetzt.",
    "questions": [
      {
        "number": 1,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 079°",
          "rwK = 089°",
          "rwK = 074°",
          "rwK = 084°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 079°"
      },
      {
        "number": 2,
        "question": "Die Ablenkung beträgt +4°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 074° *)",
          "MgK = 084° *)",
          "MgK = 079° *)",
          "MgK = 069° *)"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 074° *)"
      },
      {
        "number": 3,
        "question": "Wie groß ist die Distanz zwischen der Tonne \"TG19/Weser 2\" und der Tonne \"ST\"?",
        "options": [
          "6,1 sm",
          "5,5 sm",
          "6,7 sm",
          "7,3 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 6,1 sm"
      },
      {
        "number": 4,
        "question": "In welcher Zeit wird die Distanz zwischen der Tonne \"TG19/Weser 2\" und der Tonne \"ST\" zurückgelegt?",
        "options": [
          "45,75 min., also 46 min. oder \"in einer 3/4 Stunde\"",
          "ca. 56 min.",
          "ca. 36 min.",
          "ca. 66 min."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 45,75 min., also 46 min. oder \"in einer 3/4 Stunde\""
      },
      {
        "number": 5,
        "question": "Auf welcher Position befindet sich das Schiff nach Koppelort um 10:30 Uhr?",
        "options": [
          "53° 55,8' N 007° 51,3' E",
          "53° 53, 8' N, 007° 52, 8' E",
          "53° 54, 8' N, 007° 50, 3' E",
          "53° 56, 8' N, 007° 52, 3' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 55,8' N 007° 51,3' E"
      },
      {
        "number": 6,
        "question": "Um 10:30 Uhr werden nachfolgende Schifffahrtszeichen mit dem Hand-Peilkompass gepeilt. Die Ablenkung beträgt dabei 0°, die Mw ist der Seekarte zu entnehmen. Neue Weser, Leuchttonne \"4a\", MgP = 169° Alte Weser, Leuchttonne \"ST\", MgP = 064°. Wie lauten die rw-Peilungen?",
        "options": [
          "Leuchttonne \"4a\": rwP = 170°, Leuchttonne \"ST\": rwP = 065°",
          "Leuchttonne \"4a\": rwP = 165°, Leuchttonne \"ST\": rwP = 070°",
          "Leuchttonne \"4a\": rwP = 175°, Leuchttonne \"ST\": rwP = 060°",
          "Leuchttonne \"4a\": rwP = 180°, Leuchttonne \"ST\": rwP = 075°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Leuchttonne \"4a\": rwP = 170°, Leuchttonne \"ST\": rwP = 065°"
      },
      {
        "number": 7,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 8,
        "question": "Wie lautet die Besteckversetzung?",
        "options": [
          "BV = 103° - 0,8 sm",
          "BV = 103° - 1,3 sm",
          "BV = 283° - 0,8 sm",
          "BV = 118° - 1,0 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: BV = 103° - 0,8 sm"
      },
      {
        "number": 9,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Leuchttonne \"ST\"",
        "options": [
          "Farbe: rot/weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball",
          "Farbe: rot, Kennung: rotes unterbrochenes Feuer, Toppzeichen: roter Zylinder",
          "Farbe: rot/weiß waagerecht gestreift, Kennung: weißes Blitzfeuer, Toppzeichen: roter Ball",
          "Farbe: grün, Kennung: grünes Gleichtaktfeuer mit 8 Sekunden Wiederkehr, Toppzeichen: kein Toppzeichen"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot/weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball"
      }
    ]
  },
  {
    "id": 2,
    "title": "Navigationsaufgabe 2",
    "description": "Ein Sportboot befindet sich am 10.06.2011 in der Deutschen Bucht auf der Reise von Helgoland nach Cuxhaven. Die Fahrt über Grund beträgt 10 kn. Um 11:00 Uhr wird 1,2 sm südlich von Helgoland die Tonne \"Helgoland-O\" nahebei passiert.",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Sportbootes um 11:00 Uhr",
        "options": [
          "54° 09,0' N 007° 53,5' E",
          "54° 8, 0' N, 007° 52, 5' E",
          "54° 10, 0' N, 007° 54, 5' E",
          "54° 7, 0' N, 007° 55, 0' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 54° 09,0' N 007° 53,5' E"
      },
      {
        "number": 2,
        "question": "Im Abstand von ca. 0,6 sm südwestlich der Tonne \"Helgoland-O\" befindet sich eine Eintragung. Was bedeutet diese Eintragung in der Seekarte?",
        "options": [
          "Wrack, Kartentiefe 53,6 m",
          "Kabel- oder Pipeline-Trasse",
          "Gezeitenstromangabe (Stromraute)",
          "Unterwasserhindernis mit einer Kartentiefe von 20 m"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Wrack, Kartentiefe 53,6 m"
      },
      {
        "number": 3,
        "question": "Von der Tonne \"Helgoland-O\" aus wird ein MgK von 116° gesteuert. Die Ablenkung beträgt +3°, die Mw ist der Seekarte zu entnehmen. Wie lautet der rwK?",
        "options": [
          "rwK = 120°",
          "rwK = 130°",
          "rwK = 115°",
          "rwK = 125°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 120°"
      },
      {
        "number": 4,
        "question": "Tragen Sie den rechtweisenden Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Nach 11,1 sm Distanz wird die Tonne \"Außenelbe-Reede 4\" nahebei passiert. Beschreiben Sie Farbe, Kennung und Toppzeichen des Schifffahrtszeichens",
        "options": [
          "Farbe: gelb Kennung: gelbes Blitzfeuer mit 4 Sekunden Wiederkehr Toppzeichen: keines",
          "Farbe: gelb-schwarz waagerecht gestreift, Kennung: weißes Funkelfeuer, Toppzeichen: zwei schwarze Kegel",
          "Farbe: rot-weiß senkrecht gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: gelb, Kennung: gelbes Festfeuer, Toppzeichen: gelbes liegendes Kreuz"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: gelb Kennung: gelbes Blitzfeuer mit 4 Sekunden Wiederkehr Toppzeichen: keines"
      },
      {
        "number": 6,
        "question": "In welcher Zeit wird die in Frage 5 genannte Distanz zurückgelegt?",
        "options": [
          "67 min.",
          "77 min.",
          "57 min.",
          "82 min."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 67 min."
      },
      {
        "number": 7,
        "question": "Auf welcher Position befindet sich das Schiff nach Koppelort um 11:54 Uhr?",
        "options": [
          "54° 04,5' N 008° 06,7' E",
          "54° 2, 5' N, 008° 8, 2' E",
          "54° 3, 5' N, 008° 5, 7' E",
          "54° 5, 5' N, 008° 7, 7' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 54° 04,5' N 008° 06,7' E"
      },
      {
        "number": 8,
        "question": "Um 11:54 Uhr wird die Leuchttonne \"Außenelbe-Reede 4\" mit dem Hand-Peilkompass gepeilt: MgP = 146°. Die Ablenkung beträgt 0°, die Mw ist der Seekarte zu entnehmen. Wie lautet die rw-Peilung?",
        "options": [
          "rwP = 147°",
          "rwP = 142°",
          "rwP = 152°",
          "rwP = 157°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwP = 147°"
      },
      {
        "number": 9,
        "question": "Das Schiff befindet sich zeitgleich zur Peilung auf der 20-Meter-Linie. Wie lautet die Besteckversetzung?",
        "options": [
          "BV = 007° - 1,6 sm",
          "BV = 187° - 1,6 sm",
          "BV = 007° - 2,1 sm",
          "BV = 022° - 1,8 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: BV = 007° - 1,6 sm"
      }
    ]
  },
  {
    "id": 3,
    "title": "Navigationsaufgabe 3",
    "description": "Ein Sportboot befindet sich am 23.05.2011 in der Deutschen Bucht auf der Fahrt aus der Jade nach Langeoog. Um 13:30 Uhr wird die Tonne \"1b/Jade 1\" nahebei passiert. Die Fahrt über Grund wird mit 6 kn angenommen.",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Sportbootes um 13:30 Uhr",
        "options": [
          "53° 52,4' N 007° 44,0' E",
          "53° 50,4' N, 007° 45,5' E",
          "53° 51,4' N, 007° 43,0' E",
          "53° 53,4' N, 007° 45,0' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 52,4' N 007° 44,0' E"
      },
      {
        "number": 2,
        "question": "Von dieser Tonne aus wird der Kurs auf die Tonne \"Accumer Ee\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 240°",
          "rwK = 235°",
          "rwK = 245°",
          "rwK = 250°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 240°"
      },
      {
        "number": 4,
        "question": "Die Ablenkung beträgt -2°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 242°",
          "MgK = 247°",
          "MgK = 237°",
          "MgK = 252°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 242°"
      },
      {
        "number": 5,
        "question": "Wann wird die Tonne \"Accumer Ee\" voraussichtlich erreicht?",
        "options": [
          "15:12 Uhr",
          "Um 14:27 Uhr",
          "Um 15:02 Uhr",
          "Um 15:22 Uhr"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 15:12 Uhr"
      },
      {
        "number": 6,
        "question": "Auf Position 53° 49,5' N 007° 36,8' E (ca. 1,9 sm nordwestlich der Ansteuerungstonne \"Otzumer Balje\") finden Sie einen roten Eintrag mit einem \"A\". Was bedeutet diese Eintragung in die Seekarte?",
        "options": [
          "Position der Gezeitenstromangabe, oder \"Stromraute\"",
          "Ankerverbot oder Sperrgebiet",
          "Wrackstelle mit bekannter Kartentiefe",
          "Verkehrsüberwachungssystem (TCTS)"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Position der Gezeitenstromangabe, oder \"Stromraute\""
      },
      {
        "number": 7,
        "question": "Um 14:30 Uhr wird mit dem Peilaufsatz des Magnetkompasses eine Kreuzpeilung durchgeführt. Die Ablenkung für den anliegenden Kurs beträgt -2°, die Mw ist der Seekarte zu entnehmen. Tonne \"TG15\" MgP = 292° Tonne \"TG17/Weser1\" MgP = 347° Tonne \"Accumer Ee\" MgP = 234° Wie lauten die rw-Peilungen?",
        "options": [
          "Tonne \"TG15\": rwP = 290°, Tonne \"TG17/Weser1\": rwP = 345°, Tonne \"Accumer Ee\": rwP = 232°",
          "Tonne \"TG15\": rwP = 294°, Tonne \"TG17/Weser1\": rwP = 349°, Tonne \"Accumer Ee\": rwP = 236°",
          "Tonne \"TG15\": rwP = 292°, Tonne \"TG17/Weser1\": rwP = 347°, Tonne \"Accumer Ee\": rwP = 234°",
          "Tonne \"TG15\": rwP = 288°, Tonne \"TG17/Weser1\": rwP = 343°, Tonne \"Accumer Ee\": rwP = 230°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Tonne \"TG15\": rwP = 290°, Tonne \"TG17/Weser1\": rwP = 345°, Tonne \"Accumer Ee\": rwP = 232°"
      },
      {
        "number": 8,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 9,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"Accumer Ee\"",
        "options": [
          "Farbe: rot-weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball",
          "Farbe: gelb, Kennung: gelbes Blitzfeuer, Toppzeichen: keines",
          "Farbe: grün, Kennung: grünes unterbrochenes Feuer, Toppzeichen: grüner Kegel",
          "Farbe: rot, Kennung: rotes Funkelfeuer, Toppzeichen: roter Zylinder"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot-weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball"
      }
    ]
  },
  {
    "id": 4,
    "title": "Navigationsaufgabe 4",
    "description": "Ein aus Langeoog auslaufendes Sportboot befindet sich am 18.04.2014 um 09:00 Uhr nahe bei der Tonne \"Accumer Ee\".",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Bootes um 09:00 Uhr",
        "options": [
          "53° 47,2' N 007° 29,1' E",
          "53° 46, 2' N, 007° 28, 1' E",
          "53° 48, 2' N, 007° 30, 1' E",
          "53° 45, 2' N, 007° 30, 6' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 47,2' N 007° 29,1' E"
      },
      {
        "number": 2,
        "question": "Von der Tonne \"Accumer Ee\" aus wird der Kurs auf die Tonne \"Otzumer Balje\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 081°",
          "rwK = 091°",
          "rwK = 076°",
          "rwK = 086°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 081°"
      },
      {
        "number": 4,
        "question": "Die Ablenkung beträgt +7°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 074°",
          "MgK = 069°",
          "MgK = 079°",
          "MgK = 084°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 074°"
      },
      {
        "number": 5,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"Otzumer Balje\"",
        "options": [
          "Farbe: rot-weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 4 Sekunden Wiederkehr Toppzeichen: roter Ball",
          "Farbe: rot-weiß waagerecht gestreift, Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr, Toppzeichen: roter Ball",
          "Farbe: gelb, Kennung: gelbes Blitzfeuer mit 4 Sekunden Wiederkehr, Toppzeichen: keines",
          "Farbe: rot, Kennung: rotes Gleichtaktfeuer, Toppzeichen: roter Zylinder"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot-weiß senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 4 Sekunden Wiederkehr Toppzeichen: roter Ball"
      },
      {
        "number": 6,
        "question": "Es ist 10:00 Uhr. Die durchschnittliche Fahrt über Grund betrug in der letzten Stunde 6 kn. Auf welcher Position befindet sich das Schiff nach Koppelort?",
        "options": [
          "53° 48,2' N 007° 39,2' E",
          "53° 49, 2' N, 007° 40, 2' E",
          "53° 47, 2' N, 007° 38, 2' E",
          "53° 46, 2' N, 007° 40, 7' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 48,2' N 007° 39,2' E"
      },
      {
        "number": 7,
        "question": "Sie beschließen über die Otzumer Balje und das Langeooger Wattfahrwasser hinter der Insel zurück zum Hafen zu laufen. ca. 1,2 sm südwestlich der Tonne \"Otzumer Balje\" finden Sie zwei ähnliche Einträge. Was bedeuten diese Eintragungen in der Seekarte?",
        "options": [
          "wracks mit 3,7 m bzw. 1,4 m Tiefe",
          "Verankerungen für Feuerschiffe in 3,7 m und 1,4 m Tiefe",
          "Kabeltrassen mit einer Tiefe von 3,7 m und 1,4 m",
          "Wattflächen, die bei Niedrigwasser trockenfallen"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: wracks mit 3,7 m bzw. 1,4 m Tiefe"
      },
      {
        "number": 8,
        "question": "Um 10:15 Uhr peilen Sie mit dem Peilaufsatz am Magnetkompass die westlichste der drei Kirchen auf Spiekeroog in MgP = 110° und die Tonne \"Otzumer Balje\" in MgP = 030°. Die Ablenkung für den anliegenden Kurs beträgt +5°, die Mw ist der Karte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "Kirche: rwP = 115°, Tonne: rwP = 035°",
          "Kirche: rwP = 105°, Tonne: rwP = 025°",
          "Kirche: rwP = 110°, Tonne: rwP = 030°",
          "Kirche: rwP = 120°, Tonne: rwP = 040°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kirche: rwP = 115°, Tonne: rwP = 035°"
      },
      {
        "number": 9,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Karte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      }
    ]
  },
  {
    "id": 5,
    "title": "Navigationsaufgabe 5",
    "description": "Ein Motorboot befindet sich am 29.07.2011 in der Küstenverkehrszone und möchte in die Jade einlaufen.",
    "questions": [
      {
        "number": 1,
        "question": "Zur Standortbestimmung werden um 14:00 Uhr mit dem Peilaufsatz am Magnetkompass die folgenden Objekte gepeilt. Die Ablenkung für den anliegenden Kurs beträgt -4°, die Mw ist der Seekarte zu entnehmen. Wasserturm Langeoog MgP = 225° Tonne \"Otzumer Balje\" MgP = 131° Wie lauten die rw-Peilungen?",
        "options": [
          "Wasserturm: rwP = 221°, Tonne: rwP = 127°",
          "Wasserturm: rwP = 231°, Tonne: rwP = 137°",
          "Wasserturm: rwP = 216°, Tonne: rwP = 132°",
          "Wasserturm: rwP = 226°, Tonne: rwP = 122°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Wasserturm: rwP = 221°, Tonne: rwP = 127°"
      },
      {
        "number": 2,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Entnehmen Sie der Seekarte die geographische Position des ermittelten Standortes",
        "options": [
          "53° 49,7' N 007° 35,8' E",
          "53° 48, 7' N, 007° 34, 8' E",
          "53° 50, 7' N, 007° 36, 8' E",
          "53° 47, 7' N, 007° 37, 3' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 49,7' N 007° 35,8' E"
      },
      {
        "number": 4,
        "question": "Von diesem Ort aus wird der Kurs auf die Tonne \"1b/Jade1\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 061°",
          "rwK = 071°",
          "rwK = 056°",
          "rwK = 066°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 061°"
      },
      {
        "number": 6,
        "question": "Die Ablenkung beträgt -2°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 063°",
          "MgK = 058°",
          "MgK = 068°",
          "MgK = 073°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 063°"
      },
      {
        "number": 7,
        "question": "Das Motorboot macht 11 kn Fahrt über Grund. Zu welcher Uhrzeit wird die Tonne \"1b/Jade1\" voraussichtlich erreicht?",
        "options": [
          "14:30 Uhr",
          "Um 14:20 Uhr",
          "Um 14:40 Uhr",
          "Um 13:45 Uhr"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 14:30 Uhr"
      },
      {
        "number": 8,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"1b/Jade1\"",
        "options": [
          "Farbe: grün, Kennung: grünes unterbrochenes Feuer mit 4 Sekunden Wiederkehr, Toppzeichen: keines",
          "Farbe: grün, Kennung: grünes Gleichtaktfeuer mit 8 Sekunden Wiederkehr, Toppzeichen: grüner Kegel",
          "Farbe: rot-weiß senkrecht gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: schwarz-gelb gestreift, Kennung: weißes Funkelfeuer, Toppzeichen: zwei Kegel"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: grün, Kennung: grünes unterbrochenes Feuer mit 4 Sekunden Wiederkehr, Toppzeichen: keines"
      },
      {
        "number": 9,
        "question": "Das Motorboot macht weiterhin 11 kn Fahrt über Grund, als um 14:06 Uhr ein Maschinenschaden eintritt. Auf welcher Position befindet sich das Schiff zu diesem Zeitpunkt nach Koppelort?",
        "options": [
          "53° 50,2' N 007° 37,4' E",
          "53° 48, 2' N, 007° 38, 9' E",
          "53° 49, 2' N, 007° 36, 4' E",
          "53° 51, 2' N, 007° 38, 4' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 50,2' N 007° 37,4' E"
      }
    ]
  },
  {
    "id": 6,
    "title": "Navigationsaufgabe 6",
    "description": "Ein aus der Alten Weser auslaufendes Motorboot befindet sich am 30.06.2012 auf dem Weg in die Elbe und steht um 09:00 Uhr nahebei der Tonne \"A2\".",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Motorbootes",
        "options": [
          "53° 55,3' N, 007° 58,8' E",
          "53° 54,3' N, 007° 57,8' E",
          "53° 56,3' N, 007° 59,8' E",
          "53° 53,3' N, 007° 60,3' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 55,3' N, 007° 58,8' E"
      },
      {
        "number": 2,
        "question": "Von der Tonne \"A2\" aus setzt das Boot seinen Kurs auf die Tonne \"Westertill-N\" ab. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 059°",
          "rwK = 069°",
          "rwK = 054°",
          "rwK = 064°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 059°"
      },
      {
        "number": 4,
        "question": "Die Ablenkung beträgt -2°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 060°",
          "MgK = 055°",
          "MgK = 065°",
          "MgK = 070°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 060°"
      },
      {
        "number": 5,
        "question": "Nach einiger Zeit wird die Tonne \"NGN\" an Backbordseite passiert. Beschreiben Sie Farbe, Kennung und Toppzeichen des Schifffahrtszeichens",
        "options": [
          "Farbe: oben schwarz und unten gelb Kennung: weißes schnelles Funkelfeuer Toppzeichen: zwei Kegel - beide \"Spitze oben\" - senkrecht übereinander",
          "Farbe: oben gelb und unten schwarz, Kennung: weißes schnelles Funkelfeuer, Toppzeichen: zwei Kegel - Spitze unten",
          "Farbe: rot-weiß senkrecht gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: gelb mit schwarzem Band, Kennung: weißes Blitzfeuer, Toppzeichen: zwei Kegel - Spitzen zueinander"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: oben schwarz und unten gelb Kennung: weißes schnelles Funkelfeuer Toppzeichen: zwei Kegel - beide \"Spitze oben\" - senkrecht übereinander"
      },
      {
        "number": 6,
        "question": "Im weiteren Fahrtverlauf werden mit dem Peilaufsatz am Magnetkompass die folgenden Objekte gepeilt. Die Ablenkung für den anliegenden Kurs beträgt -2°, die Mw ist der Seekarte zu entnehmen. Leuchtturm \"Alte Weser\" MgP = 160° Tonne \"Westertill-N\" MgP = 056° Wie lauten die rw-Peilungen?",
        "options": [
          "Leuchtturm: rwP = 159°, Tonne: rwP = 055°",
          "Leuchtturm: rwP = 164°, Tonne: rwP = 050°",
          "Leuchtturm: rwP = 154°, Tonne: rwP = 060°",
          "Leuchtturm: rwP = 169°, Tonne: rwP = 065°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Leuchtturm: rwP = 159°, Tonne: rwP = 055°"
      },
      {
        "number": 7,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 8,
        "question": "Um 09:54 Uhr wird die Tonne \"Westertill-N\" passiert. Wie groß ist die Geschwindigkeit seit 09:00 Uhr?",
        "options": [
          "FüG = 6 kn",
          "FüG = 5,0 kn",
          "FüG = 7,0 kn",
          "FüG = 8,0 kn"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: FüG = 6 kn"
      },
      {
        "number": 9,
        "question": "Unmittelbar südlich der Tonne \"Westertill-N\" befindet sich eine Eintragung. Was bedeutet diese Eintragung in der Seekarte?",
        "options": [
          "Kartentiefe 24 m",
          "Position der Gezeitenstromangabe (Stromraute)",
          "Sperrgebiet für Yachten",
          "Tiefenlinie von 24 m"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kartentiefe 24 m"
      }
    ]
  },
  {
    "id": 7,
    "title": "Navigationsaufgabe 7",
    "description": "Ein aus der Elbe auslaufendes Motorboot steht am 22.10.2010 um 11:00 Uhr nahebei der Tonne \"Außenelbe-Reede 2\". Die Fahrt über Grund beträgt 8 kn.",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Motorbootes um 11:00 Uhr",
        "options": [
          "54° 03,5' N 008° 06,9' E",
          "54° 1, 5' N, 008° 8, 4' E",
          "54° 2, 5' N, 008° 5, 9' E",
          "54° 4, 5' N, 008° 7, 9' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 54° 03,5' N 008° 06,9' E"
      },
      {
        "number": 2,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"Außenelbe- Reede 2\"",
        "options": [
          "Farbe: gelb Kennung: gelbes unterbrochenes Feuer mit 3 Gruppen und der Wiederkehr 12 Sekunden Toppzeichen: keines",
          "Farbe: gelb, Kennung: gelbes Blitzfeuer mit 4 Sekunden Wiederkehr, Toppzeichen: gelbes liegendes Kreuz",
          "Farbe: rot-weiß gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: gelb, Kennung: gelbes Festfeuer, Toppzeichen: keines"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: gelb Kennung: gelbes unterbrochenes Feuer mit 3 Gruppen und der Wiederkehr 12 Sekunden Toppzeichen: keines"
      },
      {
        "number": 3,
        "question": "Von der angegebenen Position aus wird am Magnetkompasskurs ein Kurs von 218° gesteuert. Die Ablenkung beträgt -3°, die Mw ist der Seekarte zu entnehmen. Wie lautet der rwK?",
        "options": [
          "rwK = 216°",
          "rwK = 211°",
          "rwK = 221°",
          "rwK = 226°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 216°"
      },
      {
        "number": 4,
        "question": "Tragen Sie den rechtweisenden Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Wann erreichen Sie die Tonne \"NGN\"?",
        "options": [
          "11:57 Uhr",
          "Um 10:12 Uhr",
          "Um 11:47 Uhr",
          "Um 11:07 Uhr"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 11:57 Uhr"
      },
      {
        "number": 6,
        "question": "Welche Bedeutung hat die Tonne \"NGN\"?",
        "options": [
          "Zeigt an, dass die Gefahrenstelle nördlich der Tonne sicher umfahren werden kann.",
          "Süd-Kardinal-Zeichen (Zeigt an, dass die Gefahrenstelle südlich der Tonne sicher umfahren werden kann.)",
          "Nord-Kardinal-Zeichen (Zeigt an, dass die Gefahrenstelle im Norden liegt und südlich umfahren werden muss.)",
          "Fahrwassermitte-Zeichen (Zeigt die Mitte des Schifffahrtsweges an.)"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Zeigt an, dass die Gefahrenstelle nördlich der Tonne sicher umfahren werden kann."
      },
      {
        "number": 7,
        "question": "Um 12:00 Uhr werden mit dem Hand-Peilkompass folgende Tonnen gepeilt: Tonne \"ST\" MgP = 240°, Tonne \"A2\" MgP = 150°. Die Ablenkung beträgt 0°, die Mw ist aus der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "Tonne \"ST\": rwP = 241°, Tonne \"A2\": rwP = 151°",
          "Tonne \"ST\": rwP = 236°, Tonne \"A2\": rwP = 146°",
          "Tonne \"ST\": rwP = 246°, Tonne \"A2\": rwP = 156°",
          "Tonne \"ST\": rwP = 251°, Tonne \"A2\": rwP = 161°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Tonne \"ST\": rwP = 241°, Tonne \"A2\": rwP = 151°"
      },
      {
        "number": 8,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 9,
        "question": "Wie lautet die Besteckversetzung?",
        "options": [
          "BV = 273° -1,1 sm",
          "BV = 288° - 1,3 sm",
          "BV = 093° - 1,1 sm",
          "BV = 273° - 1,6 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: BV = 273° -1,1 sm"
      }
    ]
  },
  {
    "id": 8,
    "title": "Navigationsaufgabe 8",
    "description": "Ein Motorboot steht am 28.05.2012 um 10:00 Uhr in der Deutschen Bucht. Die Fahrt über Grund wird mit 9 kn angenommen.",
    "questions": [
      {
        "number": 1,
        "question": "Durch Peilung und Abstandsmessung wird eine Standortbestimmung durchgeführt. Die Tonne \"E2\" wird gepeilt: rwP = 084°, Distanz = 1,6 sm. Tragen Sie die rw-Peilung in die Seekarte ein.",
        "options": [
          "Siehe Karte",
          "rwP = 094°, Distanz = 2,6 sm, in Karte eingetragen",
          "rwP = 074°, Distanz = 1,0 sm, in Karte eingetragen",
          "rwP = 084°, Distanz = 3,2 sm, in Karte eingetragen"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 2,
        "question": "Entnehmen Sie der Seekarte die geographische Position",
        "options": [
          "54° 07,0' N 007° 41,0' E",
          "54° 08, 0' N, 007° 42, 0' E",
          "54° 06, 0' N, 007° 40, 0' E",
          "54° 05, 0' N, 007° 42, 5' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 54° 07,0' N 007° 41,0' E"
      },
      {
        "number": 3,
        "question": "An dem ermittelten Ort befindet sich ein Eintrag. Was bedeutet diese Eintragung in die Seekarte?",
        "options": [
          "Kartentiefe 37 m",
          "Sicherer Ankergrund in 37 m Tiefe",
          "Gezeitenstromangabe (Stromraute)",
          "Wrack mit einer Tiefe von 37 m"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kartentiefe 37 m"
      },
      {
        "number": 4,
        "question": "Von dem ermittelten Ort wird das Verkehrstrennungsgebiet Jade Approach auf einem rechtweisenden Kurs von 232° angesteuert. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Wie groß ist die Distanz zum Verkehrstrennungsgebiet?",
        "options": [
          "3,8 sm",
          "3,2 sm",
          "4,4 sm",
          "5,0 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 3,8 sm"
      },
      {
        "number": 6,
        "question": "Die Ablenkung beträgt +2°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 229°",
          "MgK = 234°",
          "MgK = 224°",
          "MgK = 239°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 229°"
      },
      {
        "number": 7,
        "question": "Bei Erreichen des Verkehrstrennungsgebietes Jade Approach wird der Kurs geändert, um das Verkehrstrennungsgebiet rechtwinklig zu queren (Annahme: kein Versatz durch Strom und Wind). Wie lautet der rwK?",
        "options": [
          "rwK = 242°",
          "rwK = 252°",
          "rwK = 237°",
          "rwK = 247°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 242°"
      },
      {
        "number": 8,
        "question": "Welcher Zeitraum wird für das Queren des Verkehrstrennungsgebietes Jade Approach voraussichtlich benötigt?",
        "options": [
          "Zeitraum = 20 min.",
          "Zeitraum = 10 min.",
          "Zeitraum = 30 min.",
          "Zeitraum = 40 min."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Zeitraum = 20 min."
      },
      {
        "number": 9,
        "question": "Nach einiger Zeit wird die Tonne \"TG16/Reede\" querab an Backbord passiert. Beschreiben Sie Farbe, Kennung und Toppzeichen des Schifffahrtszeichens",
        "options": [
          "Farbe: rot Kennung: rotes unterbrochenes Feuer in 3er Gruppen und einer Wiederkehr von 12 Sekunden Toppzeichen: keines",
          "Farbe: grün, Kennung: grünes Funkelfeuer, Toppzeichen: grüner Kegel",
          "Farbe: rot-weiß gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: rot, Kennung: rotes Blitzfeuer mit 4 Sekunden Wiederkehr, Toppzeichen: roter Zylinder"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot Kennung: rotes unterbrochenes Feuer in 3er Gruppen und einer Wiederkehr von 12 Sekunden Toppzeichen: keines"
      }
    ]
  },
  {
    "id": 9,
    "title": "Navigationsaufgabe 9",
    "description": "Ein Sportboot befährt am 23.06.2011 nördlich des roten Tonnenstrichs die Elbe seewärts. Gegen 12:00 Uhr wird die Tonne \"14\" nahebei passiert. Die Fahrt über Grund beträgt 5,8 kn.",
    "questions": [
      {
        "number": 1,
        "question": "Wann erreicht das Boot voraussichtlich die Tonne \"6\"?",
        "options": [
          "Gegen 13:00 Uhr",
          "Um 12:15 Uhr",
          "Um 13:50 Uhr",
          "Um 13:10 Uhr"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Gegen 13:00 Uhr"
      },
      {
        "number": 2,
        "question": "An der Tonne \"6\" wird das Fahrwasser zügig und ohne die Berufsschifffahrt zu behindern nach Süden gequert. Gut südlich des grünen Tonnenstrichs geht es weiter elbabwärts auf der 5 m Linie, bis gegen 13:50 Uhr Tonne \"1\" an Steuerbord querab ist. Nun wird der rwK 206° auf den Leuchtturm \"Alte Weser\" abgesetzt. Die Ablenkung beträgt +4°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 202°",
          "MgK = 197°",
          "MgK = 207°",
          "MgK = 212°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 202°"
      },
      {
        "number": 3,
        "question": "Beschreiben Sie das Feuer des Leuchtturms \"Alte Weser\" anhand der Eintragung in der Karte",
        "options": [
          "Festfeuer in Sektoren in den Farben weiß, rot und grün. Feuerhöhe 33 m, Tragweiten 23 sm bis 18 sm.",
          "Blinkfeuer in Sektoren in den Farben weiß, rot und grün. Feuerhöhe 33 m, Tragweite 12 sm.",
          "Gleichtaktfeuer, weiß, mit 8 Sekunden Wiederkehr. Feuerhöhe 25 m, Tragweite 18 sm.",
          "Festfeuer, rot-weiß gestreift. Feuerhöhe 33 m, Tragweiten 23 sm bis 18 sm."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Festfeuer in Sektoren in den Farben weiß, rot und grün. Feuerhöhe 33 m, Tragweiten 23 sm bis 18 sm."
      },
      {
        "number": 4,
        "question": "Was bedeutet der Zusatz \"Horn Mo(AL)60s\"?",
        "options": [
          "Nebelhorn in den Morsebuchstaben A und L alle 6O Sekunden.",
          "Lichtsignal in den Morsebuchstaben A und L alle 60 Sekunden.",
          "Schallsignalanlage mit kontinuierlichem Alarm alle 60 Sekunden.",
          "Nebelhorn mit Morsecode \"AL\" alle 60 Minuten."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Nebelhorn in den Morsebuchstaben A und L alle 6O Sekunden."
      },
      {
        "number": 5,
        "question": "Um 14:20 Uhr zeigt das GPS folgende Position: 53° 56,0' N 008° 11,0' E. Tragen Sie diese in die Karte ein.",
        "options": [
          "Siehe Karte",
          "53° 54,0' N 008° 12,5' E. Tragen Sie diese in die Karte ein. Siehe Karte",
          "53° 55,0' N 008° 10,0' E. Tragen Sie diese in die Karte ein. Siehe Karte",
          "53° 57,0' N 008° 12,0' E. Tragen Sie diese in die Karte ein. Siehe Karte"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 6,
        "question": "Die GPS-Position soll anhand von Peilungen kontrolliert werden. Wie lauten von dieser GPS-Position aus die rw-Peilungen auf Leuchtturm \"Neuwerk\" und Leuchtturm \"Alte Weser\"?",
        "options": [
          "rwP = 096° Neuwerk rwP = 205° Alte Weser",
          "Objekt 1: rwP = 091°, Objekt 2: rwP = 210°",
          "Objekt 1: rwP = 101°, Objekt 2: rwP = 200°",
          "Objekt 1: rwP = 106°, Objekt 2: rwP = 215°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwP = 096° Neuwerk rwP = 205° Alte Weser"
      },
      {
        "number": 7,
        "question": "Tragen Sie die rw-Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 8,
        "question": "Wie groß ist die Distanz zum Leuchtturm \"Alte Weser\"?",
        "options": [
          "4,6 sm",
          "5,2 sm",
          "4,0 sm",
          "5,8 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 4,6 sm"
      },
      {
        "number": 9,
        "question": "Gegen 15:20 Uhr sind Sie am Leuchtturm \"Alte Weser\". Wie groß ist die Geschwindigkeit der letzten Stunde?",
        "options": [
          "4,6 kn",
          "5,6 kn",
          "3,6 kn",
          "6,2 kn"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 4,6 kn"
      }
    ]
  },
  {
    "id": 10,
    "title": "Navigationsaufgabe 10",
    "description": "Ein am 14.07.2010 aus der \"Alten Weser\" auslaufendes Fahrzeug hat den Leuchtturm \"Alte Weser\" passiert und steht um 12:00 Uhr nahebei der Tonne \"A10\".",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position dieser Tonne",
        "options": [
          "53° 52,6' N 008° 06,4' E",
          "53° 51, 6' N, 008° 5, 4' E",
          "53° 53, 6' N, 008° 7, 4' E",
          "53° 50, 6' N, 008° 7, 9' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 52,6' N 008° 06,4' E"
      },
      {
        "number": 2,
        "question": "Beschreiben Sie das Feuer des Leuchtturms \"Alte Weser\"",
        "options": [
          "Festfeuer mit weißen, roten und grünen Sektoren. Feuerhöhe 33 m, 23 sm bis 18 sm Nenntragweite.",
          "Unterbrochenes Feuer, weiß, Wiederkehr 8 Sekunden. Feuerhöhe 33 m.",
          "Blitzfeuer mit weißen, roten und grünen Sektoren. Feuerhöhe 33 m, 12 sm Tragweite.",
          "Festfeuer in den Farben weiß, rot und grün. Feuerhöhe 43 m, 25 sm Tragweite."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Festfeuer mit weißen, roten und grünen Sektoren. Feuerhöhe 33 m, 23 sm bis 18 sm Nenntragweite."
      },
      {
        "number": 3,
        "question": "Vom angegebenen Standort aus wird der Kurs auf die Tonne \"A2\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 4,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 301°",
          "rwK = 296°",
          "rwK = 306°",
          "rwK = 311°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 301°"
      },
      {
        "number": 5,
        "question": "Die Ablenkung beträgt -4°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 304°",
          "MgK = 299°",
          "MgK = 309°",
          "MgK = 314°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 304°"
      },
      {
        "number": 6,
        "question": "Um 12:26 Uhr wird die Tonne \"A2\" querab passiert. Wie groß ist die Geschwindigkeit über Grund (FüG) seit Passage der Tonne \"A10\"?",
        "options": [
          "12,0 kn",
          "10,0 kn",
          "14,0 kn",
          "8,5 kn"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 12,0 kn"
      },
      {
        "number": 7,
        "question": "Nach Passage der Tonne \"A2\" wird der Kurs nach Steuerbord geändert und auf die Tonne \"E3\" abgesetzt. Wenig später wird die Tonne \"ST\" passiert. Welche Bedeutung hat dieses Schifffahrtszeichen?",
        "options": [
          "Kennzeichnung der Zufahrt zu Fahrwassern und der Mitte von Schifffahrtswegen",
          "Kennzeichnung einer Reede- oder Ankerzone",
          "Kennzeichnung einer Gefahrenstelle (Kardinalzeichen)",
          "Sperrgebiet für die Schifffahrt"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kennzeichnung der Zufahrt zu Fahrwassern und der Mitte von Schifffahrtswegen"
      },
      {
        "number": 8,
        "question": "Zur Standortbestimmung werden danach mit dem Peilaufsatz am Magnetkompass folgende Schifffahrtszeichen gepeilt: Tonne \"Nordergründe-N\" MgP = 110° Tonne \"ST\" MgP = 225° Die Ablenkung für den anliegenden Kurs beträgt +1°, die Mw ist der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "Tonne \"NGN\": rwP = 112°, Tonne \"ST\": rwP = 227°",
          "Tonne \"NGN\": rwP = 107°, Tonne \"ST\": rwP = 232°",
          "Tonne \"NGN\": rwP = 117°, Tonne \"ST\": rwP = 222°",
          "Tonne \"NGN\": rwP = 122°, Tonne \"ST\": rwP = 237°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Tonne \"NGN\": rwP = 112°, Tonne \"ST\": rwP = 227°"
      },
      {
        "number": 9,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      }
    ]
  },
  {
    "id": 11,
    "title": "Navigationsaufgabe 11",
    "description": "Ein Sportboot steht am 05.08.2013 um 09:00 Uhr in der Deutschen Bucht auf Position 53° 54,2' N und 007° 53,8' E und möchte in die Neue Weser einlaufen.",
    "questions": [
      {
        "number": 1,
        "question": "Tragen Sie die Position in die Karte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 2,
        "question": "Auf der o. g. Position befindet sich ein Eintrag. Was bedeutet diese Eintragung in die Seekarte?",
        "options": [
          "Kartentiefe 18,5 m",
          "Besteckversetzung von 18,5 sm",
          "Gezeitenstromangabe (Stromraute)",
          "Unterwasserhindernis mit einer Tiefe von 18,5 m"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kartentiefe 18,5 m"
      },
      {
        "number": 3,
        "question": "Von der o. g. Position wird der Kurs auf die Tonne \"5\" des Fahrwassers der Neuen Weser abgesetzt. Wie lautet der rwK?",
        "options": [
          "rwK = 148°",
          "rwK = 143°",
          "rwK = 153°",
          "rwK = 158°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 148°"
      },
      {
        "number": 4,
        "question": "Tragen Sie den rechtweisenden Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Die Ablenkung beträgt -5°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 152°",
          "MgK = 162°",
          "MgK = 147°",
          "MgK = 157°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 152°"
      },
      {
        "number": 6,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"5\" der Neuen Weser",
        "options": [
          "Farbe: grün Kennung: grünes unterbrochenes Feuer in 2er Gruppen mit einer Wiederkehr von 9 Sekunden Toppzeichen: keines",
          "Farbe: grün, Kennung: grünes Funkelfeuer, Toppzeichen: grüner Kegel",
          "Farbe: rot-weiß gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: grün, Kennung: grünes unterbrochenes Feuer, Toppzeichen: grüner Zylinder"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: grün Kennung: grünes unterbrochenes Feuer in 2er Gruppen mit einer Wiederkehr von 9 Sekunden Toppzeichen: keines"
      },
      {
        "number": 7,
        "question": "Wann wird die Tonne \"5\" voraussichtlich passiert, wenn das Boot eine Fahrt über Grund von 6 kn macht?",
        "options": [
          "Um 09:37 Uhr",
          "Um 09:27 Uhr",
          "Um 09:47 Uhr",
          "Um 08:52 Uhr"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Um 09:37 Uhr"
      },
      {
        "number": 8,
        "question": "Im weiteren Verlauf der Reise werden mit dem Hand- Peilkompass folgende Leuchttürme gepeilt: Leuchtturm \"Alte Weser\" MgP = 011° Leuchtturm \"Tegeler Plate\" MgP = 102° Die Ablenkung beträgt 0°, die Mw ist der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "rwP = 012° LT \"Alte Weser\" rwP = 103° LT \"Tegeler Plate\"",
          "LT \"Alte Weser\": rwP = 017°, LT \"Tegeler Plate\": rwP = 098°",
          "LT \"Alte Weser\": rwP = 007°, LT \"Tegeler Plate\": rwP = 108°",
          "LT \"Alte Weser\": rwP = 022°, LT \"Tegeler Plate\": rwP = 113°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwP = 012° LT \"Alte Weser\" rwP = 103° LT \"Tegeler Plate\""
      },
      {
        "number": 9,
        "question": "Tragen Sie die rwP in die Karte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      }
    ]
  },
  {
    "id": 12,
    "title": "Navigationsaufgabe 12",
    "description": "Ein am 02.05.2012 aus der Jade auslaufendes Sportboot steht um 08:00 Uhr nahebei der Tonne \"10\" des Wangerooger Fahrwassers und möchte in nördlicher Richtung ablaufen. Die Fahrt über Grund wird mit 8 kn angenommen.",
    "questions": [
      {
        "number": 1,
        "question": "Entnehmen Sie der Seekarte die geographische Position des Bootes",
        "options": [
          "53° 50' 0' N 007° 53,4' E",
          "53° 49, 0' N, 007° 52, 4' E",
          "53° 51, 0' N, 007° 54, 4' E",
          "53° 48, 0' N, 007° 54, 9' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 50' 0' N 007° 53,4' E"
      },
      {
        "number": 2,
        "question": "Von der angegebenen Position wird der Kurs auf die Tonne \"ST\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 007°",
          "rwK = 017°",
          "rwK = 002°",
          "rwK = 012°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 007°"
      },
      {
        "number": 4,
        "question": "Die Ablenkung beträgt -3°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 009°",
          "MgK = 004°",
          "MgK = 014°",
          "MgK = 019°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 009°"
      },
      {
        "number": 5,
        "question": "Die Tonne \"4a\" der \"Neuen Weser\" wird passiert. Beschreiben Sie Farbe, Kennung und Toppzeichen des Schifffahrtszeichens",
        "options": [
          "Farbe: rot, Kennung: rotes unterbrochenes Funkelfeuer mit 13 Sekunden Wiederkehr, Toppzeichen: roter Zylinder",
          "Farbe: grün, Kennung: grünes unterbrochenes Feuer, Toppzeichen: grüner Kegel",
          "Farbe: rot-weiß gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: rot, Kennung: rotes Blitzfeuer mit 4 Sekunden Wiederkehr, Toppzeichen: keines"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot, Kennung: rotes unterbrochenes Funkelfeuer mit 13 Sekunden Wiederkehr, Toppzeichen: roter Zylinder"
      },
      {
        "number": 6,
        "question": "Um 08:30 Uhr wird ein treibendes und leckendes Ölfass nahebei passiert und an die Verkehrszentrale gemeldet. Auf welcher Position befindet sich das Schiff nach Koppelort zu diesem Zeitpunkt?",
        "options": [
          "53° 54,0' N 007° 54,3' E",
          "53° 55, 0' N, 007° 55, 3' E",
          "53° 53, 0' N, 007° 53, 3' E",
          "53° 52, 0' N, 007° 55, 8' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 54,0' N 007° 54,3' E"
      },
      {
        "number": 7,
        "question": "Um 09:00 Uhr wird die Tonne \"ST\" gepeilt: rwP = 168°. Als Distanz werden 2,0 sm ermittelt. Tragen Sie die rw-Peilung in die Seekarte ein.",
        "options": [
          "Siehe Karte",
          "rwP = 158°. Als Distanz werden 1,5 sm ermittelt, in Karte eingetragen",
          "rwP = 178°. Als Distanz werden 2,5 sm ermittelt, in Karte eingetragen",
          "rwP = 168°. Als Distanz werden 3,0 sm ermittelt, in Karte eingetragen"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 8,
        "question": "Wie lautet die Besteckversetzung?",
        "options": [
          "BV = 296° -0,7 sm",
          "BV = 116° - 0,7 sm",
          "BV = 296° - 1,2 sm",
          "BV = 311° - 0,9 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: BV = 296° -0,7 sm"
      },
      {
        "number": 9,
        "question": "Welche Bedeutung hat die Tonne \"ST\"?",
        "options": [
          "Kennz eichnung der Zufahrt zu Fahrwassern und der Mitte von Schifffahrtswegen (hier: \"Alte Weser\")",
          "Kennzeichnung einer Gefahrenstelle im Osten",
          "Sperrgebiet für die Sportschifffahrt",
          "Ansteuerungstonne für Helgoland"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Kennz eichnung der Zufahrt zu Fahrwassern und der Mitte von Schifffahrtswegen (hier: \"Alte Weser\")"
      }
    ]
  },
  {
    "id": 13,
    "title": "Navigationsaufgabe 13",
    "description": "Ein aus Helgoland ausgelaufenes Sportboot befindet sich am 02.07.2014 auf dem Weg nach Bremerhaven.",
    "questions": [
      {
        "number": 1,
        "question": "Um 09:00 Uhr werden mit dem Hand-Peilkompass folgende Schifffahrtszeichen gepeilt: Tonne \"Helgoland-O\" MgP = 284° Tonne \"Düne-S\" MgP = 008° Die Ablenkung beträgt 0°, die Mw ist der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "Tonne \"Helgoland-O\": rwP = 285°, Tonne \"Düne-S\": rwP = 009°",
          "Tonne \"Helgoland-O\": rwP = 295°, Tonne \"Düne-S\": rwP = 019°",
          "Tonne \"Helgoland-O\": rwP = 280°, Tonne \"Düne-S\": rwP = 014°",
          "Tonne \"Helgoland-O\": rwP = 290°, Tonne \"Düne-S\": rwP = 004°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Tonne \"Helgoland-O\": rwP = 285°, Tonne \"Düne-S\": rwP = 009°"
      },
      {
        "number": 2,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Entnehmen Sie der Seekarte die geographische Position des durch Peilung ermittelten Standortes",
        "options": [
          "54° 08' 6' N 007° 55,7'E",
          "54° 7, 6' N, 007° 54, 7' E",
          "54° 9, 6' N, 007° 56, 7' E",
          "54° 6, 6' N, 007° 57, 2' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 54° 08' 6' N 007° 55,7'E"
      },
      {
        "number": 4,
        "question": "Welche Bedeutung hat die Tonne \"Helgoland-O\"?",
        "options": [
          "Zeigt an, dass die Gefahrenstelle im Osten sicher umfahren werden kann",
          "Nord-Kardinal-Zeichen (Zeigt an, dass die Gefahrenstelle im Norden sicher umfahren werden kann.)",
          "West-Kardinal-Zeichen (Zeigt an, dass die Gefahrenstelle im Osten liegt und westlich sicher umfahren werden kann.)",
          "Sicherwasser-Zeichen (Zeigt die Mitte des Fahrwassers an.)"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Zeigt an, dass die Gefahrenstelle im Osten sicher umfahren werden kann"
      },
      {
        "number": 5,
        "question": "Von dem durch Peilung ermittelten Standort wird der Kurs auf die Tonne \"ST\" abgesetzt. Tragen Sie den Kurs in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts.",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 6,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 182°",
          "rwK = 177°",
          "rwK = 187°",
          "rwK = 192°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 182°"
      },
      {
        "number": 7,
        "question": "Die Ablenkung beträgt +4°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 177°",
          "MgK = 172°",
          "MgK = 182°",
          "MgK = 187°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 177°"
      },
      {
        "number": 8,
        "question": "Um 09:40 Uhr wird die Tonne \"E3\" querab passiert. Wie groß ist die Geschwindigkeit des Bootes seit dem durch Peilung bestimmten Standort?",
        "options": [
          "FüG = 7,5 kn",
          "FüG = 8,5 kn",
          "FüG = 6,5 kn",
          "FüG = 9,5 kn"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: FüG = 7,5 kn"
      },
      {
        "number": 9,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"ST\"",
        "options": [
          "Farbe: rot-wei0 senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball",
          "Farbe: rot, Kennung: rotes Blitzfeuer, Toppzeichen: roter Zylinder",
          "Farbe: rot-weiß waagerecht gestreift, Kennung: weißes Gleichtaktfeuer, Toppzeichen: roter Ball",
          "Farbe: grün, Kennung: grünes Funkelfeuer, Toppzeichen: grüner Kegel"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: rot-wei0 senkrecht gestreift Kennung: weißes Gleichtaktfeuer mit 8 Sekunden Wiederkehr Toppzeichen: roter Ball"
      }
    ]
  },
  {
    "id": 14,
    "title": "Navigationsaufgabe 14",
    "description": "Ein Sportboot verlässt am frühen Morgen des 31.08.2013 die Insel Neuwerk mit dem Ziel Husum. Die Fahrt über Grund wird mit 6 kn angegeben.",
    "questions": [
      {
        "number": 1,
        "question": "Beschreiben Sie das Feuer des Leuchtturms Neuwerk",
        "options": [
          "Blink in 3er Gruppen, weiß-rot-grün. 20 Sekunden Wiederkehr. Feuerträger 38 m hoch. Nenntragweite 16 sm bis 11 sm.",
          "Festfeuer in Sektoren, weiß-rot. 15 Sekunden Wiederkehr. Feuerträger 38 m hoch.",
          "Blinkfeuer, weiß, mit 8 Sekunden Wiederkehr. Feuerträger 33 m hoch.",
          "Funkelfeuer, weiß-rot-grün. 20 Sekunden Wiederkehr. Feuerträger 38 m hoch."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Blink in 3er Gruppen, weiß-rot-grün. 20 Sekunden Wiederkehr. Feuerträger 38 m hoch. Nenntragweite 16 sm bis 11 sm."
      },
      {
        "number": 2,
        "question": "Erläutern Sie die Bedeutung folgender Hintergrundfarben in der Seekarte: weiß, hellblau, hellgrün und hellgelb",
        "options": [
          "weiß: \"tiefes Wasser\" hellblau: \"flaches Wasser\" hellgrün: \"Watt\" hellgelb: \"Land\"",
          "weiß: \"tiefes Wasser\", hellblau: \"Watt\", hellgrün: \"flaches Wasser\", hellgelb: \"Land\"",
          "weiß: \"Land\", hellblau: \"tiefes Wasser\", hellgrün: \"Watt\", hellgelb: \"flaches Wasser\"",
          "weiß: \"Ankergebiet\", hellblau: \"flaches Wasser\", hellgrün: \"Naturschutzgebiet\", hellgelb: \"Land\""
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: weiß: \"tiefes Wasser\" hellblau: \"flaches Wasser\" hellgrün: \"Watt\" hellgelb: \"Land\""
      },
      {
        "number": 3,
        "question": "Gegen 07:00 Uhr wird die Tonne \"13/Neuwerk-Reede1\" nahebei passiert. Entnehmen Sie der Seekarte die geographische Position dieser Tonne",
        "options": [
          "53° 58,4' N 008° 28,2' E",
          "53° 56,4' N, 008° 29,7' E",
          "53° 57,4' N, 008° 27,2' E",
          "53° 59,4' N, 008° 29,2' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 58,4' N 008° 28,2' E"
      },
      {
        "number": 4,
        "question": "Von der Tonne \"13/Neuwerk-Reede1\" aus wird das Fahrwasser zunächst gequert. Dann fährt das Sportboot außerhalb des roten Tonnenstriches elbabwärts zur Tonne \"8\", die es um 07:45 Uhr erreicht. Von der Tonne \"8\" wird der Kurs auf die Tonne \"Norderelbe\" abgesetzt. Tragen Sie den Kurs ab Tonne \"8\" in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 5,
        "question": "Wie lautet der rwK?",
        "options": [
          "rwK = 038°",
          "rwK = 033°",
          "rwK = 043°",
          "rwK = 048°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 038°"
      },
      {
        "number": 6,
        "question": "Die Ablenkung beträgt +4°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 033°",
          "MgK = 038°",
          "MgK = 028°",
          "MgK = 043°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 033°"
      },
      {
        "number": 7,
        "question": "Wie groß ist die Distanz zwischen den Tonnen \"8\" und \"Norderelbe\"?",
        "options": [
          "3,6 sm",
          "4,8 sm",
          "3,0 sm",
          "4,2 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 3,6 sm"
      },
      {
        "number": 8,
        "question": "Um 08:30 Uhr werden mit dem Peilaufsatz am Magnetkompass die Tonne \"Süderpiep\" in MgP = 020° und die Tonne \"Norderelbe\" in MgP = 098° gepeilt. Die Ablenkung für den anliegenden Kurs beträgt +1°, die Mw ist der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "rwP = 022° Süderpiep rwP = 100° Norderelbe",
          "Objekt 1: rwP = 017°, Objekt 2: rwP = 105°",
          "Objekt 1: rwP = 027°, Objekt 2: rwP = 095°",
          "Objekt 1: rwP = 032°, Objekt 2: rwP = 110°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwP = 022° Süderpiep rwP = 100° Norderelbe"
      },
      {
        "number": 9,
        "question": "Tragen Sie die rechtweisenden Peilungen in die Seekarte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      }
    ]
  },
  {
    "id": 15,
    "title": "Navigationsaufgabe 15",
    "description": "Ein Sportboot läuft am 20.08.2011 von der Weser kommend in die Elbmündung.",
    "questions": [
      {
        "number": 1,
        "question": "Um 09:00 Uhr werden folgende Peilungen ermittelt: Leuchtturm \"Alte Weser\" MgP = 175° Leuchtturm \"Neuwerk\" MgP = 085° Die Ablenkung beträgt +5°, die Mw ist der Seekarte zu entnehmen. Wie lauten die rw-Peilungen?",
        "options": [
          "Leuchtturm \"Alte Weser\": rwP = 180°, Leuchtturm \"Neuwerk\": rwP = 090°",
          "Leuchtturm \"Alte Weser\": rwP = 190°, Leuchtturm \"Neuwerk\": rwP = 100°",
          "Leuchtturm \"Alte Weser\": rwP = 175°, Leuchtturm \"Neuwerk\": rwP = 095°",
          "Leuchtturm \"Alte Weser\": rwP = 185°, Leuchtturm \"Neuwerk\": rwP = 085°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Leuchtturm \"Alte Weser\": rwP = 180°, Leuchtturm \"Neuwerk\": rwP = 090°"
      },
      {
        "number": 2,
        "question": "Tragen Sie die rwP in die Karte ein",
        "options": [
          "Siehe Karte",
          "Zeichnung nicht erforderlich.",
          "Die gezeichnete Kurslinie / Peilung führt fälschlicherweise über Land.",
          "Die gezeichnete Position liegt außerhalb des zulässigen Kartenausschnitts."
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
      },
      {
        "number": 3,
        "question": "Geben Sie die ermittelte Position nach geographischer Breite und Länge an",
        "options": [
          "53° 54' 9' N 008° 07,6' E",
          "53° 53, 9' N, 008° 06, 6' E",
          "53° 55, 9' N, 008° 08, 6' E",
          "53° 52, 9' N, 008° 09, 1' E"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 53° 54' 9' N 008° 07,6' E"
      },
      {
        "number": 4,
        "question": "Von dieser Position aus setzen Sie Kurs auf die Tonne \"1\" des Elbe- Fahrwassers. Wie lautet der rwK?",
        "options": [
          "rwK = 037°",
          "rwK = 042°",
          "rwK = 032°",
          "rwK = 047°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: rwK = 037°"
      },
      {
        "number": 5,
        "question": "Die Ablenkung beträgt -2°, die Mw ist der Seekarte zu entnehmen. Wie lautet der MgK?",
        "options": [
          "MgK = 039°",
          "MgK = 049°",
          "MgK = 034°",
          "MgK = 044°"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: MgK = 039°"
      },
      {
        "number": 6,
        "question": "Wie groß ist die Distanz zur Tonne \"1\"?",
        "options": [
          "5,4 sm",
          "4,8 sm",
          "6,0 sm",
          "6,6 sm"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: 5,4 sm"
      },
      {
        "number": 7,
        "question": "Nach 1,8 sm kreuzt Ihr Kurs eine Eintragung in der Seekarte, die mit \"Obstn\" beschriftet ist. Was bedeutet diese Eintragung in der Seekarte?",
        "options": [
          "Schifffahrtshindernis mit einer Kartentiefe von 9,7 m",
          "Wrackstelle mit einer Kartentiefe von 9,7 m",
          "Gezeitenstrommessstation in 9,7 m Wassertiefe",
          "Ankerplatz für Boote bis 9,7 m Tiefgang"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Schifffahrtshindernis mit einer Kartentiefe von 9,7 m"
      },
      {
        "number": 8,
        "question": "Beschreiben Sie Farbe, Kennung und Toppzeichen der Tonne \"1\" des Elbe- Fahrwassers",
        "options": [
          "Farbe: grün Kennung: grünes Funkelfeuer Toppzeichen: grüner Kegel Spitze oben",
          "Farbe: grün, Kennung: grünes Gleichtaktfeuer, Toppzeichen: keines",
          "Farbe: rot, Kennung: rotes Funkelfeuer, Toppzeichen: roter Zylinder",
          "Farbe: grün, Kennung: grünes unterbrochenes Feuer, Toppzeichen: grüner Kegel Spitze unten"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Farbe: grün Kennung: grünes Funkelfeuer Toppzeichen: grüner Kegel Spitze oben"
      },
      {
        "number": 9,
        "question": "Die Revierzentrale \"Cuxhaven Elbe Traffic\" meldet drei über Bord gefallene Container in Position 53° 59,6' N und 008° 23,2' E. Tragen Sie die Position in die Seekarte ein.",
        "options": [
          "Siehe Karte",
          "53° 58,6' N und 008° 22,2 E, in Karte eingetragen",
          "54° 00,6' N und 008° 24,2 E, in Karte eingetragen",
          "53° 57,6' N und 008° 25,2 E, in Karte eingetragen"
        ],
        "correctIndex": 0,
        "explanation": "Offizielles ELWIS-Ergebnis: Siehe Karte"
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
