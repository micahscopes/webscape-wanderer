import moize from "moize";


export const asyncState = moize((ctx, key) => {
  let hasBeenSet = false;
  let resolver;
  let state = new Promise((resolve) => {
    resolver = resolve;
  });
  const set = (data) => {
    if (hasBeenSet) {
      state = data;
    } else {
      hasBeenSet = true;
      resolver(data);
    }
  };
  const get = () => state;
  return { set, get };
}, {
  maxSize: Infinity
});

export const state = moize.maxArgs(2)((ctx, key, initFn=()=>undefined) => {
  let state;
  const get = () => {
    if (state === undefined) {
      state = initFn();
    }
    return state
  };
  const set = (positions) => {
    state = positions;
  };
  return { set, get };
}, {
  maxSize: Infinity,
});
