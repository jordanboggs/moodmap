let userId;
$.get("/api/userId").then(function (data) {
    userId = data.userId;
    console.log("USER ID = " + userId);
});

var quotes = [{
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    name: "Francis of Assisi"
    },
    {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt"
    },
    {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    name: "Confucius"
    },
    {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    name: "Thomas A. Edison"
    },
    {
    quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    name: "Confucius"
    },
    {
    quote: "Don't watch the clock; do what it does. Keep going.",
    name: "Sam Levenson"
    },
    {
    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    name: "Ayn Rand"
    },
    {
    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
    name: "Ayn Rand"
    },
    {
    quote: "Expect problems and eat them for breakfast.",
    name: "Alfred A. Montapert"
    },
    {
    quote: "Start where you are. Use what you have. Do what you can.",
    name: "Arthur Ashe"
    },
    {
    quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    name: "Samuel Beckett"
    },
    {
    quote: "Be yourself; everyone else is already taken.",
    name: "Oscar Wilde"
    },
    {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    name: "Albert Einstein"
    },
    {
    quote: "Always remember that you are absolutely unique. Just like everyone else.",
    name: "Margaret Mead"
    },
    {
    quote: "Do not take life too seriously. You will never get out of it alive.",
    name: "Elbert Hubbard"
    },
    {
    quote: "People who think they know everything are a great annoyance to those of us who do.",
    name: "Isaac Asimov"
    },
    {
    quote: "Procrastination is the art of keeping up with yesterday.",
    name: "Don Marquis"
    },
    {
    quote: "Get your facts first, then you can distort them as you please.",
    name: "Mark Twain"
    },
    {
    quote: "A day without sunshine is like, you know, night.",
    name: "Steve Martin"
    },
    {
    quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
    name: "Ellen DeGeneres"
    },
    {
    quote: "Don't sweat the petty things and don't pet the sweaty things.",
    name: "George Carlin"
    },
    {
    quote: "Always do whatever's next.",
    name: "George Carlin"
    },
    {
    quote: "Hapiness is not something ready made. It comes from your own actions.",
    name: "Dalai Lama"
    }
];

function getQuote() {
    var randomQuote = Math.floor(Math.random() * quotes.length);
    var selectedQuote = quotes[randomQuote];
    $('#main-quote').append(selectedQuote.quote);
    $('#author').append(selectedQuote.name);
};

$(function () {
    getQuote(); // call initially and get random quote
});

//chart1
var quest1Data = [];
var quest1Labels = [];
var questionId = 1;
var formattedDate;

$.get("/api/charts/question_id/" + questionId, function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        if(data[i].UserUserId === userId){
            quest1Data.push(data[i].answer);
            formattedDate = moment(data[i].createdAt).format("MMM Do YY");
            quest1Labels.push(formattedDate);
        }        
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
        if(data[i].UserUserId === userId){
            quest2Data.push(data[i].answer);
            formattedDate = moment(data[i].createdAt).format("MMM Do YY");
            quest2Labels.push(formattedDate);   
        }    
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
        if(data[i].UserUserId === userId){
            quest3Data.push(data[i].answer);
            formattedDate = moment(data[i].createdAt).format("MMM Do YY");
            quest3Labels.push(formattedDate);   
        } 
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
        if(data[i].UserUserId === userId){
            if(data[i].answer === '1'){
                yesCount += 1;
            }
            else if(data[i].answer === '0'){
                noCount += 1;
            }
            formattedDate = moment(data[i].createdAt).format("MMM Do YY");
            quest4Labels.push(formattedDate);   
        }
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
        if(data[i].UserUserId === userId){
            quest5data.push(data[i].answer);
            formattedDate = moment(data[i].createdAt).format("MMM Do YY");
            quest5Labels.push(formattedDate);   
        }
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