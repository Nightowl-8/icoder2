
var div2="<table>",div3="<table>",div1="<table>",global="<table>",div4="<table>",educational="<table>",div1and2="<table>";
var apiURL='https://codeforces.com/api/';
 var visitURL='https://codeforces.com/';
 var allProblemList= new Map();
 var unsolvedProblemList=[];
 var unsolvedHTML="<table>";
 var compareHTML=`
 <div class="input-group mb-3" style="width: 50%;margin:0 auto;">
 <input type="text" class="form-control" id="user-handle" placeholder="Codeforces handle" aria-label="Recipient's username" aria-describedby="basic-addon2">
 <div class="input-group-append">
   <button class="btn btn-success" id="user-submit" type="button" onclick="plotUser()">Compare</button>
   <button class="btn btn-danger" id="user-delete" type="button" onclick="delUser()">Remove last</button>
 </div>
</div>
<div class="graph" id="rating" style="background: none;"></div>
<div class="graph" id="performance" style="background: none;"></div>
<div class="graph" id="total-tried" style="background: none;"></div>
<div class="graph" id="total-solved" style="background: none;"></div>
<div class="graph" id="total-unsolved" style="background: none;"></div>
<div class="graph" id="solved-today" style="background: none;"></div>
 `;
function fillcfhandle(){
    cfhandle= prompt('Enter your cf handle');
}



 function getProblemURL(problemData){
     if(problemData['contestId'].toString().length>4) return visitURL+"/problemset/gymProblem/"+problemData['contestId']+"/"+problemData['index'];
     else return visitURL+"contest/"+problemData['contestId']+"/problem/"+problemData['index'];}
 function getProblemName(problemData){return problemData['name'];}
 function getProblemIndex(problemData){return problemData['index'];}
 function getProblemRating(problemData){
     if(problemData['rating']==null || problemData['rating']=="" || problemData['rating']=='undefined')return '--';
     else return problemData['rating'];
 }
 function getUniqueID(problemData){return problemData['contestId']+problemData['index'];}
 
 function solveProblem(problemURL){
     open(problemURL.id);
 }
function openContest(element){
  open(element.id);
}
function openVirtual(element){
    open(element.id);
}
$('.sidebar a').click(function(e){
   e.preventDefault();
    $('.sidebar a.active').removeClass('active roundDiv');
    $(this).addClass('active roundDiv');
})
$('.navbar a').click(function(e){
    e.preventDefault();
    $('.navbar a.active').removeClass('active');
    $(this).addClass('active');
})
$('#Contests').click(function(e){
    e.preventDefault();
    var ele=document.querySelector('.contests');
    if(ele.style.maxHeight){
        ele.style.maxHeight=null;
    }
    else{
        ele.style.maxHeight=ele.scrollHeight+"px";
    }
})
function showContent(div){
    const area=document.querySelector('.content');
   const id=div.id;
   if(id=='div1'){
     area.innerHTML=div1;
   }
   else if(id=='div2'){
    area.innerHTML=div2;
   }
   else if(id=='div3'){
    area.innerHTML=div3;
   }
   else if(id=='div4'){
    area.innerHTML=div4;
   }
   else if(id=='div1and2'){
    area.innerHTML=div1and2;
   }
   else if(id=='global'){
    area.innerHTML=global;
   }
   else if(id=='educational'){
    area.innerHTML=educational;
   }
   else if(id=='unsolved'){
       area.innerHTML=unsolvedHTML;
   }
   else if(id=='compare'){
       area.innerHTML=compareHTML;
   }
}
    $(document).ready(function(){
     $('#contests').click(function(){
        
         if($('#contests-list').css('visibility')=='hidden'){
            
             $('#contests-list').css({'visibility':'visible'});
         }
         else {
             $('#contests-list').css({'visibility':'hidden'});
         }
     })
    
    })
    // https://codeforces.com/contestRegistration/1562/virtual/true
    // https://codeforces.com/contest/1562

function  distributeData(data){
 data.forEach(function(element){
     if(element.name.includes('Educational')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        educational+=curr;
    }
    else if(element.name.includes('Global')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        global+=curr;
    }
    else if(element.name.includes('Div. 1 + Div. 2')){
        var curr=`
        <tr class="contest-row">
           <td class="contest-name" >${element.name}</td>
          <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
           <td class="contest-separater"></td>
           <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
       </tr>
       <tr class="contest-row-separater"></tr>
        `;
        div1and2+=curr;
    }
 else if(element.name.includes('Div. 1')){
      var curr=`
      <tr class="contest-row">
         <td class="contest-name" >${element.name}</td>
        <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
         <td class="contest-separater"></td>
         <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
     </tr>
     <tr class="contest-row-separater"></tr>
      `;
      div1+=curr;
  }
  else if(element.name.includes('Div. 2')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div2+=curr;
 }
  else if(element.name.includes('Div. 3')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div3+=curr;
 }
  else if(element.name.includes('Div. 4')){
     var curr=`
     <tr class="contest-row">
        <td class="contest-name" >${element.name}</td>
       <td class="solve-contest" id="https://codeforces.com/contest/${element.id}" onclick="openContest(this)">Solve</td>
        <td class="contest-separater"></td>
        <td class="virtual-contest" id=" https://codeforces.com/contestRegistration/${element.id}/virtual/true" onclick="openVirtual(this)">Start Virtual</td>
    </tr>
    <tr class="contest-row-separater"></tr>
     `;
     div4+=curr;
 }

  
  
 }); 
 div1+="</table>",div2+="</table>",div3+="</table>",div4+="</table>",global+="</table>",educational+="</table>",div1and2+="</table>";
 
}
async function getapi(url){
    const response= await fetch(url);
    var data = await response.json();    
   
    return data;
}

async function fillarrays(){
    const alldivs= await getapi('https://codeforces.com/api/contest.list?gym=false');
     distributeData(alldivs.result);
 }
 fillarrays();
  $(document).ready(function(){
    getStatus();
  
  })
  
 async function getStatus(){
     fillcfhandle();
     const allProblems= await getapi(`https://codeforces.com/api/user.status?handle=${cfhandle}&from=1&count=10000000`);
    // console.log(allProblems['result']);
     allProblems['result'].forEach(problemAdd => {
      //  console.log(getProblemURL(problemAdd['problem']));
      const idp=getUniqueID(problemAdd['problem']);
      if(allProblemList.has(idp)){
         if(allProblemList.get(idp).verdict=='OK'){}
         else{
             if(problemAdd['verdict']=='OK'){
                 allProblemList.get(idp).data=problemAdd['problem'];
                 allProblemList.get(idp).verdict='OK';
             }
         }
      }
      else{ allProblemList.set(idp,{data:problemAdd['problem'],verdict:problemAdd['verdict']});}
     });
     allProblemList.forEach(function(Data,id){
          if(Data['verdict']!='OK')unsolvedProblemList.push(Data);
     })
    document.querySelector('#no-of-unsolved').innerHTML=unsolvedProblemList.length;
     unsolvedProblemList.forEach(data=>{
          let ts=`
          <tr class="contest-row">
          <td class="problem-index" style="max-width:30px;">${getProblemIndex(data['data'])}</td>
          <td class="problem-name">${getProblemName(data['data'])}</td>
          <td class="contest-separater"></td>
          <td class="problem-rating">${getProblemRating(data['data'])}</td>
          <td class="problem-solve" id="${getProblemURL(data['data'])}" onclick="solveProblem(this)">Solve</td>
        </tr>
        <tr class="contest-row-separater"></tr>
          `;
          unsolvedHTML+=ts;
     })
     unsolvedHTML+="</table>";
     
  }
  
 