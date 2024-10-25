import { useState, useEffect, useRef } from "react";
import TitleLogo from "../components/title-logo";
import LanguageSwitcher from "../components/language";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

export default function Login(props) {
  const { t } = useTranslation();
  return (
    <>
      <TitleLogo insert="" />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between text-1xl px-2">
          <p className="uppercase">{t("room code")}</p>
        </div>
        <input
          className="border-4 border-secondary-600 p-2 rounded-2xl text-2xl uppercase"
          id="roomcode"
          onChange={(e) => {
            props.setRoomCode(e.target.value);
          }}
          maxLength={4}
          value={props.roomCode}
          placeholder={t("4 letter room code")}
        ></input>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between text-1xl px-2">
          <p className="uppercase">{t("name")}</p>
        </div>
        <input
          className="border-4 border-secondary-600 p-2 rounded-2xl text-2xl uppercase"
          id="playername"
          maxLength={32}
          value={props.playerName}
          onChange={(e) => {
            props.setPlayerName(e.target.value);
          }}
          placeholder={t("enter your name")}
        ></input>
      </div>
      <div className="flex flex-row items-center space-x-5">
        <button
          className="shadow-md flex-grow rounded-md bg-success-300 p-4 w-2/3 text-2xl uppercase"
          onClick={() => {
            props.joinRoom();
          }}
        >
          <div className="flex-grow">{t("play")}</div>
        </button>
        <button
          className="shadow-md rounded-md bg-secondary-300 p-4 text-2xl uppercase"
          onClick={() => {
            props.hostRoom();
          }}
        >
          {t("host")}
        </button>
      </div>
      {props.error !== "" ? (
        <p className="text-2xl text-failure-700">{props.error}</p>
      ) : null}

    </>
  );
}
