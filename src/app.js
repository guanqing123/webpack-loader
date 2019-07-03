import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    var dom = document.getElementById('app');
    var layer = new Layer();
    alert(layer.name);
    dom.innerHTML = layer.tpl({
        name:'john',
        arr: ['apple','xiaomi','oppo']
    });
    var sass = document.getElementById('sass');
    sass.innerHTML = layer.html;
}

new App();