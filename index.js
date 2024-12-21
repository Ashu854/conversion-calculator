const conversionFactors = {
    'm': { 'm': 1, 'cm': 100, 'km': 0.001, 'in': 39.37, 'ft': 3.281, 'yd': 1.094 },
    'cm': { 'm': 0.01, 'cm': 1, 'km': 0.00001, 'in': 0.3937, 'ft': 0.03281, 'yd': 0.01094 },
    'km': { 'm': 1000, 'cm': 100000, 'km': 1, 'in': 39370.1, 'ft': 3280.84, 'yd': 1093.61 },
    'in': { 'm': 0.0254, 'cm': 2.54, 'km': 0.0000254, 'in': 1, 'ft': 0.08333, 'yd': 0.02778 },
    'ft': { 'm': 0.3048, 'cm': 30.48, 'km': 0.0003048, 'in': 12, 'ft': 1, 'yd': 0.33333 },
    'yd': { 'm': 0.9144, 'cm': 91.44, 'km': 0.0009144, 'in': 36, 'ft': 3, 'yd': 1 },
    'mi': {'m':1609.35, 'cm':160935, 'km':1.60395, 'in':63360.23622, 'ft':5280.019685, 'yd': 1760.0065617}
  };

  function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;


    const convertedValue = inputValue * conversionFactors[fromUnit][toUnit];
    document.getElementById('result').textContent = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(3)} ${toUnit}`;
  }



  const conversionFactor = {
    'sq_m': { 'sq_m': 1, 'sq_cm': 10000, 'sq_km': 0.000001, 'sq_in': 1550.00, 'sq_ft': 10.764, 'sq_yd': 1.196, 'acre': 0.000247, 'hectare': 0.0001 },
    'sq_cm': { 'sq_m': 0.0001, 'sq_cm': 1, 'sq_km': 1e-8, 'sq_in': 0.155, 'sq_ft': 0.001076, 'sq_yd': 0.0001196, 'acre': 2.471e-7, 'hectare': 1e-8 },
    'sq_km': { 'sq_m': 1000000, 'sq_cm': 1e8, 'sq_km': 1, 'sq_in': 15500000, 'sq_ft': 10763910.42, 'sq_yd': 1195990, 'acre': 247.105, 'hectare': 100 },
    'sq_in': { 'sq_m': 0.00064516, 'sq_cm': 6.4516, 'sq_km': 6.4516e-8, 'sq_in': 1, 'sq_ft': 0.006944, 'sq_yd': 0.0007716, 'acre': 1.594e-7, 'hectare': 6.4516e-8 },
    'sq_ft': { 'sq_m': 0.092903, 'sq_cm': 929.03, 'sq_km': 9.2903e-8, 'sq_in': 144, 'sq_ft': 1, 'sq_yd': 0.111111, 'acre': 0.000023, 'hectare': 0.000009 },
    'sq_yd': { 'sq_m': 0.836127, 'sq_cm': 8361.27, 'sq_km': 8.3613e-7, 'sq_in': 1296, 'sq_ft': 9, 'sq_yd': 1, 'acre': 0.000207, 'hectare': 0.000084 },
    'acre': { 'sq_m': 4046.86, 'sq_cm': 40468600, 'sq_km': 0.004047, 'sq_in': 6272640, 'sq_ft': 43560, 'sq_yd': 4840, 'acre': 1, 'hectare': 0.01 },
    'hectare': { 'sq_m': 10000, 'sq_cm': 100000000, 'sq_km': 0.01, 'sq_in': 15500000, 'sq_ft': 107639, 'sq_yd': 11960, 'acre': 10, 'hectare': 1 }
  };

  function converts() {
    const inputValue = parseFloat(document.getElementById('InputValue').value);
    const fromUnit = document.getElementById('FromUnit').value;
    const toUnit = document.getElementById('ToUnit').value;

    const convertedValue = inputValue * conversionFactor[fromUnit][toUnit];
    document.getElementById('results').textContent = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(5)} ${toUnit}`;
  }



  function converT() {
    const inputValue = parseFloat(document.getElementById('inpuTValue').value);
    const fromUnit = document.getElementById('fromUniT').value;
    const toUnit = document.getElementById('toUniT').value;

    let convertedValue;

    if (fromUnit === 'C') {
      if (toUnit === 'F') {
        convertedValue = (inputValue * 9/5) + 32;
      } else if (toUnit === 'K') {
        convertedValue = inputValue + 273.15;
      } else {
        convertedValue = inputValue; 
      }
    } else if (fromUnit === 'F') {
      if (toUnit === 'C') {
        convertedValue = (inputValue - 32) * 5/9;
      } else if (toUnit === 'K') {
        convertedValue = (inputValue + 459.67) * 5/9;
      } else {
        convertedValue = inputValue;
      }
    } else if (fromUnit === 'K') {
      if (toUnit === 'C') {
        convertedValue = inputValue - 273.15;
      } else if (toUnit === 'F') {
        convertedValue = (inputValue * 9/5) - 459.67;
      } else {
        convertedValue = inputValue;
      }
    }

    document.getElementById('resulT').textContent = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
  }


  const conversionFacTors = {
    'kg': { 'kg': 1, 'g': 1000, 'lb': 2.20462, 'oz': 35.274, 'mg': 1000000, 'tonne': 0.001 },
    'g': { 'kg': 0.001, 'g': 1, 'lb': 0.00220462, 'oz': 0.035274, 'mg': 1000, 'tonne': 1e-6 },
    'lb': { 'kg': 0.453592, 'g': 453.592, 'lb': 1, 'oz': 16, 'mg': 453592, 'tonne': 0.000453592 },
    'oz': { 'kg': 0.0283495, 'g': 28.3495, 'lb': 0.0625, 'oz': 1, 'mg': 28349.5, 'tonne': 2.83495e-5 },
    'mg': { 'kg': 1e-6, 'g': 0.001, 'lb': 2.20462e-6, 'oz': 3.5274e-5, 'mg': 1, 'tonne': 1e-9 },
    'tonne': { 'kg': 1000, 'g': 1000000, 'lb': 2204.62, 'oz': 35274, 'mg': 1000000000, 'tonne': 1 }
  };

  function conVert() {
    const inputValue = parseFloat(document.getElementById('inputValuE').value);
    const fromUnit = document.getElementById('froMUnit').value;
    const toUnit = document.getElementById('tOUnit').value;

    const convertedValue = inputValue * conversionFacTors[fromUnit][toUnit];
    document.getElementById('resuLt').textContent = `${inputValue} ${fromUnit} = ${convertedValue.toFixed(5)} ${toUnit}`;
  }