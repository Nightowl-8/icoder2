
var cnt=0;
var dataline=[];
var tSolved=[],tUnsolved=[],tTotal=[],solvedToday=[];
var date_today="";

function filltodaysdate(){
    var dateToday= new Date();
    dateToday=dateToday.toString();
   var newdatestring= dateToday.substr(0,16);
   newdatestring=newdatestring.trim();
   date_today=newdatestring;
}
filltodaysdate();
var dataSolved=[
    {
        x: users,
        y: tSolved,
        name:"Solved Problems",
        marker:{
            color:color,
            line:{
                width:0,
                color:'black',
            },
        },
        type: 'bar'
      }
];
var dataUnsolved=[
    {
        x: users,
        y: tUnsolved,
        name:"Unsolved Problems",
        marker:{
            color:color,
            line:{
                width:0,
                color:'black',
            },
        },
        type: 'bar'
      }
];
var dataTried=[
    {
        x: users,
        y: tTotal,
        name:"Total tried problems",
        marker:{
            color:color,
            line:{
                width:0,
                color:'black',
            },
        },
        type: 'bar'
      }
];
var dataToday=[
    {
        x: users,
        y: solvedToday,
        name:"Total tried problems",
        marker:{
            color:color,
            line:{
                width:0,
                color:'black',
            },
        },
        type: 'bar'
      }
];
var data = [
    {
      x: users,
      y: userRating,
      name:"Rating",
      marker:{
          color:color,
          line:{
              width:0,
              color:'black',
          },
      },
      type: 'bar'
    }
  ];
  const config = {
    displayModeBar: false, // this is the line that hides the bar.
    responsive:true,
  };
  const  layout={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"Friends ratings",
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0,
    },
    yaxis: {
      title: 'Ratings',
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'black',
      bordercolor: 'black'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout1={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    title:"Friends performance",
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Contests",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      showgrid:false,
      showticklabels: false,
    },
    yaxis: {
      title: 'Ratings',
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      showline:false,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'none',
      bordercolor: 'black'
    },
   
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout3={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0,
    },
    yaxis: {
      title: 'No of attempted problems',
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'black',
      bordercolor: 'black'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout2={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of problems solved today",
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'black',
      bordercolor: 'black'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout4={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of solved problems",
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'black',
      bordercolor: 'black'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  const  layout5={
    paper_bgcolor : "rgba(0, 0, 0, 0)",
    plot_bgcolor  : "rgba(0, 0, 0, 0)",
    fig_bgcolor   : "rgba(0, 0, 0, 0)",
    
    titlefont:{
      size:18,
      color:'black',
    },
    xaxis: {
        title:"Users",
        titlefont:{
            size: 16,
            color: 'black'
        },
        tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0,
    },
    yaxis: {
        title:"No of unsolved problems",
      titlefont: {
        size: 16,
        color: 'black'
      },
      tickfont: {
        size: 14,
        color: 'black'
      },
      gridwidth:0.4,
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'black',
      bordercolor: 'black'
    },
    barmode: 'group',
    bargap: 0.15,
    bargroupgap: 0.1,
    
  }
  var user_rating=0;
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
   
    return data;
}
function getDateOfProblem(timeInSecs){
    var datet=new Date(parseInt(timeInSecs)*1000);
    datet=datet.toString();
  datet= datet.substring(0,16);
   datet=datet.trim();
    return datet;
}
async function getUserRating(handle){
    const ratings= await getapi(`https://codeforces.com/api/user.rating?handle=${handle}`);
    const ProblemResponse= await getapi(`https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000000`);
    var responseprob=ProblemResponse['result'];
    var triedprob= new Map();
    var totalsolvedU = 0;
    var unsolvedU= 0;
    var solvedtodayU=0;
    responseprob.forEach(element=>{
        var idP=element['problem'].contestId+element['problem'].index;
        if(triedprob.has(idP)){
            if(triedprob.get(idP).verdict!='OK'){
                if(element.verdict=='OK')triedprob.get(idP).verdict='OK';
                if(element.verdict=='OK')triedprob.get(idP).creationTimeSeconds=element.creationTimeSeconds;
            }
        }
        else{
            
            triedprob.set(idP,{verdict:element.verdict,time:element.creationTimeSeconds});
        }
    });
    triedprob.forEach(function(element,id){
        if(element.verdict=='OK'){
            totalsolvedU++;
           // console.log(getDateOfProblem(element.time));
            if(getDateOfProblem(element.time)==date_today){
               
              solvedtodayU++;
            }
        }
        else unsolvedU++;
    });
   
    var totaltriedu=triedprob.size;
    tSolved.push(totalsolvedU);
    tUnsolved.push(unsolvedU);
    tTotal.push(totaltriedu);
    solvedToday.push(solvedtodayU);
    const lastContest=ratings['result'][ratings['result'].length-1];
    var nameC=[]
    var ratingC=[]
    
    ratings['result'].forEach(element => {
        nameC.push(element.ratingUpdateTimeSeconds);
        ratingC.push(element.newRating);
    });
    if(dataline.length==0){
        dataline.push({
            x:nameC,
            y:ratingC,
            type:'scatter',
            mode:"lines+markers",
            name:handle,
            line:{
              width:2,
              color:"black",
            },
            hovertemplate: `<i>user</i>: ${handle}<br><b>rating</b>: %{y}<br>`,
        })
    }
    else{
        dataline.push({
            x:nameC,
            y:ratingC,
            type:'scatter',
            mode:"lines+markers",
            name:handle,
            line:{
              width:2,
            },
            hovertemplate: `<i>user</i>: ${handle}<br><b>rating</b>: %{y}<br>`,
        })
    }
   
   user_rating=parseInt(lastContest.newRating);
   users.push(handle);
   userRating.push(user_rating);
   color.push(Math.floor(Math.random()*16777215).toString(16));
   Plotly.newPlot('rating', data,layout,config);
    Plotly.newPlot('total-tried', dataTried,layout3,config);
    Plotly.newPlot('total-solved', dataSolved,layout4,config);
    Plotly.newPlot('total-unsolved', dataUnsolved,layout5,config);
    Plotly.newPlot('performance', dataline,layout1,config);
    Plotly.newPlot('solved-today', dataToday,layout2,config);
   return 1;
}
function plotUser(){
  
   const handle=document.querySelector('#user-handle').value;
   getUserRating(handle);
  
  
   document.querySelector('#user-handle').value="";
  
   Plotly.newPlot('rating', data,layout,config);
    Plotly.newPlot('total-tried', dataTried,layout3,config);
    Plotly.newPlot('total-solved', dataSolved,layout4,config);
    Plotly.newPlot('total-unsolved', dataUnsolved,layout5,config);
    Plotly.newPlot('performance', dataline,layout1,config);
    Plotly.newPlot('solved-today', dataToday,layout2,config);
}
function delUser(){
    e.preventDefault();
    if(users.length>=1){
        users.pop();
    userRating.pop();
    color.pop();
    dataline.pop();
    tSolved.pop();
    tUnsolved.pop();
    tTotal.pop();
    cnt--;
    Plotly.newPlot('rating', data,layout,config);
    Plotly.newPlot('total-tried', dataTried,layout3,config);
    Plotly.newPlot('total-solved', dataSolved,layout4,config);
    Plotly.newPlot('total-unsolved', dataUnsolved,layout5,config);
    Plotly.newPlot('performance', dataline,layout1,config);
    Plotly.newPlot('solved-today', dataToday,layout2,config);
}
}

  
  