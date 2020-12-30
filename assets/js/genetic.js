var DNAlist = [];
var DNA = "";
var sortedObj = [];
var topCodons = [];
var chartMaker = {};

function sickleCell() {
    breakMaps(DNA);
    var map = "GAG";
    for (var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total)
            var percentage = proportion * 100
            var result = Math.round(percentage)
            sort()
            debugger;
            bootbox.alert({
                message: result + '%',
                className: 'rubberBand animated'
            });
        }

    }
    return (result)
}

function cystic() {
    breakMaps(DNA);
    var map = "TTT";
    for (var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            sort()
            bootbox.alert({
                message: result + '%',
                className: 'rubberBand animated'
            });
        }

        return (result);

    }
    return (result);
}

function fragilo() {
    breakMaps(DNA);
    var map = "CGG";
    for (var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            sort()
            bootbox.alert({
                message: result + '%',
                className: 'rubberBand animated'
            });
        }
    }
    return (result);
}

function tay() {
    breakMaps(DNA);
    var map = "CAA";
    for (var key in dnaCounter) {
        if (key === map) {
            var total = (DNAlist.length);
            var proportion = parseFloat((dnaCounter[key]) / total);
            var percentage = proportion * 100;
            var result = Math.round(percentage);
            sort()
            bootbox.alert({
                message: (result + '%'),
                className: 'rubberBand animated'
            });
        }
    }
    return (result);

}

function chartUp() {
    var datapoints = []
    topCodons.forEach(function(codon) {
        datapoints.push({})
    })
    datapoints.forEach(function(obj) {
        obj.y = topCodonVal[datapoints.indexOf(obj)]
        obj.name = topCodonStr[datapoints.indexOf(obj)]
    })

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Top Codons"
        },
        legend: {
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 90,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: []

        }]

    });
    chart.render();
}





$(document).ready(function() {
    $(".first-disease").hide();
    $(".second-disease").hide();
    $(".third-disease").hide();
    $(".fourth-disease").hide();

    $("#file").submit(function(event) {
        event.preventDefault();
        DNA = DNA + document.getElementById("sequence").value;
        bootbox.alert({
            message: "You have successfully submitted your sequence.",
            className: 'rubberBand animated'
        });
        $("#file").hide();
        chartUp()
        return (DNA);
    })
    $("#sickleCell").click(function(event) {
        event.preventDefault
        sickleCell()
    })
    $("#cystic").click(function(event) {
        event.preventFunction
        cystic()
    })

    $("#fragilo").click(function(event) {
        event.preventDefault
        fragilo()
    })

    $("#tay").click(function(event) {
        event.preventDefault
        tay()
    })
    $("#sickleInfo").click(function() {
        $(".first-disease").toggle();
    })
    $("#cysticInfo").click(function() {
        $(".second-disease").toggle();
    })
    $("#tayInfo").click(function() {
        $(".third-disease").toggle();
    })
    $("#fragiloInfo").click(function() {
        $(".fourth-disease").toggle();
    })


})