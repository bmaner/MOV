import create from "zustand";

const useStore = create((set) => {
  return {
    addMessage: false,
    setAddMessage: (bool) => set((state) => ({ addMessage: bool })),
    isEdited: false,
    setEdit: (isEdited) => set((state) => ({ isEdited: !state.isEdited })),
    router: null,
    dom: null,
  };
});

export default useStore;
