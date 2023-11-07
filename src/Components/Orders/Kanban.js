import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getOrder } from "../../Redux/Slices/orderSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData, putData } from "../../ApiConstant/api";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})





const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

const Kanban = () => {

    const dispatch = useDispatch()
    const [columns, setColumns] = useState({});
    const { orderList } = useSelector((state) => state.order)

    useEffect(() => {
        dispatch(getOrder())
        console.log(" orders ============= ", orderList)
    }, [])

    const getKanbanData = () => {
        fetchData("kanban")
            .then((result) => {
                setColumns(result?.allOrders)
                console.log("result ====== ", columns)
            })
    }
    useEffect(() => {
        getKanbanData();
    }, [])

    // console.log("first modifiedItems", modifiedItems)

    return (
        <div>
            {/* <h1 style={{ textAlign: "center" }}>Jira Board</h1> */}

            <div className="table-responsive">
                <div
                    className="row g-0  flex-nowrap"
                    style={{ gap: "0 10px" }}
                    key={1}
                >
                    <DragDropContext

                        onDragEnd={(result) => {
                            onDragEnd(result, columns, setColumns)
                            const obj = { orderStatus: result?.destination?.droppableId }
                            putData(`order/${result?.draggableId}`, obj)
                            Toast.fire({
                                icon: 'success',
                                title: result?.message
                            })
                            // console.log("first result ======= ", result)
                        }}
                    >
                        {Object.entries(columns).map(([columnId, column], index) => {
                            return (
                                <div className="col-md-4">
                                    <div className="card overflow-hidden  p-0">
                                        <div
                                            key={columnId}
                                        >
                                            <div className="card-header">

                                                <p className="mb-0">{column.name}</p>
                                            </div>
                                            <div>
                                                <Droppable droppableId={`${columnId}`} key={columnId}>
                                                    {(provided, snapshot) => {
                                                        return (
                                                            <div
                                                                {...provided.droppableProps}
                                                                ref={provided.innerRef}
                                                                style={{
                                                                    background: snapshot.isDraggingOver
                                                                        ? "lightblue"
                                                                        : "white",
                                                                    padding: 4,
                                                                    // width: 250,

                                                                    minHeight: 450,
                                                                    maxHeight: 450,
                                                                    overflow: "auto"
                                                                }}
                                                            >
                                                                {column.items.map((item, index) => {
                                                                    return (
                                                                        <Draggable
                                                                            key={item.id}
                                                                            draggableId={`${item.id}`}
                                                                            index={index}
                                                                        >
                                                                            {(provided, snapshot) => {
                                                                                return (
                                                                                    <div
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                        style={{
                                                                                            userSelect: "none",
                                                                                            padding: 16,
                                                                                            margin: "0 0 8px 0",
                                                                                            minHeight: "50px",
                                                                                            backgroundColor: snapshot.isDragging
                                                                                                ? "#263B4A"
                                                                                                : "#456C86",
                                                                                            color: "white",
                                                                                            ...provided.draggableProps.style
                                                                                        }}
                                                                                    >
                                                                                        {item.content}
                                                                                    </div>
                                                                                );
                                                                            }}
                                                                        </Draggable>
                                                                    );
                                                                })}
                                                                {provided.placeholder}
                                                            </div>
                                                        );
                                                    }}
                                                </Droppable>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            );
                        })}
                    </DragDropContext>
                </div>

            </div>
        </div>
    );
}

export default Kanban;
