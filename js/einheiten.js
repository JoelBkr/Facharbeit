function swapUnits() {
	var eingabe = document.getElementById("select2").value;
	var ausgabe = document.getElementById("select3").value;
	document.getElementById("select3").value = eingabe;
	document.getElementById("select2").value = ausgabe;

	convert();
}

function selectChange() {
	var select1 = document.getElementById("select1");
	var select2 = document.getElementById("select2");
	var select3 = document.getElementById("select3");

	if (select1.value == "choose") {
		select2.innerHTML = '';
		select3.innerHTML = '';
	} else if (select1.value == "length") {
		select2.innerHTML = '<option value="meter">Meter</option>' +
			'<option value="centimeter">Zentimeter</option>' +
			'<option value="millimeter">Millimeter</option>' +
			'<option value="kilometer">Kilometer</option>' +
			'<option value="foot">Fuß</option>' +
			'<option value="yard">Yard</option>' +
			'<option value="mile">Meile</option>' +
			'<option value="decimeter">Decimeter</option>' +
			'<option value="nanometer">Nanometer</option>' +
			'<option value="micrometer">Mikrometer</option>' +
			'<option value="inch">Zoll</option>' +
			'<option value="nauticalmile">Seemeile</option>' +
			'<option value="picometer">Picometer</option>';

		select3.innerHTML = '<option value="meter">Meter</option>' +
			'<option value="centimeter">Zentimeter</option>' +
			'<option value="millimeter">Millimeter</option>' +
			'<option value="kilometer">Kilometer</option>' +
			'<option value="foot">Fuß</option>' +
			'<option value="yard">Yard</option>' +
			'<option value="mile">Meile</option>' +
			'<option value="decimeter">Decimeter</option>' +
			'<option value="nanometer">Nanometer</option>' +
			'<option value="micrometer">Mikrometer</option>' +
			'<option value="inch">Zoll</option>' +
			'<option value="nauticalmile">Seemeile</option>' +
			'<option value="picometer">Picometer</option>';
	} else if (select1.value == "time") {
		select2.innerHTML = '<option value="millisecond">Millisekunde</option>' +
			'<option value="second">Sekunde</option>' +
			'<option value="minute">Minute</option>' +
			'<option value="hour">Stunde</option>' +
			'<option value="day">Tag</option>' +
			'<option value="week">Woche</option>' +
			'<option value="month">Monat</option>' +
			'<option value="year">Jahr</option>';

		select3.innerHTML = '<option value="millisecond">Millisekunde</option>' +
			'<option value="second">Sekunde</option>' +
			'<option value="minute">Minute</option>' +
			'<option value="hour">Stunde</option>' +
			'<option value="day">Tag</option>' +
			'<option value="week">Woche</option>' +
			'<option value="month">Monat</option>' +
			'<option value="year">Jahr</option>';
	} else if (select1.value == "velocity") {
		select2.innerHTML = '<option value="mileperhour">Meilen pro Stunde</option>' +
			'<option value="footpersecond">Fuß pro Sekunde</option>' +
			'<option value="meterpersecond">Meter pro Sekunde</option>' +
			'<option value="kilometerperhour">Kilometer pro Stunde</option>' +
			'<option value="knot">Knoten</option>';

		select3.innerHTML = '<option value="mileperhour">Meilen pro Stunde</option>' +
			'<option value="footpersecond">Fuß pro Sekunde</option>' +
			'<option value="meterpersecond">Meter pro Sekunde</option>' +
			'<option value="kilometerperhour">Kilometer pro Stunde</option>' +
			'<option value="knot">Knoten</option>';
	} else if (select1.value == "area") {
		select2.innerHTML = '<option value="squarekilometer">Quadratkilometer</option>' +
			'<option value="squaremeter">Quadratmeter</option>' +
			'<option value="squaremile">Quadratmeile</option>' +
			'<option value="squareyard">Quadratyard</option>' +
			'<option value="squarefoot">Quadratfuß</option>' +
			'<option value="squareinch">Quadratzoll</option>' +
			'<option value="acre">Acre</option>' +
			'<option value="hectare">Hektar</option>';

		select3.innerHTML = '<option value="squarekilometer">Quadratkilometer</option>' +
			'<option value="squaremeter">Quadratmeter</option>' +
			'<option value="squaremile">Quadratmeile</option>' +
			'<option value="squareyard">Quadratyard</option>' +
			'<option value="squarefoot">Quadratfuß</option>' +
			'<option value="squareinch">Quadratzoll</option>' +
			'<option value="acre">Acre</option>' +
			'<option value="hectare">Hektar</option>';
	} else if (select1.value == "energy") {
		select2.innerHTML = '<option value="joule">Joule</option>' +
			'<option value="kilojoule">Kilojoule</option>' +
			'<option value="calorie">Kalorie</option>' +
			'<option value="kilocalorie">Kilokalorie</option>' +
			'<option value="watt-hour">Wattstunde</option>' +
			'<option value="kilowatt-hour">Kilowattstunde</option>' +
			'<option value="electronvolt">Elektronenvolt</option>' +
			'<option value="british-thermal-unit">Britische Thermaleinheit</option>' +
			'<option value="us-therm">US-Therm</option>' +
			'<option value="foot-pound">Fußpfund</option>';

		select3.innerHTML = select2.innerHTML = '<option value="joule">Joule</option>' +
			'<option value="kilojoule">Kilojoule</option>' +
			'<option value="calorie">Kalorie</option>' +
			'<option value="kilocalorie">Kilokalorie</option>' +
			'<option value="watt-hour">Wattstunde</option>' +
			'<option value="kilowatt-hour">Kilowattstunde</option>' +
			'<option value="electronvolt">Elektronenvolt</option>' +
			'<option value="british-thermal-unit">Britische Thermaleinheit</option>' +
			'<option value="us-therm">US-Therm</option>' +
			'<option value="foot-pound">Fußpfund</option>';

	} else if (select1.value == "mass") {
		select2.innerHTML = '<option value="tonne">Tonne</option>' +
			'<option value="kilogram">Kilogramm</option>' +
			'<option value="gram">Gramm</option>' +
			'<option value="milligram">Milligramm</option>' +
			'<option value="microgram">Mikrogramm</option>' +
			'<option value="pound">Pfund</option>';

		select3.innerHTML = '<option value="tonne">Tonne</option>' +
			'<option value="kilogram">Kilogramm</option>' +
			'<option value="gram">Gramm</option>' +
			'<option value="milligram">Milligramm</option>' +
			'<option value="microgram">Mikrogramm</option>' +
			'<option value="pound">Pfund</option>';
	} else if (select1.value == "temperature") {
		select2.innerHTML = '<option value="celsius">Celsius</option>' +
			'<option value="fahrenheit">Fahrenheit</option>' +
			'<option value="kelvin">Kelvin</option>';

		select3.innerHTML = '<option value="celsius">Celsius</option>' +
			'<option value="fahrenheit">Fahrenheit</option>' +
			'<option value="kelvin">Kelvin</option>';
	} else if (select1.value == "volume") {
		select2.innerHTML = '<option value="cubicmeter">Kubikmeter</option>' +
			'<option value="liter">Liter</option>' +
			'<option value="milliliter">Milliliter</option>' +
			'<option value="cubicfoot">Kubikfuß</option>' +
			'<option value="cubicinch">Kubikzoll</option>';

		select3.innerHTML = '<option value="cubicmeter">Kubikmeter</option>' +
			'<option value="liter">Liter</option>' +
			'<option value="milliliter">Milliliter</option>' +
			'<option value="cubicfoot">Kubikfuß</option>' +
			'<option value="cubicinch">Kubikzoll</option>';
	} else if (select1.value == "power") {
		select2.innerHTML = '<option value="watt">Watt</option>' +
			'<option value="kilowatt">Kilowatt</option>' +
			'<option value="pferdestaerke">Pferdestärke</option>';

		select3.innerHTML = '<option value="watt">Watt</option>' +
			'<option value="kilowatt">Kilowatt</option>' +
			'<option value="pferdestaerke">Pferdestärke</option>';
	}

	convert();
}

function convert() {
	const fromUnit = document.getElementById("select2").value;
	const toUnit = document.getElementById("select3").value;
	const value = document.getElementById("input").value;

	const convertedValue = convertLength(value, fromUnit, toUnit);

	const ergebnis = document.getElementById('result');
	ergebnis.value = convertedValue;

	if (fromUnit === toUnit) {
		// Wenn select2 und select3 gleich sind, gib die Eingabezahl als Ausgabezahl aus
		document.getElementById('result').value = value;
	} else {
		const convertedValue = convertLength(value, fromUnit, toUnit);
		document.getElementById('result').value = convertedValue;
	}
}

function copyToClipboard() {
	var copyText = document.getElementById("result");
	var isDisabled = copyText.disabled; // Speichere den aktuellen Status des "disabled"-Attributs
	copyText.disabled = false; // Entferne das "disabled"-Attribut
	copyText.select();
	document.execCommand("copy");
	copyText.disabled = isDisabled; // Stelle den vorherigen Status des "disabled"-Attributs wieder her		
}

function convertLength(value, fromUnit, toUnit) {
	const conversionFactors = {
		//Längen
		meter: {
			decimeter: 10,
			centimeter: 100,
			millimeter: 1000,
			micrometer: 1e+6,
			nanometer: 1e+9,
			kilometer: 0.001,
			foot: 3.28084,
			yard: 1.09361,
			mile: 0.000621371,
			inch: 39.3701,
			nauticalmile: 0.000539957,
			picometer: 1e+12,
		},
		kilometer: {
			meter: 1000,
			decimeter: 10000,
			centimeter: 100000,
			millimeter: 1e+6,
			micrometer: 1e+9,
			nanometer: 1e+12,
			foot: 3280.84,
			yard: 1093.61,
			mile: 0.621371,
			inch: 39370.1,
			nauticalmile: 0.539957,
			picometer: 1e+15,
		},
		decimeter: {
			meter: 0.1,
			centimeter: 10,
			millimeter: 100,
			micrometer: 1e+5,
			nanometer: 1e+8,
			kilometer: 0.0001,
			foot: 0.328084,
			yard: 0.109361,
			mile: 0.0000621371,
			inch: 3.93701,
			nauticalmile: 0.0000539957,
			picometer: 1e+13,
		},
		centimeter: {
			meter: 0.01,
			decimeter: 0.1,
			millimeter: 10,
			micrometer: 10000,
			nanometer: 1e+7,
			kilometer: 0.00001,
			foot: 0.0328084,
			yard: 0.0109361,
			mile: 0.00000621371,
			inch: 0.393701,
			nauticalmile: 0.00000539957,
			picometer: 1e+14,
		},
		millimeter: {
			meter: 0.001,
			decimeter: 0.01,
			centimeter: 0.1,
			micrometer: 1000,
			nanometer: 1e+6,
			kilometer: 0.000001,
			foot: 0.00328084,
			yard: 0.00109361,
			mile: 0.000000621371,
			inch: 0.0393701,
			nauticalmile: 0.000000539957,
			picometer: 1e+15,
		},
		micrometer: {
			meter: 1e-6,
			decimeter: 1e-5,
			centimeter: 0.0001,
			millimeter: 0.001,
			nanometer: 1000,
			kilometer: 1e-9,
			foot: 0.00000328084,
			yard: 0.00000109361,
			mile: 0.000000000621371,
			inch: 0.0000393701,
			nauticalmile: 0.000000000539957,
			picometer: 1e+12,
		},
		nanometer: {
			meter: 1e-9,
			decimeter: 1e-8,
			centimeter: 1e-7,
			millimeter: 0.000001,
			micrometer: 0.001,
			kilometer: 1e-12,
			foot: 0.00000000328084,
			yard: 0.00000000109361,
			mile: 0.000000000000621371,
			inch: 0.0000000393701,
			nauticalmile: 0.000000000000539957,
			picometer: 1e+6,
		},
		mile: {
			meter: 1609.34,
			decimeter: 16093.4,
			centimeter: 160934,
			millimeter: 1.609e+6,
			micrometer: 1.609e+9,
			nanometer: 1.609e+12,
			kilometer: 1.60934,
			foot: 5280,
			yard: 1760,
			inch: 63360,
			nauticalmile: 0.868976,
			picometer: 1.609e+15,
		},
		yard: {
			meter: 0.9144,
			decimeter: 9.144,
			centimeter: 91.44,
			millimeter: 914.4,
			micrometer: 914400,
			nanometer: 9.144e+8,
			kilometer: 0.0009144,
			foot: 3,
			mile: 0.000568182,
			inch: 36,
			nauticalmile: 0.000493737,
			picometer: 9.144e+11,
		},
		foot: {
			meter: 0.3048,
			decimeter: 3.048,
			centimeter: 30.48,
			millimeter: 304.8,
			micrometer: 304800,
			nanometer: 3.048e+8,
			kilometer: 0.0003048,
			yard: 0.333333,
			mile: 0.000189394,
			inch: 12,
			nauticalmile: 0.000164579,
			picometer: 3.048e+11,
		},
		inch: {
			meter: 0.0254,
			decimeter: 0.254,
			centimeter: 2.54,
			millimeter: 25.4,
			micrometer: 25400,
			nanometer: 2.54e+7,
			kilometer: 0.0000254,
			yard: 0.0277778,
			mile: 0.0000157828,
			foot: 0.0833333,
			nauticalmile: 0.0000137149,
			picometer: 2.54e+10,
		},
		nauticalmile: {
			meter: 1852,
			decimeter: 18520,
			centimeter: 185200,
			millimeter: 1.852e+6,
			micrometer: 1.852e+9,
			nanometer: 1.852e+12,
			kilometer: 1.852,
			foot: 6076.12,
			yard: 2025.37,
			mile: 1.15078,
			inch: 72913.4,
			picometer: 1.852e+15,
		},
		picometer: {
			meter: 1e-12,
			decimeter: 1e-11,
			centimeter: 1e-10,
			millimeter: 1e-9,
			micrometer: 0.001,
			nanometer: 0.000001,
			kilometer: 1e-15,
			foot: 3.28084e-12,
			yard: 1.09361e-12,
			mile: 6.21371e-16,
			inch: 3.93701e-11,
			nauticalmile: 5.39957e-16,
		},

		//Zeiten
		millisecond: {
			second: 0.001,
			minute: 0.0000166667,
			hour: 0.000000277778,
			day: 0.0000000115741,
			week: 0.0000000016534,
			month: 0.00000000038052,
			year: 0.0000000000317098,
		},
		second: {
			millisecond: 1000,
			minute: 0.0166667,
			hour: 0.000277778,
			day: 0.0000115741,
			week: 0.0000016534,
			month: 0.00000038052,
			year: 0.0000000317098,
		},
		minute: {
			millisecond: 60000,
			second: 60,
			hour: 0.0166667,
			day: 0.000694444,
			week: 0.0000992063,
			month: 0.0000228154,
			year: 0.00000190133,
		},
		hour: {
			millisecond: 3600000,
			second: 3600,
			minute: 60,
			day: 0.0416667,
			week: 0.00595238,
			month: 0.00136986,
			year: 0.000114155,
		},
		day: {
			millisecond: 86400000,
			second: 86400,
			minute: 1440,
			hour: 24,
			week: 0.142857,
			month: 0.0328767,
			year: 0.00273973,
		},
		week: {
			millisecond: 604800000,
			second: 604800,
			minute: 10080,
			hour: 168,
			day: 7,
			month: 0.229984,
			year: 0.0191781,
		},
		month: {
			millisecond: 2.628e+9,
			second: 2.628e+6,
			minute: 43800,
			hour: 730.001,
			day: 30.4167,
			week: 4.34524,
			year: 0.0833333,
		},
		year: {
			millisecond: 3.154e+10,
			second: 3.154e+7,
			minute: 525600,
			hour: 8760,
			day: 365,
			week: 52.1429,
			month: 12,
		},


		//Geschwindigkeiten
		mileperhour: {
			footpersecond: 1.46667,
			meterpersecond: 0.44704,
			kilometerperhour: 1.60934,
			knot: 0.868976,
		},
		footpersecond: {
			mileperhour: 0.681818,
			meterpersecond: 0.3048,
			kilometerperhour: 1.09728,
			knot: 0.592484,
		},
		meterpersecond: {
			mileperhour: 2.23694,
			footpersecond: 3.28084,
			kilometerperhour: 3.6,
			knot: 1.94384,
		},
		kilometerperhour: {
			mileperhour: 0.621371,
			footpersecond: 0.911344,
			meterpersecond: 0.277778,
			knot: 0.539957,
		},
		knot: {
			mileperhour: 1.15078,
			footpersecond: 1.68781,
			meterpersecond: 0.514444,
			kilometerperhour: 1.852,
		},
		//Fläche 
		squarekilometer: {
			squaremeter: 1e+6,
			squaremile: 0.386102,
			squareyard: 1.196e+6,
			squarefoot: 1.076e+7,
			squareinch: 1.55e+9,
			hectare: 100,
			acre: 247.105,
		},
		squaremeter: {
			squarekilometer: 1e-6,
			squaremile: 3.861e-7,
			squareyard: 1.196,
			squarefoot: 10.764,
			squareinch: 1550,
			hectare: 0.0001,
			acre: 0.000247105,
		},
		squaremile: {
			squarekilometer: 2.59,
			squaremeter: 2.59e+6,
			squareyard: 3.098e+6,
			squarefoot: 2.788e+7,
			squareinch: 4.014e+9,
			hectare: 259,
			acre: 640,
		},
		squareyard: {
			squarekilometer: 8.361e-7,
			squaremeter: 0.836127,
			squaremile: 3.228e-7,
			squarefoot: 9,
			squareinch: 1296,
			hectare: 8.361e-5,
			acre: 0.000206612,
		},
		squarefoot: {
			squarekilometer: 9.29e-8,
			squaremeter: 0.092903,
			squaremile: 3.587e-8,
			squareyard: 0.111111,
			squareinch: 144,
			hectare: 9.29e-6,
			acre: 0.0000229568,
		},
		squareinch: {
			squarekilometer: 6.452e-10,
			squaremeter: 0.00064516,
			squaremile: 2.491e-10,
			squareyard: 0.000771605,
			squarefoot: 0.00694444,
			hectare: 6.452e-8,
			acre: 1.59423e-7,
		},
		hectare: {
			squarekilometer: 0.01,
			squaremeter: 10000,
			squaremile: 0.00386102,
			squareyard: 11959.9,
			squarefoot: 107639.1,
			squareinch: 1.55e+7,
			acre: 2.47105,
		},
		acre: {
			squarekilometer: 0.00404686,
			squaremeter: 4046.86,
			squaremile: 0.0015625,
			squareyard: 4840,
			squarefoot: 43560,
			squareinch: 6.273e+6,
			hectare: 0.404686,
		},
		//Energien
		joule: {
			kilojoule: 0.001,
			calorie: 0.239006,
			kilocalorie: 0.000239006,
			wattHour: 0.000277778,
			kilowattHour: 2.78e-7,
			electronVolt: 6.24e+18,
			britishThermalUnit: 0.000947817,
			usTherm: 9.48e-9,
			footPound: 0.737562,
		},
		kilojoule: {
			joule: 1000,
			calorie: 239.006,
			kilocalorie: 0.239006,
			wattHour: 0.277778,
			kilowattHour: 0.000277778,
			electronVolt: 6.24e+21,
			britishThermalUnit: 0.947817,
			usTherm: 9.48e-6,
			footPound: 737.562,
		},
		calorie: {
			joule: 4.184,
			kilojoule: 0.004184,
			kilocalorie: 0.001,
			wattHour: 0.00116222,
			kilowattHour: 1.16e-6,
			electronVolt: 2.61e+19,
			britishThermalUnit: 0.00396567,
			usTherm: 3.97e-8,
			footPound: 3.08596,
		},
		kilocalorie: {
			joule: 4184,
			kilojoule: 4.184,
			calorie: 1000,
			wattHour: 1.16222,
			kilowattHour: 0.00116222,
			electronVolt: 2.61e+22,
			britishThermalUnit: 3.96567,
			usTherm: 3.97e-5,
			footPound: 3085.96,
		},
		wattHour: {
			joule: 3600,
			kilojoule: 3.6,
			calorie: 859.845,
			kilocalorie: 0.859845,
			kilowattHour: 0.001,
			electronVolt: 8.46e+22,
			britishThermalUnit: 3.41214,
			usTherm: 3.41e-5,
			footPound: 2655,
		},
		kilowattHour: {
			joule: 3.6e+6,
			kilojoule: 3600,
			calorie: 859845,
			kilocalorie: 859.845,
			wattHour: 1000,
			electronVolt: 8.46e+25,
			britishThermalUnit: 3412.14,
			usTherm: 0.0341278,
			footPound: 2.655e+6,
		},
		electronVolt: {
			joule: 1.6e-19,
			kilojoule: 1.6e-22,
			calorie: 3.83e-20,
			kilocalorie: 3.83e-23,
			wattHour: 4.45e-23,
			kilowattHour: 4.45e-26,
			britishThermalUnit: 3.83e-20,
			usTherm: 3.83e-26,
			footPound: 1.18e-18,
		},
		britishThermalUnit: {
			joule: 1055.06,
			kilojoule: 1.05506,
			calorie: 252.164,
			kilocalorie: 0.252164,
			wattHour: 0.293071,
			kilowattHour: 0.000293071,
			electronVolt: 6.59e+21,
			usTherm: 1.06e-5,
			footPound: 778.169,
		},
		usTherm: {
			joule: 1.05506e+8,
			kilojoule: 105506,
			calorie: 2.5216e+7,
			kilocalorie: 25216.4,
			wattHour: 29307.1,
			kilowattHour: 29.3071,
			electronVolt: 6.59e+24,
			britishThermalUnit: 99976.1,
			footPound: 7.78e+7,
		},
		footPound: {
			joule: 1.35582,
			kilojoule: 0.00135582,
			calorie: 0.324048,
			kilocalorie: 0.000324048,
			wattHour: 0.000376616,
			kilowattHour: 3.76616e-7,
			electronVolt: 8.462e+18,
			britishThermalUnit: 0.00128507,
			usTherm: 1.29e-8,
		},

		//Masse
		tonne: {
			kilogram: 1000,
			gram: 1e+6,
			milligram: 1e+9,
			microgram: 1e+12,
			pound: 2204.62,
		},
		kilogram: {
			tonne: 0.001,
			gram: 1000,
			milligram: 1e+6,
			microgram: 1e+9,
			pound: 2.20462,
		},
		gram: {
			tonne: 1e-6,
			kilogram: 0.001,
			milligram: 1000,
			microgram: 1e+6,
			pound: 0.00220462,
		},
		milligram: {
			tonne: 1e-9,
			kilogram: 1e-6,
			gram: 0.001,
			microgram: 1000,
			pound: 2.2046e-6,
		},
		microgram: {
			tonne: 1e-12,
			kilogram: 1e-9,
			gram: 1e-6,
			milligram: 0.001,
			pound: 2.2046e-9,
		},
		pound: {
			tonne: 0.000453592,
			kilogram: 0.453592,
			gram: 453.592,
			milligram: 453592,
			microgram: 4.536e+8,
		},

		//Volumen 
		cubicmeter: {
			liter: 1000,
			milliliter: 1e+6,
			cubicfoot: 35.3147,
			cubicinch: 61023.7,
		},
		liter: {
			cubicmeter: 0.001,
			milliliter: 1000,
			cubicfoot: 0.0353147,
			cubicinch: 61.0237,
		},
		milliliter: {
			cubicmeter: 1e-6,
			liter: 0.001,
			cubicfoot: 3.53147e-5,
			cubicinch: 0.0610237,
		},
		cubicfoot: {
			cubicmeter: 0.0283168,
			liter: 28.3168,
			milliliter: 28316.8,
			cubicinch: 1728,
		},
		cubicinch: {
			cubicmeter: 1.63871e-5,
			liter: 0.0163871,
			milliliter: 16.3871,
			cubicfoot: 5.78704e-4,
		},

		//Leistung
		watt: {
			kilowatt: 0.001,
			pferdestaerke: 0.00135962,
		},
		kilowatt: {
			watt: 1000,
			pferdestaerke: 1.35962,
		},
		pferdestaerke: {
			watt: 735.49875,
			kilowatt: 0.73549875,
		},
	};

	//Temperatur
	if (fromUnit === "celsius") {
		if (toUnit === "fahrenheit") {
			return (value * 9 / 5) + 32;
		} else if (toUnit === "kelvin") {
			return value + 273.15;
		}
	} else if (fromUnit === "fahrenheit") {
		if (toUnit === "celsius") {
			return (value - 32) * 5 / 9;
		} else if (toUnit === "kelvin") {
			return (value + 459.67) * 5 / 9;
		}
	} else if (fromUnit === "kelvin") {
		if (toUnit === "celsius") {
			return value - 273.15;
		} else if (toUnit === "fahrenheit") {
			return (value * 9 / 5) - 459.67;
		}
	}

	const factor = conversionFactors[fromUnit.toLowerCase()][toUnit.toLowerCase()];
	return value * factor;

};


