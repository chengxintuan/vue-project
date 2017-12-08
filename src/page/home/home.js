import _ from 'lodash';
import './home.less';

export function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}