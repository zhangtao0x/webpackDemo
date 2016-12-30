/**
 * Created by user on 2016/12/30.
 */

if(module.hot){
    module.hot.accept();
}

require('./style.css');
import Please from 'pleasejs'

var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor(){
    div.style.backgroundColor=Please.make_color();
}

button.addEventListener('click',changeColor);