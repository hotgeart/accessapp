<template>
  <div v-if="json !== null">
    <h1>{{ $t("text.title") }}</h1>

    <h2>
      {{ $t("part1_title") }}
    </h2>

    <p>
      {{ json.orgname }} streeft ernaar [zijn]/[haar] [website(s)] [en] [mobiele applicatie(s)]
      toegankelijk te maken, overeenkomstig [nationale wetgeving tot omzetting van Richtlijn (EU)
      2016/2102 van
      het
      Europees Parlement en de Raad (1)].
    </p>

    <p>
      Deze toegankelijkheidsverklaring is van toepassing op [vul in wat de reikwijdte van de verklaring
      is, bv.
      website(s)/mobiele applicatie(s i ) waarop de verklaring van toepassing is, naargelang van het
      geval].
    </p>

    <h3>Nalevingsstatus</h3>
    <p>Deze [website(s)] [mobiele applicatie(s)] [voldoet] [voldoen] volledig aan [xxx iv].</p>

    <p>
      Deze [website(s)] [mobiele applicatie(s)] [voldoet] [voldoen] gedeeltelijkvi aan [xxx vii],
      [omdat niet aan
      de
      onderstaande eis(en) is voldaan] [en/of] [omdat de volgende vrijstellingen gelden].
    </p>

    <p>
      Deze [website(s)] [mobiele applicatie(s)] [voldoet] [voldoen] niet aan [xxx ix]. De [de eis(en)
      waaraan niet
      is
      voldaan] [en/of] [de vrijstellingen] worden hieronder genoemd.
    </p>

    <h3>Niet-toegankelijke inhoud</h3>

    <h4>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</h4>

    <h5>niet-naleving van de [nationale wetgeving]</h5>

    <p>
      [Noem de eis(en) van website(s)/mobile toepassing(en) die niet worden nageleefd, en/of, beschrijf
      welk(e)
      deel(delen)/inhoud/functie(s) nog niet aan de eis(en) voldoen.]
    </p>

    <h5>onevenredige last</h5>

    <p>
      [Noem het/de niet-toegankelijke deel (delen)/inhoud/functie(s) waarvoor de vrijstelling op grond
      van
      onevenredige
      last, in de zin van artikel 5 van Richtlijn (EU) 2016/2102 tijdelijk wordt ingeroepen.]
    </p>

    <h5>de inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h5>

    <p>
      [Noem het/de niet-toegankelijke deel (delen)/inhoud/functie(s) dat/die buiten de toepasselijke
      wetgeving
      valt/vallen.]
    </p>

    <p>[Vermeld toegankelijke alternatieven, indien van toepassing.]</p>

    <h3>Opstelling van deze toegankelijkheidsverklaring</h3>

    <p>Deze toegankelijkheidsverklaring is opgesteld op {{ json.lastUpdated }}.</p>

    <p>
      [Geef aan welke methode is gebruikt bij de opstelling van deze toegankelijkheidsverklaring (zie
      artikel 3,
      lid 1, van Uitvoeringbesluit (EU) 2018/1523 van de Commissie (2) ).]
    </p>

    <p>[De toegankelijkheidsverklaring is voor het laatst herzien op [datum laatste herziening].]</p>

    <h3>Feedback en contactgegevens</h3>

    <p>
      [Geef een beschrijving van, en een link naar, het feedbackmechanisme dat moet worden gebruikt om
      de
      overheidsinstantie in kennis te stellen van niet-nakoming van de regels en om informatie en
      inhoud te vragen
      die buiten het toepassingsgebied van de richtlijn valt.]
    </p>

    <p>
      [Geef contactgegevens van de betrokken entiteit(en)/eenheid (eenheden)/persoon(personen)
      (naargelang van het
      geval) die verantwoordelijk is (zijn) voor de toegankelijkheid en voor de verwerking van
      verzoeken die via
      het feedbackmechanisme worden verstuurd.]
    </p>

    <h3>Handhavingsprocedure</h3>

    <p>
      [Geef een beschrijving van, en een link naar, de handhavingsprocedure die moet worden gevolgd in
      het geval
      van onbevredigende antwoorden op kennisgevingen of verzoeken die overeenkomstig artikel 7, lid
      1, onder b),
      van de Richtlijn zijn verstuurd.]
    </p>

    <div v-html="json.contactInformation"></div>

    <h2>Deel 2 : Facultatieve Inhoud</h2>

    <div v-html="json.facultativeContent"></div>
  </div>
</template>

<script>
export default {
  name: "Nl",
  props: {
    json: Object
  }
};
</script>

