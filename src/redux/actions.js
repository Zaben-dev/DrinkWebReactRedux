import {SET_USER_INFO} from "./actionTypes";

export function setUserInfo(userInfo){
  return{
    type: SET_USER_INFO,
    userInfo: userInfo
  }
}
