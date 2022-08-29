const convertFromString = (stringData) => { return(
    {
    flourWeight: parseInt(stringData.flourWeight),
    doughWeight: parseInt(stringData.doughWeight),
    hydration: parseFloat(stringData.hydration),
    yeast: parseFloat(stringData.yeast),
    salt: parseFloat(stringData.salt),
    oil: parseFloat(stringData.oil)
    }
)};

export const calculateWeights = function(stringData, useFlour){

    const data = convertFromString(stringData);
    
    const round = (number, dp) => Math.round(number * (10**dp)) / (10**dp);

    const multiplier = (100 + data.hydration + data.yeast + data.salt + data.oil) / 100;

    const flourWeight = useFlour ? data.flourWeight : round(data.doughWeight / multiplier, 0);
    const waterWeight = round(flourWeight * data.hydration / 100, 0);
    const yeastWeight = round(flourWeight * data.yeast / 100, 1);
    const saltWeight = round(flourWeight * data.salt / 100, 1);
    const oilWeight = round(flourWeight * data.oil / 100, 1);

    const results = {
        flourWeight,
        waterWeight,
        yeastWeight,
        saltWeight,
        oilWeight
    }
    return results;
}