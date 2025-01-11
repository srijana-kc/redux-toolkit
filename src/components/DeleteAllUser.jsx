import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAllUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = ()=>{
    // console.log("hi function");
    dispatch(deleteAllUsers());


  }
  return  <Wrapper>
    <button className="btn clear-btn" onClick={()=>deleteUsers()}>Delete All Users</button>
  </Wrapper>

};

const Wrapper = styled.section`
.clear-btn{
text-transform:capitalize;
background-color: #db338a;
margin-top:2rem;
}
`