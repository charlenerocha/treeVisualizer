function drawChart(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(makeChart);

  function makeChart() {
    var totalBranches = (Math.pow(numberOfOptions,numberOfTimes)-1);

    var options = {
        colors: ['#d08947', '#a46242'],
        legend: {position: 'none'},
        backgroundColor: 'transparent',
        pieSliceText: 'value',
        pieSliceBorderColor: 'rgb(146, 107, 50)',
        width: 600,
        height: 600,
        fontName:'Luckiest Guy',
        fontSize: 30,
    };

    var data = google.visualization.arrayToDataTable([
      ['Options', 'Probability'],
      ['Your Tree Branch',     1],
      ['Other Branches',      totalBranches],
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    google.visualization.events.addListener(chart, 'ready', addIETransparentBg);

    chart.draw(data, options);
  }

  function addIETransparentBg(e) {
    $("iframe").contents().find("body").css({'background': 'none'});
  }
}