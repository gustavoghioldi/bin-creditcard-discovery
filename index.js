require('dotenv').config()



function cmrType (bin) {
    switch (bin) {
        case process.env.cmr_clasica:
            return 'CMR_CLASICA';
            break;
        case process.env.cmr_visa:
            return 'CMR_VISA';
            break;
        case process.env.cmr_mastercard:
            return 'CMR_MASTERCARD';
            break;
        case process.env.cmr_visa_chip:
            return 'CMR_VISA_CHIP';
            break;
        case process.env.cmr_visa_platinum:
            return 'CMR_VISA_PLATINUM';
            break;
        case process.env.cmr_visa_signature:
            return 'CRM_VISA_SIGNATURE';
            break;
        case process.env.cmr_visa_contactless:
            return 'CMR_VISA_CONTACTLESS';
            break;
        case process.env.cmr_visa_pro:
            return 'CMR_VISA_PRO';
            break;
        case process.env.cmr_mastercard_contactless:
            return 'CMR_MASTERCARD_CONTACTLESS';
            break;
        case process.env.cmr_mastercard_premium:
            return 'CMR_MASTERCARD_PREMIUM';
            break;
        case process.env.cmr_mastercard_elite:
            return 'CMR_MASTERCARD_ELITE';
            break;
        default:
            return 'OTHER';
            break;
    }
}

function getBrand(bin) {
    var response = {};
    if (bin.match(process.env.visa_credito_regex) && !bin.match(process.env.visa_credito_regex_exclusion)) {
        response = {
            "brand": "VISA",
            "type": "credit"
        };
        
    }

    if (bin.match(process.env.master_credito_regex) && !bin.match(process.env.master_credito_regex_exclusion)) {
        response = {
            "brand": "MASTER",
            "type": "credit"
        };
    }

    if (bin.match(process.env.amex_credito_regex)) {
        response = {
            "brand": "AMEX",
            "type": "credit"
        };
    }

    if (bin.match(process.env.naranja_credito_regex)) {
        response = {
            "brand": "NARANJA",
            "type": "credit"
        };
    }

    if (bin.match(process.env.nativa_credito_regex)) {
        response = {
            "brand": "NATIVA",
            "type": "credit"
        };
    }

    if (bin.match(process.env.cabal_credito_regex)){
        response = {
            "brand": "CABAL",
            "type": "credit"
        };
    }

    if (bin.match(process.env.diners_credito_regex) && !bin.match(process.env.diners_credito_regex_exclusion)){
        response = {
            "brand": "DINERS",
            "type": "credit"
        };
    }

    if (bin.match(process.env.argencard_credito_regex) && !bin.match(process.env.argencard_credito_regex_exclusion)){
        response = {
            "brand": "ARGENCARD",
            "type": "credit"
        };
    }

    if (bin.match(process.env.maestro_debito_regex)){
        response = {
            "brand": "MAESTRO",
            "type": "debit"
        };
    }

    if (bin.match(process.env.cabal_debito_regex)) {
        response = {
            "brand": "CABAL",
            "type": "debit"
        };
    }

    if (bin.match(process.env.visa_debito_regex) && !bin.match(process.env.visa_debito_regex_exclusion)){
        response = {
            "brand": "VISA",
            "type": "debit"
        };
    }

    if (bin.match(process.env.cmr_clasica_regex)) {
        response = {
            "brand": "CMR",
            "type": null
        }
    }


    

    return response;
}

exports.bin = {getBrand, cmrType};