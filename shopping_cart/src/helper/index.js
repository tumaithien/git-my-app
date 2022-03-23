class helpers{
    static toCurrency(value, currencyUnit, prosition = "left"){
        if(prosition === "left"){
            return currencyUnit + " " +value;
        }else if(prosition === "right"){
            return value + " " +currencyUnit;
        }
    }
}

export default helpers