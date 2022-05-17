function useState(state) {
  let localState = state;
  return [() => localState, (s) => localState = s];
}
