import React from "react";
import ChatUsers from "../../../component/Chatsection/ChatUsers";

export default function ChatMembers() {
  const players = [
    {
      profile:
        "https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-256.png",
      name: "Alen Mafia",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
    {
      profile:
        "https://cdn0.iconfinder.com/data/icons/IS_hallowen_social/256/su_superman.png",
      name: "Tranix Max",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
    {
      profile:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-256.png",
      name: "Benstock",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
    {
      profile:
        "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/19-monk-256.png",
      name: "King Jaker",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
    {
      profile:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/ozzy_male_avatar_rock_singer-256.png",
      name: "Skull Braker",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
    {
      profile:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-512.png",
      name: "Harley Queen",
      Message:
        "Lorem ipsum dolor sit amet,ncididunt ut lab ad minim veniam, ostrud exercitation ullamco laboris nisi ut ali",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        gap: "10px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {players.map((val, key) => {
        return (
          <div style={{ marginTop: "10px" }} key={key}>
            <ChatUsers
              profile={val.profile}
              key={key}
              name={val.name}
              message={val.Message}
            />
          </div>
        );
      })}
    </div>
  );
}
