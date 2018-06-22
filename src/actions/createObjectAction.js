export default (createObjectAction = (type, payload) => {
  return { type, ...payload };
});
