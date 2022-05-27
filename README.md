# todoFE

Componente FE che gestisce un'interfaccia per il recupero, la modifica, l'eliminazione e la creazione degli elementi di una To-Do list.

Angular CLI: 13.3.3 
Node: 16.15.0    
Package Manager: npm 8.5.5 

"ng serve" per avviare il programma



In src/app/features si trovano i componenti relativi alle varie viste che compongono l'interfaccia grafica.
La prima vista è un menù gestita dal componente "menu" che permette poi di muoversi verso:
1) una vista di creazione gestita dal compomente "crea-nuovo";
2) una vista di visualizzazione gestita dai componenti nella cartella "full-list";
3) una vista di ricerca estita dal componente "cerca-memo"

La vista di ricerca rimanda a una vista di visualizzazione degli elementi trovati gestita dal componente "memo-trovati".
La vista di visualizzazione può, se si seleziona il tasto modifica, rimandare a una vista di modifica gestita dal componente "form-modifica".

Commenti dettagliati inseriti nel file typescript relativo a ogni componente presente nella cartella src/app/features.

Nella cartella shared si trovano i modelli di dato e un componente per la gestione dei selettori usato per i tasti di modifica e eliminazione.
Nella cartella core si trovano i services per fare le chiamate al BE.






