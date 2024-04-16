import { Component, HostBinding } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-esercenti",
  templateUrl: "./esercenti.component.html",
  styleUrls: ["./esercenti.component.css"],
  animations: [
    // animation triggers go here
  ],
})
export class EsercentiComponent {
  faqs = [
    {
      isOpen: false,
      header: "Chi può utilizzare WOM?",
      content: [
        `Tutti. WOM è una piattaforma di partecipazione attiva che riconosce il valore sociale delle azioni individuali. Cittadini, turisti, studenti, tutti possono scaricare l’applicazione gratuita WOM Pocket e guadagnare WOM visitando i luoghi e partecipando agli eventi di Pesaro 2024.`,
      ],
    },
    {
      isOpen: false,
      header: "C’è un costo di iscrizione?",
      content: [
        `No, l’iscrizione sul portale WOM è gratuita perchè è un’iniziativa di
    CTE Square, la casa delle Tecnologie Emergenti di Pesaro!`,
      ],
    },
    {
      isOpen: false,
      header:
        "La mia attività pratica già alcuni sconti, utilizzare WOM significherà praticare sconti aggiuntivi?",
      content: [
        `Con l’applicazione WOM POS hai la totale libertà di impostare le tue
        offerte, decidendo se renderle o no cumulabili con quelle che pratichi
        abitualmente.`,
      ],
    },
    {
      isOpen: false,
      header: "Cosa succede se effettuo l’Accesso Anonimo?",
      content: [
        `Con l'accesso anonimo puoi comunque impostare e praticare offerte, ma
        non vengono visualizzate sulla mappa WOM, né ricondotte alla tua
        attività.`,
      ],
    },
    {
      isOpen: false,
      header: "È necessario applicare i filtri?",
      content: [
        `No, nelle prime fasi di adozione della piattaforma ti sconsigliamo di
        usarli, perchè limiterebbero la possibilità di accesso alle tue offerte.`,
      ],
    },
    {
      isOpen: false,
      header: "Posso essere sia un utente che un esercente?",
      content: [
        `Certo. Puoi scaricare l’applicazione WOM Pocket e guadagnare WOM come
        tutti gli altri utenti.`,
      ],
    },
    {
      isOpen: false,
      header: "Posso cancellare un’offerta?",
      content: [
        `Certo! Si possono creare e revocare offerte in qualsiasi momento. Per
        cancellarle basta far scorrere verso sinistra la card corrispondente e
        cliccare sul cestino rosso. Attenzione: se elimini un’offerta getta via
        i QRcode che avevi eventualmente stampato, perchè non funzioneranno più.`,
      ],
    },
    {
      isOpen: false,
      header: "Alcuni esempi ed idee per offerte da presentare:",
      content: [
        "per 60 WOM 10% di sconto su un libro",
        "per 120 WOM il terzo articolo (meno costoso) è gratis",
        "per 30 WOM servizio al tavolo gratis",
        "per 15 WOM al caffè aggiungiamo un cioccolatino",
      ],
    },
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
