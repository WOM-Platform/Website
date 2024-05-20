import { Component } from "@angular/core";

@Component({
  selector: "app-albergatori",
  templateUrl: "./albergatori.component.html",
  styleUrl: "./albergatori.component.css",
})
export class AlbergatoriComponent {
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
      header: "Posso diventare a mia volta un utente?",
      content: [
        `Certamente, WOM è aperto a tutti e dedicato a premiare la partecipazione di tutti, per diventare utente ti sarà sufficiente scaricare a tua volta l’app WOM Pocket e iniziare a guadagnare i WOM.`,
      ],
    },
    {
      isOpen: false,
      header: "I turisti devono creare un account per accedere a WOM Pocket?",
      content: [
        `No, la piattaforma WOM e l’app WOM Pocket sono completamente anonime.`,
      ],
    },
    {
      isOpen: false,
      header: "Posso realizzare sconti con la mia struttura su WOM Pocket?",
      content: [
        `Certamente, l’iscrizione al progetto è gratuita e aperta a tutti, basta scaricare e registrarsi sull’app WOM POS per poter creare offerte visibili agli utenti`,
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
