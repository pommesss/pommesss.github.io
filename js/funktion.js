var config = {
	apiKey: "AIzaSyAwivBh60QM9Ofla_uH3pXDRD_PwQxTFVY",
	authDomain: "kommentarer-836dc.firebaseapp.com",
	databaseURL: "https://kommentarer-836dc.firebaseio.com",
	projectId: "kommentarer-836dc",
	storageBucket: "kommentarer-836dc.appspot.com",
	messagingSenderId: "199155130013"
};
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
	var ref = firebase.database().ref().child("kommentarer");
	return $firebaseArray(ref);
});

app.controller("KommentarControl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;

	// Definera en kommentar med tom text och skribent
	$scope.kommentar = {
		text: "",
		skribent: ""
	};

	$scope.addComment = function() {
		$scope.kommentarer.$add($scope.kommentar);
		$scope.kommentar = {
			text: "",
			skribent: ""
		};
	}
});

function gissa1() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning1").value;
    // Kolla om gissningen var pikachu
    if (gissning == "crispy fries") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa2() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning2").value;
    // Kolla om gissningen var pikachu
    if (gissning == "pommes frites") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa3() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning3").value;
    // Kolla om gissningen var pikachu
    if (gissning == "king fries") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa4() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning4").value;
    // Kolla om gissningen var pikachu
    if (gissning == "idk") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa5() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning5").value;
    // Kolla om gissningen var pikachu
    if (gissning == "1680") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa6() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning6").value;
    // Kolla om gissningen var pikachu
    if (gissning == "1940") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
    } else {
    	alert("Fel! Försök igen.");
    }
}

function gissa7() {
    // Spara textrutans innehåll i variabeln gissning
    var gissning = document.getElementById("gissning7").value;
    // Kolla om gissningen var pikachu
    if (gissning == "SKIT GOTT") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("Rätt! Bra gissat.");
        alert("Varför körde du ens denna quiz?");
        alert("Haru inget bättre för dig?");
        alert("Aja...");
    } else {
    	alert("Fel! Försök igen.");
    	alert("seriösttttt");
    	alert("Jag skrev faktiskt svaret -.-");
    	alert("och om du inte gillar pommes så är det något fel på dina smaklökar.");
    	alert("du är helt enkelt konstig.");
    	alert("dissa ALDRIG pommes!");
    	alert("HEJDÅ din konstiga människa.");
    }
}



function showAlerts() {
	alert("Varför klickadxed du?");
	alert("VARFÖR?");
	alert("btw, en överraskning kommer va i slutet av alla alerts (:");
	alert("det står: klicka inte!");
	alert("MEN DU KLICKADE!");
	alert("VARFÖR");
	alert("KLICKADE");
	alert("DU");
	alert("ÄVEN");
	alert("FAST");
	alert("DET");
	alert("STÅR");
	alert("KLICKA");
	alert("INTE");
	alert("DU");
	alert("LYSSNADE");
	alert("INTE");
	alert("PÅ");
	alert("VAD");
	alert("JAG");
	alert("SA!");
	alert("WHY THO?!");
	alert("SAY");
	alert("YOU'RE");
	alert("SORRY");
	alert("NU");
	alert("E");
	alert("JAG");
	alert("VÄLDIGT");
	alert("LEDSEN"),
	alert("SÅ");
	alert("JAG");
	alert("KOMMER");
	alert("PLÅGA");
	alert("DIG!");
	alert("MOHAHAHAHHAHAHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert(".");
	alert("du tror jag kommer sluta");
	alert("sorry not sorry");
	alert("detta var ditt egna val!");
	alert("so live with it!");
	alert("DU valde allt klicka");
	alert("ingen tvingade dig");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("next time kanske du ska tänka");
	alert("innan du klickar där det står: klicka inte");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("HAHAHHAHAHAHAMOAHAHHA");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("USE YOUR BRAIN!");
	alert("okej sista nu");
	alert("bye, hoppas du har lärt dig en läxa.");
	alert("HAHAHAHAHHAHAHAHAHAH");
	alert("DU TRODDE");
	alert("really? du tror ja e så snäll");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");	
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("I'M NEVER GONNA STOP");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("NOPE");
	alert("kommer bara suta om du ger mig choklad");
	alert("men det kommer du inte");
	alert("så du får lida");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("GIMME CHOCOLATE");
	alert("JAG VILL HA CHOKLAD!!!OCH POMMES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");

	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");

	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("GIMME FRIES");
	alert("are you still here?");
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")


	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")


	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")

	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")

	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")

	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("GOODBYEEEEEEEEEEEEEEEEE")
	alert("NOPE")

	


}