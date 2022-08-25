export type StateDataType = {
  user: {
    token: string | null;
  };
};

const initialState: StateDataType = {
  user: {
    token: null
  }
};

export const loginReducer = (state: StateDataType = initialState, action: any) => {
  return state;
};
