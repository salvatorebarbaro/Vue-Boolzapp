// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '../Vue-Boolzapp/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            
            nuovo_messaggio_digitato:"",
            scheda_attiva:{},
            valueTosearch:"",
            isPopupisVisible:false,
            isPopupisVisibleZoom:false,
            isClick:false,

        }
    },
    mounted() {
        // scheda da cui partiamo quando avviamo il programma
        this.scheda_attiva= this.contacts[0]
        
    },
    methods: {
        classeattiva(index)
        {
            // passiamo l'index della chat che è presente in pagina 
            // this.activeContactIndex = index;
            this.scheda_attiva= this.contacts[index]

        },
        add_message(nuovo_messaggio_digitato)
        {
            // aggiunta all'arry messages
            this.scheda_attiva.messages.push(
                {
                    // il messaggio sarà il valore che inseriamo
                    message:this.nuovo_messaggio_digitato,
                    // stato del messaggio per lo stile
                    status:'sent',
                     // data del messaggio usando la libreria luxon inserita nella pagina html
                    //  abbiamo imposatto la localita in italiano
                    // successivamente abbiamo impostato che ci restituisse la data abbreviata
                    date :window.luxon.DateTime.now().setLocale('it').toLocaleString(window.luxon.DateTime.DATETIME_SHORT)

                })
                // ritardo di tempo nella risposta che ci verra recapitata
                // usiamo set timeout perchè ci permette di eseguire l'azione solo una volta
                setTimeout(()=>
                {
                    this.scheda_attiva.messages.push
                    ({
                        // messaggio che vedremo
                        message:'ok' ,
                        // stato del messaggio
                        status:'received',
                         // data del messaggio usando la libreria luxon inserita nella pagina html
                    //  abbiamo imposatto la localita in italiano
                    // successivamente abbiamo impostato che ci restituisse la data abbreviata
                    date :window.luxon.DateTime.now().setLocale('it').toLocaleString(window.luxon.DateTime.DATETIME_SHORT)

                    })

                },
                1000)
        this.nuovo_messaggio_digitato=" ";
        
        },
        search_peapole()
        {
            // prendiamo il valore di input
            let inputText=this;

            // CICLIAMO PER OGNI VALORE IN CONTACTS
            this.contacts.forEach((element) => {
            
            let inputValue=inputText.valueTosearch;
              
                // CONFRONTO IGNORANDO MAIUSCOLE E MINUSCOLE SE PRESENTE VALORE CORRETTO
                if(element.name.toLowerCase().includes(inputValue.toLowerCase()))
                {
                    // ELEMENTO VISIBILE
                    element.visible=true;
                }
                else
                {
                    // ELEMENTO NON VISIBILE
                    element.visible=false;
                }

                
            });
            
        },
        // funzione per gestire apertura popup
        OpenPopup(type)
        {
            // apre il popup in base al tipo facendo un controllo
            if(type== 'zoom')
            {
                // se è isPopupisVisibleZoom diventa true e quindi visibile
                this.isPopupisVisibleZoom=true;
            }
            else
            {
                // senno apre l'altro popup
                this.isPopupisVisible=true;
            }
        },
        // funzione per gestire chiusura popup
        ClosePopup(type)
        {
            
            if(type== 'zoom')
            {
                // se è isPopupisVisibleZoom diventa false e quindi invisibile
                this.isPopupisVisibleZoom=false;
            }
            else
            {
                // senno chiude l'altro popup
                this.isPopupisVisible=false;
            }
        },
        Adduser(NomeNuovoUtente,ImgNuovoUtente)
        {
            
            

            const NewUser={
                name:NomeNuovoUtente,
                avatar:ImgNuovoUtente,
                visible:true,

            }
           
            this.contacts.push(NewUser);
            

            this.isPopupisVisible=false;
            console.log(this.contacts)
        },
        AumentaDiDimesione()
        {
            // funzione per associare la classe del font quando zoomiamo
            this.isClick=true;
        },
        DiminuisciDiDimesione()
        {
             // funzione per rimuovere la classe del font quando zoomiamo
            this.isClick=false;
        }

        


        
    },
}).mount('#app');