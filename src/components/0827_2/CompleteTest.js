import React, { useEffect, useState } from "react";
import data from "./data";
import { Badge, Card, Container, Spinner, Table } from "react-bootstrap";
const CompleteTest = () => {
  const [todoList, setTodoList] = useState(data);

  const clickHandler = (idx) => {
    console.log(idx);

    setTodoList((i) => {
      return i.map((j, index) =>
        index === idx ? { ...j, complete: !j.complete } : j
      );
    });

    // setTodoList((i) => {
    //   return i.map((j, index) => {
    //     if (index === idx) {
    //       console.log("index === idx");
    //       return { ...j, complete: !j.complete };
    //     } else return j;
    //   });
    // });

    console.log(todoList);

    //내가 하려고 했던 것
    // setTodoList((prev) => [
    //   ...prev.map((j, index) => {
    //     if (index === idx) {
    //       console.log("if(index === idx)");
    //       j.complete = !j.complete;
    //     }
    //     return j;
    //   }),
    // ]);
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Header className="d-flex align-items-center justify-content-between bg-white"></Card.Header>

        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover bordered className="mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th>제목</th>
                  <th style={{ width: 140 }}>완료 여부</th>
                </tr>
              </thead>
              <tbody>
                {(Array.isArray(todoList) ? todoList : []).map((i, index) => (
                  <tr key={i.title}>
                    <td className="text-muted">#{i.title}</td>
                    <td>
                      <button onClick={() => clickHandler(index)}>
                        <Badge
                          className={
                            i.complete
                              ? "badge rounded-pill bg-primary"
                              : "badge rounded-pill bg-secondary"
                          }
                          pill
                        >
                          {i.complete ? "완료" : "미완료"}
                        </Badge>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CompleteTest;
