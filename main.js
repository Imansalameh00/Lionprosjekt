
    // Warte, bis das Dokument vollständig geladen ist
    document.addEventListener("DOMContentLoaded", function() {
        // Finde das Audio-Element
        var audio = document.getElementById("myAudio");
        var audio1 = document.getElementById("myAudio1");
        var audio2 = document.getElementById("myAudio2");
        var audio3 = document.getElementById("myAudio3");
        var audio4 = document.getElementById("myAudio4");

        var audio5 = document.getElementById("myAudio5");
        var audio6 = document.getElementById("myAudio6");
        




        // Finde das Karten-Element, auf das geklickt werden soll
        var card = document.getElementById("playAudio");
        
        var card1 = document.getElementById("playAudio1");
        var card2 = document.getElementById("playAudio2");
        var card3 = document.getElementById("playAudio3");
        var card4 = document.getElementById("playAudio4");
        
        var card5 = document.getElementById("playAudio5");
        var card6 = document.getElementById("playAudio6");
       



        // Füge einen Event-Listener hinzu, der auf das Klickereignis reagiert
        card.addEventListener("click", function() {
            // Spiele das Audio ab
            audio.play();
        });
        card1.addEventListener("click", function() {
            // Spiele das Audio ab
            audio1.play();
        });
        card2.addEventListener("click", function() {
            // Spiele das Audio ab
            audio2.play();
        });
        card3.addEventListener("click", function() {
            // Spiele das Audio ab
            audio3.play();
        });
        card4.addEventListener("click", function() {
            // Spiele das Audio ab
            audio4.play();
        });
        card5.addEventListener("click", function() {
            // Spiele das Audio ab
            audio5.play();
        });
        card6.addEventListener("click", function() {
            // Spiele das Audio ab
            audio6.play();
        });
    });

