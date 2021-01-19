export const setDone = (id) =>  ({ type: "TODO_COMPLETE", id})

export const prioFun = (status) => ({ type: "TODO_PRIORITY", status})
