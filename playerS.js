(function(global) {

function changePlayer(){

if('null' == localStorage.getItem('playerScratch')){
localStorage.setItem('playerScratch', '0');
}

player = localStorage.getItem('playerScratch');
var eleme = 'player';

if(typeof codeOriginalPlayer == 'undefined'){codeOriginalPlayer = document.getElementById(eleme).innerHTML;}

    //Create element html
    var html = '<iframe allowfullscreen height=400 width=480 frameborder="0" style="position:absolute;top:50%;left:50%;margin:-200px 0 0 -250px;" '
        if(player==1){
            html = html + 'src=https://phosphorus.github.io/embed.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';
        }
        if(player==2){
            html = html + 'src=https://sulfurous.aau.at/versions/v0.90/html/embed.html?id=' + idproject + '&turbo=false&full-screen=false></iframe>';
        }
        if(player==0){
            html=codeOriginalPlayer;
        }

    document.getElementById(eleme).innerHTML = html;
    document.getElementById(eleme).style = '';
}

function addChangerPlayer(){
	if(document.getElementById('selectorPlayer') == null){
	if(document.location.href.split("/").slice(3)[0]=='projects'){
var html = '<option value="0">Original</option><option value="1">Phosphorus</option><option value="2">Surforus</option>';
var para = document.createElement('select');
para.style.width = '100px';
para.id = 'selectorPlayer';
para.innerHTML = html;
idproject = document.location.href.split("/").slice(3)[1];
document.getElementById('stats').appendChild(para);
var val = localStorage.getItem('playerScratch');    
document.getElementById('selectorPlayer').value = val;
changePlayer();
document.getElementById('selectorPlayer').onchange = function () {
var player = document.getElementById('selectorPlayer').selectedIndex;
localStorage.setItem('playerScratch', player);
    changePlayer();
}}}}

addChangerPlayer();

}(this));