
export interface Datum {
    ccy:             string;
    dictionaryKey:   string;
    dictionaryValue: string;
    rateWeight:      number;
    previousRate:    number;
    currentRate:     number;
    difference:      number;
    buyRate:         number;
    sellRate:        number;
    dgtlBuyRate:     number;
    dgtlSellRate:    number;
    midBuyRate:      null;
    midSellRate:     null;
    defaultCcy:      boolean;
    viewCcy:         string;
    name:            string;
    color:           string;
    symbol:          string;
}
export interface Welcome {
    data: Datum[];
}

