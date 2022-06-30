import React from 'react';
import './header.scss';
import logo from '../../assets/logo.svg';
import addIcon from '../../assets/icons/plus.svg';
import mediaIcon from '../../assets/icons/media.svg';
import textIcon from '../../assets/icons/text.svg';
import lockIcon from '../../assets/icons/lock.svg';
import {getNotes, postNotes} from '../../utils/DataFetching';

const Header = ({
  onLockIconClick,
  textIconOnClick,
  mediaIconOnClick,
  lockIconActive,
  textIconActive,
  medaIconActive,
  newtNotes,
}) => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <div className="header__icons">
        <img
          src={addIcon}
          className="header__icon"
          alt="add new default text note"
          onClick={() => {
            postNotes();
            getNotes().then((res) => {
              if (res.data.length) {
                newtNotes(() => [...res.data]);
              }
            });
          }}
        />
        <img
          src={textIcon}
          className="header__icon"
          alt="hide text notes from workspace"
          onClick={textIconOnClick}
          style={textIconActive ? {borderColor: 'red'} : {borderColor: ''}}
        />
        <img
          src={mediaIcon}
          className="header__icon"
          alt="hide media notes from workspace"
          onClick={mediaIconOnClick}
          style={medaIconActive ? {borderColor: 'red'} : {borderColor: ''}}
        />
        <img
          src={lockIcon}
          className="header__icon"
          alt="lock all notes (disable interactions)"
          onClick={onLockIconClick}
          style={lockIconActive ? {borderColor: 'red'} : {borderColor: ''}}
        />
      </div>
    </header>
  );
};

export default Header;
