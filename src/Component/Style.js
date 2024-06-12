import styled from "styled-components";
 
export const Input = styled.div`
display:flex;
width: 60%;
background-color: cyan;
flex-direction: column;
margin:5rem auto;
padding: 3rem;
gap: 1rem;
border-radius: 0.5rem;
@media only screen and (max-width:796px){
    width: 90%;
}
@media only screen and (max-width:576px){
    width: 100%;
    margin: 0;
    padding: 0;
    .addTaskForm>div>input{
        border-radius: 0;
        border-radius: 0;
        background-color: red;

    }

}
.addTaskForm{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;

}
.addTaskForm>div{
    position: relative;
    width: 100%;
    height: auto;
}

.addTaskForm>div>input{
    width: 100%;
    padding: 4% 7%;
    border: none;
    outline: none;
    border-radius: 6px;
    background-color: #003f6a;
    font-size: 1.3rem;
    color: lightgray;
@media only screen and (max-width:576px){
    border-radius: 0;

}
}
.addTaskForm>div>img{
    width: 2.3rem;
    position: absolute;
    left: 1%;
    top: 25%;
}
.addTaskForm button>img{
    width: 2rem;
    object-fit: cover;

}
.addTaskForm button{
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.4rem;
    font-size: 1.3rem;
    border: none;
    background-color: #7a6a5e;
    border-radius: 4px;
    align-self: flex-end;
    cursor: pointer;
    color: white;
    
}
ul li{
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    padding: 0.7rem 0rem;
    justify-content: space-between;
    padding-left:0.6rem;

}
ul li:hover{
    background-color: wheat;
    .Icon_button{
        visibility: visible;
    }
}
 .Icon_button {
    display: flex;
    width: 25%;
    gap: 2rem;
    visibility: hidden;

}
 .Icon_button span>img{
    width: 1.1rem;
    cursor: pointer;
}
.line_through{
    text-decoration: line-through;
}

`;
export const EditForm = styled.form`
   width: 100%;
    display: flex;
    justify-content: space-between;
    .buttonWrapper{
        display: flex;
        gap: 1.3rem;
        align-items: center;
        width:20% ;
    }
    .editInput{
    padding: 0.6rem;
    width: 50%;
    border: none;
    outline: none;
    border-radius: 6px;

}
.editButton{
    padding: 0.3rem;
    border: none;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
}
.editCancelButton>img{
  width: 0.8rem;
  cursor: pointer;
}
`;