/**
 * Navigationsaufgaben See (Aufgabe 1–15)
 * In der echten Prüfung werden diese mit Karte D49 gelöst.
 * Hier als MC-Fragen zu Navigationskonzepten adaptiert.
 * 15 Aufgaben = 15 Fragen
 */
export const navigationQuestions = [
  {id:"N-001",category:"navigation_see",topic:"navigation",question:"Was ist der rechtweisende Kurs (rwK)?",options:["Der Winkel zwischen der rechtweisenden Nordrichtung und der Kurslinie, im Uhrzeigersinn gemessen","Der Kompasskurs","Der magnetische Kurs","Der gesteuerte Kurs"],correctIndex:0},
  {id:"N-002",category:"navigation_see",topic:"navigation",question:"Was ist die Missweisung (Mw)?",options:["Der Winkel zwischen der rechtweisenden und der magnetischen Nordrichtung an einem bestimmten Ort","Die Differenz zwischen Kompass- und Kartenkurs","Die Ablenkung durch Bordmagnetismus","Der Unterschied zwischen GPS- und Kompasskurs"],correctIndex:0},
  {id:"N-003",category:"navigation_see",topic:"navigation",question:"Was ist die Ablenkung (Abl)?",options:["Die Abweichung der Kompassnadel durch bordeigene magnetische Einflüsse (Deviation)","Die Missweisung","Der Tidenhub","Die Windversetzung"],correctIndex:0},
  {id:"N-004",category:"navigation_see",topic:"navigation",question:"Wie berechnet man den Magnetkompasskurs (MgK) aus dem rechtweisenden Kurs?",options:["MgK = rwK − Mw − Abl (unter Beachtung der Vorzeichen)","MgK = rwK + Mw + Abl","MgK = rwK × Mw","MgK = rwK / Abl"],correctIndex:0},
  {id:"N-005",category:"navigation_see",topic:"navigation",question:"Wie wird die Distanz auf einer Seekarte gemessen?",options:["Am Breitenmaßstab (seitlicher Kartenrand) mit dem Stechzirkel — 1 Bogenminute = 1 Seemeile","Am Längenmaßstab (oberer/unterer Rand)","Mit dem Lineal in Zentimetern","Am Kompass"],correctIndex:0},
  {id:"N-006",category:"navigation_see",topic:"navigation",question:"Was ist ein Koppelort (Ok)?",options:["Der aus Kurs, Geschwindigkeit und Zeit berechnete, voraussichtliche Schiffsort","Ein Ankerplatz","Ein Hafen","Ein Leuchtturm"],correctIndex:0},
  {id:"N-007",category:"navigation_see",topic:"navigation",question:"Was ist eine Peilung?",options:["Die Richtung zu einem Objekt, gemessen als Winkel von Nord im Uhrzeigersinn","Die Entfernung zu einem Objekt","Die Wassertiefe unter dem Kiel","Die Strömungsgeschwindigkeit"],correctIndex:0},
  {id:"N-008",category:"navigation_see",topic:"navigation",question:"Wie wird eine geographische Position auf der Seekarte angegeben?",options:["In Breite (Grad und Minuten N/S) und Länge (Grad und Minuten E/W)","In Kilometern vom nächsten Hafen","In UTM-Koordinaten","In Meilen und Kabellängen"],correctIndex:0},
  {id:"N-009",category:"navigation_see",topic:"navigation",question:"Was ist eine Seemeile (sm)?",options:["1852 Meter — die Länge einer Bogenminute auf dem Meridian","1000 Meter","1609 Meter","2000 Meter"],correctIndex:0},
  {id:"N-010",category:"navigation_see",topic:"navigation",question:"Was ist ein Knoten (kn)?",options:["Eine Seemeile pro Stunde (1,852 km/h)","Ein Kilometer pro Stunde","Eine Meile pro Minute","Ein Meter pro Sekunde"],correctIndex:0},
  {id:"N-011",category:"navigation_see",topic:"navigation",question:"Was ist eine Besteckversetzung (BV)?",options:["Der Unterschied zwischen dem Koppelort und dem tatsächlich beobachteten Ort","Eine Segeleinstellung","Ein Knotentyp","Eine Windänderung"],correctIndex:0},
  {id:"N-012",category:"navigation_see",topic:"navigation",question:"Was bedeutet die Seekartenangabe 'Fl(3) 10s' bei einem Leuchtfeuer?",options:["Blitzfeuer mit 3 Blitzen in einer Wiederkehr von 10 Sekunden","Festfeuer mit 10 Sekunden Pause","10 Blitze in 3 Sekunden","Funkelfeuer alle 3 Sekunden"],correctIndex:0},
  {id:"N-013",category:"navigation_see",topic:"navigation",question:"Was versteht man unter 'Gezeiten'?",options:["Das regelmäßige Steigen und Fallen des Wasserstandes, verursacht durch die Anziehungskraft von Mond und Sonne","Meeresströmungen","Wellengang bei Sturm","Wasserstandsänderungen durch Regen"],correctIndex:0},
  {id:"N-014",category:"navigation_see",topic:"navigation",question:"Was ist ein Kursdreieck?",options:["Ein nautisches Zeichengerät zum Anlegen und Übertragen von Kursen auf der Seekarte","Ein dreieckiges Segel","Eine Dreiecksfahrt","Ein Funkfeuer"],correctIndex:0},
  {id:"N-015",category:"navigation_see",topic:"navigation",question:"Wofür wird die Übungskarte D49 in der SBF-See-Prüfung verwendet?",options:["Für die Lösung der Navigationsaufgaben in der theoretischen Prüfung","Für die Binnenprüfung","Für den SKS-Schein","Für die UBI-Prüfung"],correctIndex:0},
]
