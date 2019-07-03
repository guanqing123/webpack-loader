import './layer.less';
import './layer.scss';
import html from './layer.html';
import tpl  from './layer.tpl';

function layer() {
    return {
        name: 'layer',
        html: html,
        tpl: tpl
    };
}

export default layer;