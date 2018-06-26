const createObjectAction = (type: string, payload: any) => {
  return { type, ...payload };
};

export default createObjectAction;
