# CinetPay Payment Button

Bouton de Paiement CinetPay facile à integrer dans votre projet

## Utilisation Simple et rapide

Parfait pour ceux qui utilisent les solutions basées sur l'API

```html
<script src="/dist/v1/cinetpay-button.js?apikey=VOTRE_API_KEY"
        data-button="buynow"
        data-site_id="VOTRE_SITE_SITE_ID"
        async
></script>
```

Il existe pour l'instant trois types de boutons : `buynow`, `paynow`, `donate`.

## Utilisation du bouton CinetPay

Les scripts suivant creent un bouton cinetpay et un formulaire de paiement cinetpay pour vous


### Achetez maintenant (Buy Now)

```html
<script src="/dist/v1/cinetpay-button.js?apikey=VOTRE_API_KEY"
        data-button="buynow"
        data-site_id="VOTRE_SITE_SITE_ID"
        data-designation="DESIGNATION_DU_PRODUIT"
        data-amount="MONTANT_DU_PRODUIT"
        data-trans_id="ID_TRANSACTION"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V1"
        data-currency="CFA"
        data-language="fr"
        data-custom="CUSTOM"
        data-golive="yes or no"
        data-callback="PAGE_IPN"
        data-return_page="PAGE_RETOUR"
        data-cancel_page="PAGE_ANNULATION"
        async
></script>
```
Exemple : en TEST :
```html
<script src="/dist/v2/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="buynow"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V2"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="no"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```
En PROD :
```html
<script src="/dist/v1/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="buynow"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V1"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="yes"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```

### Payez Maintenant (pay now)

```html
<script src="/dist/v1/cinetpay-button.js?apikey=VOTRE_API_KEY"
        data-button="paynow"
        data-site_id="VOTRE_SITE_SITE_ID"
        data-designation="DESIGNATION_DU_PRODUIT"
        data-amount="MONTANT_DU_PRODUIT"
        data-trans_id="ID_TRANSACTION"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V1"
        data-currency="CFA"
        data-language="fr"
        data-custom="CUSTOM"
        data-golive="yes or no"
        data-callback="PAGE_IPN"
        data-return_page="PAGE_RETOUR"
        data-cancel_page="PAGE_ANNULATION"
        async
></script>
```
Exemple : en TEST :
```html
<script src="/dist/v2/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="paynow"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V2"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="no"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```
En PROD :
```html
<script src="/dist/v2/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="paynow"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V2"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="yes"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```


### Don (Donations)

```html
<script src="/dist/v1/cinetpay-button.js?apikey=VOTRE_API_KEY"
        data-button="donate"
        data-site_id="VOTRE_SITE_SITE_ID"
        data-designation="DESIGNATION_DU_PRODUIT"
        data-amount="MONTANT_DU_PRODUIT"
        data-trans_id="ID_TRANSACTION"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V1"
        data-currency="CFA"
        data-language="fr"
        data-custom="CUSTOM"
        data-golive="yes or no"
        data-callback="PAGE_IPN"
        data-return_page="PAGE_RETOUR"
        data-cancel_page="PAGE_ANNULATION"
        async
></script>
```
Exemple : en TEST :
```html
<script src="/dist/v2/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="donate"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V2"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="no"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```
En PROD :
```html
<script src="/dist/v1/cinetpay-button.js?apikey=174323661757617531bf99c9.80613927"
        data-button="donate"
        data-designation="Achat de mangue"
        data-amount="50"
        data-trans_id="5685968"
        data-payment_config="SINGLE"
        data-page_action="PAYMENT"
        data-version="V1"
        data-currency="CFA"
        data-language="fr"
        data-custom=""
        data-site_id="393509"
        data-golive="yes"
        data-callback="http://mondomaine.ci/notify/"
        data-return_page="http://mondomaine.ci/return/"
        data-cancel_page="http://mondomaine.ci/cancel/"
        async
></script>
```

## Fonctionnalité de CinetPay Js Button

### Data variables

* `data-button` Type de bouton
* `data-designation` Designation du produit
* `data-amount` Montant du paiement
* `data-trans_id` Id de la transaction, unique
* `data-payment_config` constante cinetpay, à ne pas changer
* `data-page_action` constante cinetpay, à ne pas changer
* `data-version` constante cinetpay, à ne pas changer
* `data-currency` constante cinetpay, à ne pas changer
* `data-language` constante cinetpay, à ne pas changer
* `data-custom` valeur que cinetpay vous retourne
* `data-site_id` votre site ID
* `data-golive` paramètre plateforme : yes pour la PROD et no pour la TEST
* `data-callback` lien IPN
* `data-return_page` lien de retour
* `data-cancel_page` lien d'annulation


## Navigateurs supporté

le bouton javascript a été testé et fonctionne sur tous les navigateurs modernes y compris :

* Chrome
* Safari
* Firefox
* Internet Explorer 8+.


## Votre Api Key et Site ID
Ces informations sont disponibles dans votre BackOffice CinetPay.