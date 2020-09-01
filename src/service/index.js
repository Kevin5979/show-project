import request from "./request"

export const getUser =  () => request.get("/user")
export const getData =  () => request.get("/data")
