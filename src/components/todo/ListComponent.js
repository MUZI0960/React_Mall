import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { data } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    dtoList:[],
    pageNumList:[],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
  }

function ListComponent(props) {

    const {page, size, refresh, moveToList} = useCustomMove()

    const [serverData, setServerData] = useState(initState)

    useEffect(()=>{
        getList({page, size}).then(data =>{
            console.log(data)
            setServerData(data)
        })

    }, [page,size, refresh])

    return (
        <div>
            Todo List Component
        </div>
    );
}

export default ListComponent;