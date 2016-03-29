'use strict';

var React = require('react');
var Menu = require('../').Menu;
var MainButton = require('../').MainButton;
var ChildButton = require('../').ChildButton;

var panel = document.getElementById('panel'),
    showcode = document.getElementById('showcode'),
    selectFx = document.getElementById('selections-fx'),
    selectPos = document.getElementById('selections-pos'),
    selectMethod = document.getElementById('selections-method'),
    selectContent = document.getElementById('selections-content');

// demo defaults
var effect = 'zoomin',
    pos = 'br',
    method = 'hover';

function renderIconMenu(){
  var component = (
    <Menu effect={effect} method={method} position={pos}>
      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
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

  React.render(component, document.getElementById('menu'));
}

function renderTextMenu(){
  var component = (
    <Menu effect={effect} method={method} position={pos}>
      <MainButton iconResting="ion-plus-round" iconActive="ion-close-round" />
      <ChildButton
        //onClick={function(e){ console.log(e); e.preventDefault(); }}
        // icon="ion-social-github"
        label="View on Github"
        href="https://github.com/nobitagit/react-material-floating-button/"
        className="text">
        GitHub
      </ChildButton>
      <ChildButton
        icon="ion-social-octocat"
        label="Follow me on Github"
        href="https://github.com/nobitagit"
        className="text">
        nobitagit
      </ChildButton>
      <ChildButton
        icon="ion-social-twitter"
        label="Share on Twitter"
        href="http://twitter.com/share?text=Amazing Google Inbox style material floating menu as a React component!&url=http://nobitagit.github.io/react-material-floating-button/&hashtags=material,menu,reactjs,react,component"
        className="text">
        Twitter
      </ChildButton>
    </Menu>
  );

  React.render(component, document.getElementById('menu'));
}

renderIconMenu();

function switchEffect(){
  effect = this.options[this.selectedIndex].value;
  renderIconMenu();
}

function switchPosition(){
  pos = this.options[this.selectedIndex].value;
  renderIconMenu();
}

function switchMethod(){
  method = this.options[this.selectedIndex].value;
  renderIconMenu();
}

function switchContent(){
  var content = this.options[this.selectedIndex].value;
  if (content === 'icons') {
    renderIconMenu();
  } else {
    renderTextMenu();
  }
}

function toggleCode() {
  panel.classList.toggle('viewCode');
}

showcode.addEventListener('click', toggleCode);
selectFx.addEventListener('change', switchEffect);
selectPos.addEventListener('change', switchPosition);
selectMethod.addEventListener('change', switchMethod);
selectContent.addEventListener('change', switchContent);
