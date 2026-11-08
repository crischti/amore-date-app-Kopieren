# Amore – PWA-Starter

Dies ist die erste installierbare Frontend-Version von Amore. Sie enthält:
- responsives Design im Stil des Referenzvideos
- Date-Filter für Budget, Dauer und Stimmung
- Date-Ideen-Generator
- PWA-Manifest und Service Worker für Installation
- Platzhalter für gemeinsamen Chat und Kontoverbindung

## Wichtig: Was noch NICHT aktiv ist
Die aktuelle Version ist eine lokale Vorschau. Nachrichten werden noch nicht zwischen zwei Handys synchronisiert. Es gibt noch keine echten Push-Benachrichtigungen, keine Benutzerkonten und keine Live-Kartensuche. Dafür müssen wir im nächsten Schritt ein Supabase-Projekt einrichten und die Zugangsdaten sicher ergänzen.

## Lokal testen
Am einfachsten mit Python:
```bash
python -m http.server 8000
```
Dann `http://localhost:8000` im Browser öffnen. Für die Installation auf iPhones muss die App über HTTPS erreichbar sein.

## Nächste Einrichtungsschritte
1. Supabase-Projekt erstellen.
2. Authentifizierung für zwei Nutzer einrichten.
3. Gemeinsamen Paar-/Einladungscode erstellen.
4. Tabellen für Date-Vorschläge und Nachrichten anlegen.
5. Realtime für Nachrichten aktivieren.
6. Push-Benachrichtigungen über einen sicheren Server-Endpunkt ergänzen.
7. App auf HTTPS hosten und auf beiden iPhones zum Home-Bildschirm hinzufügen.

## Standort
Der Startpunkt ist Gerlingen, Baden-Württemberg. Die aktuelle Demo zeigt noch keine live geprüften Entfernungen oder konkreten Anbieter. Die Kartensuche wird nach der Auswahl eines Karten-/Places-Dienstes ergänzt.

## Beziehungstage
Der Zähler wird aus dem Startdatum 28.06.2025 und dem aktuellen lokalen Datum des Geräts berechnet. Er aktualisiert sich automatisch bei jedem Öffnen bzw. Neuladen der App. Eine dauerhafte Hintergrundaktualisierung ist dafür nicht nötig.


## Aktualisierung: Date-Ideen und Filter
Die Vorschau enthält jetzt eine größere lokale Date-Datenbank. Budget, Dauer und Stimmung werden gemeinsam angewendet. Wenn es für eine Filterkombination keine passende Idee gibt, zeigt Amore einen Hinweis statt stillschweigend andere Filter zu ignorieren. Die Umkreisauswahl ist vorerst nur die Einstellung für die spätere Umkreissuche; echte Orte und Entfernungen benötigen anschließend Kartendaten.


## Aktualisierung: persönliche Merkliste
Die Merkliste speichert Date-Ideen lokal im Browser über localStorage. Sie bleibt auf dem jeweiligen Gerät erhalten, wird aber nicht zwischen deinem iPhone und dem iPhone deiner Freundin synchronisiert. Beide können unabhängig voneinander ihre Favoriten speichern. Es ist kein Konto und kein Backend nötig.
