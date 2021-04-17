import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Arslan Khalid",
      image:
        "https://scontent.flhe3-1.fna.fbcdn.net/v/t1.6435-9/120270313_1678786832325970_8139761353787146575_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHEI2hQwNjMu7DCMryNTd5Nd7Ukq5Rsj1J3tSSrlGyPUgVk7mbR9JkS54Hf2O-J8pZTj-S1GraBz6K4IT-v7_XV&_nc_ohc=8WI16bhmwNAAX9cLmar&_nc_ht=scontent.flhe3-1.fna&oh=2bb920db3ebd366cd00ebab101ff2955&oe=60A07FE2",
      places: 3,
    },
    {
      id: "u2",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];
  // const USERS = [
  //   {
  //     id: "u1",
  //     name: "Max Schwarz",
  //     image:
  //       "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //     places: 3,
  //   },
  // ];

  return <UsersList items={USERS} />;
};

export default Users;
