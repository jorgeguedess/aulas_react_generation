import { useEffect, useState } from "react";

function Task() {
  const [completed, setCompleted] = useState<boolean>(false);
  const [task, setTask] = useState<string>("");

  const handleCompletedTask = (completed: boolean) => {
    completed ? setTask("Parabéns! Tarefa Concluída!") : setTask("");
  };

  useEffect(() => {
    handleCompletedTask(completed);
  }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{task}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(!task)}>
        {completed ? "Desfazer Tarefa" : "Concluir Tarefa"}
      </button>
    </div>
  );
}

export default Task;
