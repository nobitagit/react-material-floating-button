'use strict';

var React = require('react');
var Menu = require('../').Menu;
var MainButton = require('../').MainButton;
var ChildButton = require('../').ChildButton;

var panel = document.getElementById('panel');
var showcode = document.getElementById('showcode');
var select = document.getElementById('selections');

var effect = 'zoomin';

function renderMenu(){
  var component = (
    <Menu effect={effect} method="hover" position="br">
      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
      <ChildButton
        onClick={function(e){ console.log(e); e.preventDefault(); }}
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

  React.render(component, document.getElementById('menu'));
}

renderMenu();

function switchEffect(){
  var selected = this.options[this.selectedIndex].value;
  effect = selected;
  renderMenu();
}

function toggleCode() {
  panel.classList.toggle('viewCode');
}

showcode.addEventListener('click', toggleCode);
select.addEventListener('change', switchEffect);
