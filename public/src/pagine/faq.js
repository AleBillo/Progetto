const faq = {
  template: `

   <div class="container mt-5">
        <h1 class="text-light text-center mb-4">Domande Frequenti (FAQ)</h1>
        <div class="accordion" id="faqAccordion">
            
           
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cos'è il vinile e perché dovrei acquistarlo?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Il vinile è un supporto fisico per la musica che offre un suono caldo e ricco. Molti amanti della musica preferiscono il vinile per la sua qualità sonora unica e il valore nostalgico. Acquistare vinili ti permette di riscoprire la musica in un formato autentico e duraturo.
                    </div>
                </div>
            </div>

           
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Come posso mantenere i miei vinili in buone condizioni?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Per mantenere i vinili in buone condizioni, è importante custodirli correttamente in un luogo fresco e asciutto, lontano dalla luce diretta. Inoltre, assicurati di pulirli regolarmente con una spazzola anti-statico e di maneggiarli per i bordi per evitare danni.
                    </div>
                </div>
            </div>

            
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Come faccio a sapere se un vinile è originale?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Un vinile originale di solito ha un'etichetta dettagliata e può avere numeri di serie specifici che lo identificano. Inoltre, molti vinili originali sono accompagnati da un inserto o una copertina con informazioni aggiuntive sull'album. È sempre una buona idea acquistare vinili da rivenditori affidabili.
                    </div>
                </div>
            </div>

           
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Come posso fare per acquistare un vinile nel vostro negozio?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Per acquistare vinili nel nostro negozio, basta navigare nel nostro listino online, scegliere i dischi che ti interessano e seguire la procedura di checkout. Accettiamo vari metodi di pagamento, inclusi carta di credito e PayPal.
                    </div>
                </div>
            </div>

           
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Offrite vinili rari e da collezione?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Sì, offriamo una selezione di vinili rari e da collezione. Puoi trovare dischi edizioni limitate, album di artisti leggendari e altri pezzi introvabili. Tieni d'occhio le nostre novità per non perdere le prossime uscite esclusive.
                    </div>
                </div>
            </div>

           
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Come posso contattare il servizio clienti?
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Puoi contattare il nostro servizio clienti tramite il modulo di contatto sulla nostra pagina di supporto, o inviando una email all'indirizzo supporto@billovinyls.it. Siamo disponibili anche via telefono dal lunedì al venerdì, dalle 9:00 alle 18:00.
                    </div>
                </div>
            </div>

          
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Posso restituire un vinile se non sono soddisfatto dell'acquisto?
                    </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                        Sì, offriamo una politica di restituzione entro 14 giorni dall'acquisto. Se il vinile che hai ricevuto è danneggiato o se non sei soddisfatto per qualsiasi motivo, contattaci per organizzare un reso o uno scambio.
                    </div>
                </div>
            </div>

        </div>
    </div>


  `,

  methods: {
  
  }
};

export default faq;
