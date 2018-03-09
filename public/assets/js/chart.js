//chart1
var quest1Data = [];
var quest1Labels = [];
var questionId = 1;
var formattedDate;

$.get("/api/charts/question_id/" + questionId, function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        quest1Data.push(data[i].answer);
        formattedDate = moment(data[i].createdAt).format("dddd");
        quest1Labels.push(formattedDate);        
    }   

    var ctx = document.getElementById("question1").getContext('2d');

    var question1 = new Chart(ctx, {
        type: 'bar',
        data: {        
            labels: quest1Labels, //["Rad", "Good", "Meh", "Sad", "Awful"],
            datasets: [{
                data: quest1Data,
                fill: false,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 1:
                                    return 'Unhappy';
                                case 2:
                                    return 'Somewhat Unhappy';
                                case 3:
                                    return 'Neutral';
                                case 4:
                                    return 'Somewhat Happy';
                                case 5:
                                    return 'Happy';
                            }
                        }
                    }
                }]
            }
        }
    });
});

//chart2
var quest2Data = [];
var quest2Labels = [];
questionId = 2;

$.get("/api/charts/question_id/" + questionId, function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        quest2Data.push(data[i].answer);
        formattedDate = moment(data[i].createdAt).format("MMM Do YY");
        quest2Labels.push(formattedDate);       
    }   

    var ctx = document.getElementById("question2").getContext('2d');

    var question2 = new Chart(ctx, {
        type: 'line',
        data: {        
            labels: quest2Labels, 
            datasets: [{
                data: quest2Data,
                fill: false,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 1:
                                    return 'No Energy';
                                case 2:
                                    return 'Moderate Energy';
                                case 3:
                                    return 'Lots of Energy';
                            }
                        }
                    }
                }]
            }
        }
    });
});

//chart3
var quest3Data = [];
var quest3Labels = [];
questionId = 3;

$.get("/api/charts/question_id/" + questionId, function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        quest3Data.push(data[i].answer);
        formattedDate = moment(data[i].createdAt).format("MMM Do YY");
        quest3Labels.push(formattedDate);    
    }   

    var ctx = document.getElementById("question3").getContext('2d');

    var question3 = new Chart(ctx, {
        type: 'bar',
        data: {        
            labels: quest3Labels, 
            datasets: [{
                data: quest3Data,
                fill: false,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 1:
                                    return 'Strongly Agree';
                                case 2:
                                    return 'Agree';
                                case 3:
                                    return 'Disagree';
                                case 4:
                                    return 'Strongly Disagree';
                            }
                        }
                    }
                }]
            }
        }
    });
});

//chart4
var quest4Labels = [];
questionId = 4;
var yesCount = 0;
var noCount = 0;

$.get("/api/charts/question_id/" + questionId, function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        if(data[i].answer === '1'){
            yesCount += 1;
        }
        else if(data[i].answer === '0'){
            noCount += 1;
        }
        formattedDate = moment(data[i].createdAt).format("MMM Do YY");
        quest4Labels.push(formattedDate);   
    }   

    var ctx = document.getElementById("question4").getContext('2d');

    var question4 = new Chart(ctx, {
        type: 'pie',
        data: {        
            labels: quest4Labels, 
            datasets: [{
                data: [yesCount,noCount],
                fill: false,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 1:
                                    return 'Yes';
                                case 2:
                                    return 'No';
                            }
                        }
                    }
                }]
            }
        }
    });
});

//chart5
var quest5data = [];
var quest5Labels = [];
questionId = 5;

$.get("/api/charts/question_id/" + questionId, function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        quest5data.push(data[i].answer);
        formattedDate = moment(data[i].createdAt).format("MMM Do YY");
        quest5Labels.push(formattedDate);   
    }   

    var ctx = document.getElementById("question5").getContext('2d');

    var question5 = new Chart(ctx, {
        type: 'bar',
        data: {        
            labels: quest5Labels, 
            datasets: [{
                data: quest5data,
                fill: false,
                pointHoverBackgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: { display: false},
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(label, index, labels) {
                            switch (label) {
                                case 1:
                                    return 'Strongly Agree';
                                case 2:
                                    return 'Agree';
                                case 3:
                                    return 'Disagree';
                                case 4:
                                    return 'Strongly Disagree';
                            }
                        }
                    }
                }]
            }
        }
    });
});