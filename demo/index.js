'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Menu = require('../').Menu;
var MainButton = require('../').MainButton;
var ChildButton = require('../').ChildButton;

var panel = document.getElementById('panel'),
    showcode = document.getElementById('showcode'),
    selectFx = document.getElementById('selections-fx'),
    selectPos = document.getElementById('selections-pos'),
    selectMethod = document.getElementById('selections-method');

// demo defaults
var effect = 'zoomin',
    pos = 'br',
    method = 'hover';

function renderMenu(){
  var component = (
    <Menu effect={effect} method={method} position={pos}>
      <MainButton iconRestingClass="ion-plus-round" iconActiveClass="ion-close-round" />
      <ChildButton
        //onClick={function(e){ console.log(e); e.preventDefault(); }}
        icon="ion-social-github"
        label="View on Github"
        href="https://github.com/nobitagit/react-material-floating-button/" />
      <ChildButton
        icon="ion-social-octocat"
        label="Follow me on Github"
        href="https://github.com/nobitagit" />
      <ChildButton
        icon="ion-social-twitter"
        label="Share on Twitter"
        href="http://twitter.com/share?text=Amazing Google Inbox style material floating menu as a React component!&url=http://nobitagit.github.io/react-material-floating-button/&hashtags=material,menu,reactjs,react,component" />
    </Menu>
  );

  ReactDOM.render(component, document.getElementById('menu'));
}

renderMenu();

function switchEffect(){
  effect = this.options[this.selectedIndex].value;
  renderMenu();
}

function switchPosition(){
  pos = this.options[this.selectedIndex].value;
  renderMenu();
}

function switchMethod(){
  method = this.options[this.selectedIndex].value;
  renderMenu();
}

function toggleCode() {
  panel.classList.toggle('viewCode');
}

showcode.addEventListener('click', toggleCode);
selectFx.addEventListener('change', switchEffect);
selectPos.addEventListener('change', switchPosition);
selectMethod.addEventListener('change', switchMethod);
