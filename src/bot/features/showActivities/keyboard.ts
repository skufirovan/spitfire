import { Markup } from "telegraf";
import { toButton } from "@utils/index";

export const ACTIVITIES_BUTTONS = {
  RECORD_DEMO: {
    text: "🎙 Записать демочку",
    callback: "ACTIVITIES_RECORD_DEMO",
  },
  RECORD_TT: { text: "🤳🏿 Снять ТТ", callback: "ACTIVITIES_RECORD_TT" },
  BATTLE: { text: "⚔️ Версус", callback: "ACTIVITIES_BATTLE" },
};

export const activitiesKeyboard = Markup.inlineKeyboard([
  [toButton(ACTIVITIES_BUTTONS.RECORD_DEMO)],
  [toButton(ACTIVITIES_BUTTONS.RECORD_TT)],
  [toButton(ACTIVITIES_BUTTONS.BATTLE)],
]);
