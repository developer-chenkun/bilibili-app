import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => {
    return {
      name: "Ck",
      face: "http://i1.hdslb.com/bfs/face/044268e16fc7c94d5880902759a563027e098dd5.jpg",
    };
  },

  getters: {
    getFace(state) {
      return state.face;
    },
  },

  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
