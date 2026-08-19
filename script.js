document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    const mainContent = document.querySelector('main');

    if (contactForm && mainContent) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Verhindert das Neuladen der Seite

            // Ersetzt den gesamten Hauptbereich durch die saubere Erfolgsmeldung
            mainContent.innerHTML = `
                <p class="sub-claim">Erfolgreich übermittelt</p>
                <h1>Vielen Dank für <span class="accent-amp">deine</span> Nachricht!</h1>
                
                <section class="form-container" style="text-align: center; padding: 2.5rem 1.5rem;">
                    <h2 style="color: #0c1938; margin-top: 0; margin-bottom: 0.8rem; font-size: 1.3rem;">
                        Deine Anfrage ist sicher bei uns gelandet.
                    </h2>
                    <p style="color: #334155; margin-bottom: 1.8rem; font-size: 1.05rem;">
                        Wir schauen uns deine Details in Ruhe an und melden uns innerhalb von 24 Stunden persönlich bei dir.
                    </p>
                    <a href="startseite.html" class="cta-btn">Zurück zur Startseite</a>
                </section>
            `;
        });
    }
});