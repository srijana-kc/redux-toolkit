import { MdDeleteForever, } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DeleteAllUser } from "./DeleteAllUser";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = ()=>{

    const dispatch = useDispatch();
    
    const data = useSelector((state) =>{
        return state.users;
    })
    // console.log(data);
     
    const deleteUser = (id)=>{
           dispatch(removeUser(id));
    }

    return <Wrapper>
        {
           data.map((user,id)=>{
            return <li key={id}>
            {user}
            <button className="btn-delete" onClick={()=>deleteUser(id)}>
                <MdDeleteForever className="delete-icon"></MdDeleteForever>
            </button>
            </li>
           })
        }
    </Wrapper>

}

const Wrapper = styled.section`


`;

export {DisplayUsers};