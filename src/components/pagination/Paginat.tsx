import React from "react";
import Router from "next/router";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { LIST_LIMIT } from "../../libs/count";

const PageContainer = styled.div`
  margin: 24px 0;
  & ul {
    display: flex;
    justify-content: center;
    font-size: 14px;
  }
  & li {
    list-style-type: none;
    margin: 0 4px;
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.6;
    }
  }
  & .previous a,
  .next a {
    display: block;
    margin-top: 15px;
    width: 16px;
    height: 16px;
    text-indent: -1000px;
    transform: rotate(45deg);
    overflow: hidden;
  }
  & .previous a {
    border-left: 1px solid #39c;
    border-bottom: 1px solid #39c;
  }
  & .next a {
    border-top: 1px solid #39c;
    border-right: 1px solid #39c;
  }
  & li.selected {
    pointer-events: none;
  }
  & li.selected a {
    background-color: #39c !important;
    color: #fff !important;
  }
  & li:not(.previous, .next) a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid #39c;
    color: #39c;
  }
  & li.break a {
    border: none;
  }
  .disabled {
    opacity: 0.2;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    & .previous a,
    .next a {
      margin-top: 13px;
      width: 8px;
      height: 8px;
    }
    & li:not(.previous, .next) a {
      width: 32px;
      height: 32px;
    }
  }
`;
interface PaginationProps {
  rootPath?: string;
  totalCount: number;
  currentNum: number;
}
const ONE_PAGE_DISPLAY_USERS = LIST_LIMIT;
const LAST_DISPLAY_SIZE = LIST_LIMIT;
const AROUND_DISPLAY_PAGES = Math.floor(LIST_LIMIT / 2);
const Pagination: React.FC<PaginationProps> = (props) => {
  const handlePaginate = (selectedItem: { selected: number }) => {
    if (selectedItem.selected === 0) {
      Router.push("/");
    } else {
      Router.push(`${props.rootPath || ""}/page/${selectedItem.selected}`);
    }
  };
  return (
    <PageContainer>
      <ReactPaginate
        pageCount={Math.ceil(props.totalCount / ONE_PAGE_DISPLAY_USERS)}
        initialPage={props.currentNum}
        marginPagesDisplayed={LAST_DISPLAY_SIZE}
        pageRangeDisplayed={AROUND_DISPLAY_PAGES}
        onPageChange={handlePaginate}
      />
    </PageContainer>
  );
};

export default Pagination;
