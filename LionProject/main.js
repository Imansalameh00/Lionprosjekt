
    // Warte, bis das Dokument vollständig geladen ist
    document.addEventListener("DOMContentLoaded", function() {
        // Finde das Audio-Element
        var audio = document.getElementById("myAudio");

        // Finde das Karten-Element, auf das geklickt werden soll
        var card = document.getElementById("playAudio");

        // Füge einen Event-Listener hinzu, der auf das Klickereignis reagiert
        card.addEventListener("click", function() {
            // Spiele das Audio ab
            audio.play();
        });
    });

