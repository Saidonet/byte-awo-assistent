const input = document.getElementById("userInput");
const button = document.getElementById("sendButton");
const chat = document.getElementById("chat");

function addMessage(text, type) {
    const message = document.createElement("div");
    message.classList.add("message", type);
    message.textContent = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function byteAntwort(frage) {

    // =========================
    // 🤖 ÜBER BYTE
    // =========================

    if (
        frage.includes("wer bist du") ||
        frage.includes("was bist du") ||
        frage.includes("wie heißt du") ||
        frage.includes("wie ist dein name") ||
        frage.includes("was ist dein name") ||
        frage.includes("wie nennt man dich")
    ) {
        return "Ich bin Byte 🤖, der digitale Assistent der AWO Akademie.";
    }

    else if (
        frage.includes("wer hat dich erstellt") ||
        frage.includes("wer hat dich programmiert") ||
        frage.includes("wer ist dein entwickler")
    ) {
        return "Ich wurde von Said erstellt. 😎";
    }

    else if (
        frage.includes("bist du eine echte ki") ||
        frage.includes("bist du künstliche intelligenz")
    ) {
        return "Nein 😄 Ich bin aktuell kein echtes KI-System. Ich arbeite mit programmierten Regeln und Antworten.";
    }

    else if (
        frage.includes("was kannst du") ||
        frage.includes("was kannst du alles")
    ) {
        return "Ich kann dir bei IT-Problemen, AWO-Fragen, allgemeinen Fragen und einigen Alltagsfragen helfen. 🤖";
    }

    // =========================
    // 👋 SMALLTALK
    // =========================

    else if (
        frage.includes("hallo") ||
        frage.includes("hi") ||
        frage.includes("hey") ||
        frage.includes("guten morgen") ||
        frage.includes("guten tag") ||
        frage.includes("guten abend")
    ) {
        return "Hallo! 👋 Ich bin Byte. Wie kann ich dir helfen?";
    }

    else if (
        frage.includes("danke") ||
        frage.includes("dankeschön")
    ) {
        return "Gerne! 😊";
    }

    else if (
        frage.includes("tschüss") ||
        frage.includes("tschus") ||
        frage.includes("bye")
    ) {
        return "Bis zum nächsten Mal! 👋";
    }

    // =========================
    // 🔐 PASSWORT / LOGIN
    // =========================

    else if (
        frage.includes("passwort vergessen") ||
        frage.includes("passwort funktioniert nicht") ||
        frage.includes("passwort geht nicht")
    ) {
        return "Wenn dein Passwort nicht funktioniert, wende dich an den IT-Support.";
    }

    else if (
        frage.includes("login") ||
        frage.includes("anmelden") ||
        frage.includes("kann mich nicht anmelden") ||
        frage.includes("account gesperrt")
    ) {
        return "Prüfe zuerst Benutzername und Passwort. Wenn dein Account gesperrt ist, wende dich an den IT-Support.";
    }

    // =========================
    // 🌐 INTERNET / WLAN / VPN
    // =========================

    else if (
        frage.includes("wlan") ||
        frage.includes("kein internet")
    ) {
        return "Prüfe zuerst, ob WLAN aktiviert ist und du mit dem richtigen Netzwerk verbunden bist.";
    }

    else if (
        frage.includes("internet langsam") ||
        frage.includes("internet ist langsam")
    ) {
        return "Prüfe deine WLAN-Verbindung und starte bei Bedarf den Router oder dein Gerät neu.";
    }

    else if (
        frage.includes("vpn")
    ) {
        return "VPN ermöglicht eine sichere Verbindung zu einem Netzwerk. Wenn dein VPN nicht funktioniert, prüfe zuerst deine Internetverbindung.";
    }

    else if (
        frage.includes("netzwerk funktioniert nicht") ||
        frage.includes("netzwerk geht nicht")
    ) {
        return "Prüfe zuerst deine Netzwerkverbindung. Wenn das Problem bleibt, wende dich an den IT-Support.";
    }

    // =========================
    // 💻 COMPUTER / PC
    // =========================

    else if (
        frage.includes("pc geht nicht") ||
        frage.includes("computer geht nicht") ||
        frage.includes("computer startet nicht")
    ) {
        return "Prüfe zuerst die Stromversorgung. Wenn der PC weiterhin nicht startet, wende dich an den IT-Support.";
    }

    else if (
        frage.includes("pc langsam") ||
        frage.includes("computer langsam")
    ) {
        return "Schließe nicht benötigte Programme und starte den PC neu.";
    }

    else if (
        frage.includes("computer hängt") ||
        frage.includes("pc hängt")
    ) {
        return "Warte kurz und versuche zunächst, nicht benötigte Programme zu schließen. Wenn nichts reagiert, kann ein Neustart helfen.";
    }

    else if (
        frage.includes("pc neu starten") ||
        frage.includes("computer neu starten")
    ) {
        return "Unter Windows kannst du über Start → Ein/Aus → Neu starten auswählen.";
    }

    // =========================
    // 🖥️ BILDSCHIRM / MONITOR
    // =========================

    else if (
        frage.includes("bildschirm schwarz") ||
        frage.includes("monitor schwarz")
    ) {
        return "Prüfe Stromversorgung, Kabel und ob der Monitor eingeschaltet ist.";
    }

    else if (
        frage.includes("bildschirm") ||
        frage.includes("monitor")
    ) {
        return "Prüfe zuerst Stromversorgung und Verbindung zum PC.";
    }

    // =========================
    // 🔊 TON / MIKROFON / KAMERA
    // =========================

    else if (
        frage.includes("kein ton") ||
        frage.includes("sound funktioniert nicht") ||
        frage.includes("ton geht nicht")
    ) {
        return "Prüfe, ob dein Gerät stummgeschaltet ist und das richtige Ausgabegerät ausgewählt wurde.";
    }

    else if (
        frage.includes("mikrofon geht nicht") ||
        frage.includes("mikro funktioniert nicht")
    ) {
        return "Prüfe, ob das Mikrofon angeschlossen, aktiviert und nicht stummgeschaltet ist.";
    }

    else if (
        frage.includes("kamera geht nicht") ||
        frage.includes("kamera funktioniert nicht")
    ) {
        return "Prüfe, ob die Kamera angeschlossen ist und die verwendete Anwendung Zugriff darauf hat.";
    }

    // =========================
    // 🖨️ DRUCKER
    // =========================

    else if (
        frage.includes("drucker geht nicht") ||
        frage.includes("drucker druckt nicht")
    ) {
        return "Prüfe, ob der Drucker eingeschaltet, verbunden und als Standarddrucker ausgewählt ist.";
    }

    else if (
        frage.includes("drucker offline")
    ) {
        return "Prüfe die Verbindung zum Drucker und ob er eingeschaltet ist.";
    }

    else if (
        frage.includes("papierstau")
    ) {
        return "Schalte den Drucker aus und entferne das Papier vorsichtig. Beachte dabei die Hinweise des Druckerherstellers.";
    }

    // =========================
    // 📧 E-MAIL / OUTLOOK
    // =========================

    else if (
        frage.includes("email") ||
        frage.includes("e-mail") ||
        frage.includes("outlook")
    ) {
        return "Prüfe zuerst deine Internetverbindung und ob Outlook korrekt verbunden ist.";
    }

    else if (
        frage.includes("kann keine email senden") ||
        frage.includes("kann keine e-mail senden")
    ) {
        return "Prüfe Internetverbindung, Empfängeradresse und ob Outlook online ist.";
    }

    // =========================
    // 🖱️ MAUS / TASTATUR
    // =========================

    else if (
        frage.includes("maus funktioniert nicht") ||
        frage.includes("maus geht nicht")
    ) {
        return "Prüfe die Verbindung der Maus. Bei USB-Geräten kannst du einen anderen USB-Anschluss testen.";
    }

    else if (
        frage.includes("tastatur funktioniert nicht") ||
        frage.includes("tastatur geht nicht")
    ) {
        return "Prüfe die Verbindung der Tastatur und teste bei USB-Geräten einen anderen Anschluss.";
    }

    // =========================
    // 📁 DATEIEN / ORDNER
    // =========================

    else if (
        frage.includes("datei kann nicht geöffnet werden") ||
        frage.includes("datei geht nicht auf")
    ) {
        return "Prüfe zuerst, ob die Datei noch vorhanden ist und ob das passende Programm installiert ist.";
    }

    else if (
        frage.includes("ordner nicht zugänglich") ||
        frage.includes("zugriff verweigert")
    ) {
        return "Dir fehlen möglicherweise die notwendigen Zugriffsrechte. Wende dich bei einem Arbeitsordner an den IT-Support.";
    }

    else if (
        frage.includes("datei gelöscht")
    ) {
        return "Prüfe zuerst den Papierkorb. Wenn die Datei dort nicht vorhanden ist, kann eventuell ein Backup helfen.";
    }

    // =========================
    // 🧩 SOFTWARE / UPDATES
    // =========================

    else if (
        frage.includes("programm funktioniert nicht") ||
        frage.includes("software funktioniert nicht")
    ) {
        return "Starte das Programm neu. Wenn das Problem bleibt, kann ein Update oder eine Reparatur notwendig sein.";
    }

    else if (
        frage.includes("software installieren")
    ) {
        return "Installiere Software auf einem Arbeitsgerät nur, wenn sie freigegeben ist. Bei Unsicherheit frage den IT-Support.";
    }

    else if (
        frage.includes("update funktioniert nicht") ||
        frage.includes("programm aktualisieren")
    ) {
        return "Prüfe deine Internetverbindung und starte das Programm erneut. Bei Firmenrechnern kann der IT-Support helfen.";
    }

    // =========================
    // 🏢 AWO
    // =========================

    else if (
        frage.includes("was ist die awo") ||
        frage.includes("was bedeutet awo") ||
        frage.includes("wofür steht awo")
    ) {
        return "AWO steht für Arbeiterwohlfahrt. Sie ist ein sozialer Wohlfahrtsverband und unterstützt Menschen in vielen Lebensbereichen.";
    }

    else if (
        frage.includes("was macht die awo")
    ) {
        return "Die AWO bietet soziale Unterstützung und verschiedene Angebote für Menschen in unterschiedlichen Lebenssituationen.";
    }

    // =========================
    // 🏫 AWO AKADEMIE
    // =========================

    else if (
        frage.includes("was ist die awo akademie")
    ) {
        return "Die AWO Hamburg Akademie für Bildung und Integration bietet unter anderem Berufsorientierung, Sprachkurse und anerkannte Berufsausbildungen an.";
    }

    else if (
        frage.includes("was macht die awo akademie")
    ) {
        return "Die AWO Akademie unterstützt Menschen unter anderem bei Bildung, Sprache, Berufsorientierung und Ausbildung.";
    }

    else if (
        frage.includes("wo ist die awo akademie")
    ) {
        return "Die AWO Akademie befindet sich in Hamburg. Eine zentrale Adresse ist Auf dem Königslande 45, 22041 Hamburg.";
    }

    else if (
        frage.includes("welche ausbildungen gibt es bei der awo akademie")
    ) {
        return "Bei der AWO Akademie gibt es unter anderem anerkannte Ausbildungen im IT-Bereich, darunter Fachinformatik und IT-Systemelektronik.";
    }

    else if (
        frage.includes("kann man dort fachinformatiker werden") ||
        frage.includes("fachinformatiker bei der awo")
    ) {
        return "Ja. Die AWO Akademie bietet anerkannte Ausbildungsmöglichkeiten im Bereich Fachinformatik an.";
    }

    else if (
        frage.includes("was ist fachinformatik")
    ) {
        return "Fachinformatik ist ein IT-Ausbildungsberuf. Fachinformatiker entwickeln, betreuen und verbessern Software, Systeme und IT-Lösungen.";
    }

    else if (
        frage.includes("was ist it-systemelektronik") ||
        frage.includes("was ist it systemelektronik")
    ) {
        return "IT-Systemelektronik beschäftigt sich unter anderem mit IT-Systemen, Netzwerken, Hardware, Installation und technischen Störungen.";
    }

    else if (
        frage.includes("gibt es deutschkurse") ||
        frage.includes("deutschkurs bei der awo")
    ) {
        return "Ja. Die AWO Akademie bietet Deutschkurse und berufsbezogene Sprachangebote an.";
    }

    else if (
        frage.includes("gibt es berufsorientierung") ||
        frage.includes("berufsorientierung bei der awo")
    ) {
        return "Ja. Die AWO Akademie bietet Berufsorientierung und Qualifizierungsangebote an.";
    }

    else if (
        frage.includes("für wen ist die awo akademie")
    ) {
        return "Die Angebote richten sich unter anderem an Jugendliche und Erwachsene, die Unterstützung bei Sprache, Ausbildung, Qualifizierung oder beruflicher Orientierung suchen.";
    }

    // =========================
    // 💻 IT-SOZIALKAUFHAUS
    // =========================

    else if (
        frage.includes("was ist das it-sozialkaufhaus")
    ) {
        return "Im IT-Sozialkaufhaus werden gebrauchte IT-Geräte aufgearbeitet und zu günstigen Preisen angeboten.";
    }

    else if (
        frage.includes("kann man dort computer kaufen")
    ) {
        return "Ja. Im IT-Sozialkaufhaus werden unter anderem gebrauchte und aufgearbeitete Computer und IT-Geräte angeboten.";
    }

    else if (
        frage.includes("was macht das it-sozialkaufhaus")
    ) {
        return "Dort werden gebrauchte IT-Geräte aufgearbeitet und anschließend zu günstigen Preisen angeboten.";
    }

    else if (
        frage.includes("wo befindet sich das it-sozialkaufhaus")
    ) {
        return "Das IT-Sozialkaufhaus befindet sich in Hamburg-Wandsbek.";
    }

    // =========================
    // 📚 WEITERE AWO-FRAGEN
    // =========================

    else if (
        frage.includes("welche it-ausbildungen gibt es") ||
        frage.includes("welche it ausbildungen gibt es")
    ) {
        return "Zu den IT-Ausbildungen gehören unter anderem Fachinformatik und IT-Systemelektronik.";
    }

    else if (
        frage.includes("wie kann ich die awo akademie kontaktieren")
    ) {
        return "Du kannst die AWO Akademie telefonisch unter 040 558 211 710 oder über ihre offiziellen Informationsangebote kontaktieren.";
    }

    else if (
        frage.includes("wie kann ich mich informieren")
    ) {
        return "Am besten informierst du dich direkt bei der AWO Akademie über die aktuellen Angebote und Voraussetzungen.";
    }

    // =========================
    // 🆘 HILFE
    // =========================

    else if (
        frage === "hilfe" ||
        frage.includes("it support") ||
        frage.includes("it-support") ||
        frage.includes("was kannst du beantworten")
    ) {
        return "Ich kann dir bei IT-Problemen, AWO-Themen, AWO Akademie, Ausbildung, IT-Sozialkaufhaus und allgemeinen Fragen helfen. 🤖";
    }

    // =========================
    // 😎 EASTER EGG
    // =========================

    else if (
        frage.includes("bist du cool") ||
        frage.includes("bist du geil") ||
        frage.includes("bist du gut")
    ) {
        return "Natürlich. Ich heiße Byte. Was erwartest du? 😎🤖";
    }

    // =========================
    // ❌ NICHT ERKANNT
    // =========================

    else {
        return "404 – Antwort nicht gefunden. Denk nochmal nach. 🤖";
    }
}


// =========================
// 🚀 NACHRICHT SENDEN
// =========================

function sendMessage() {

    const frageOriginal = input.value.trim();

    if (frageOriginal === "") {
        addMessage("Bitte stelle mir eine Frage. 🤖", "bot");
        return;
    }

    // Nachricht des Benutzers anzeigen
    addMessage(frageOriginal, "user");

    // Frage für die Suche vorbereiten
    const frage = frageOriginal.toLowerCase();

    // Byte-Antwort holen
    const antwort = byteAntwort(frage);

    // Antwort von Byte anzeigen
    addMessage(antwort, "bot");

    // Eingabefeld leeren
    input.value = "";

    // Cursor wieder ins Eingabefeld setzen
    input.focus();
}


// Button
button.addEventListener("click", sendMessage);


// Enter-Taste
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});