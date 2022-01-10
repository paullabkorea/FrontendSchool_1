import React from "react";
import styled from "styled-components";

const ProductNavUl = styled.ul`
  display: flex;
  list-style: none;
`;

const ProductNavLi = styled.li`
  color: ${(props) => (props.listName === props.id ? `red` : `black`)};
 cursor: pointer;
 & + li {
   margin-left: 20px;
 }
 &::after {
   display: block;
   content: "";
   height: 2px;
   width: 100%;
   background-color: ${(props) =>
     props.listName === props.id ? `red` : `transparent`};
   margin-top: 4px;
`;


function NavBar({ changeState, stateValue }) {
  return (
    <>
      <nav>
        <ProductNavUl>
          <ProductNavLi id="detail" onClick={changeState} listName={stateValue}>
            상세정보
          </ProductNavLi>
          <ProductNavLi id="qa" onClick={changeState} listName={stateValue}>
            Q&A
          </ProductNavLi>
          <ProductNavLi id="review" onClick={changeState} listName={stateValue}>
            Review
          </ProductNavLi>
        </ProductNavUl>
      </nav>
    </>
  );
}

export default NavBar;