import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesConstext";


export function History() {
    const { cycles } = useContext(CyclesContext)

    return (
       <HistoryContainer>
            <h1>Meu Historico</h1>
            <pre>{JSON.stringify(cycles,null,2)}</pre>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duraçao</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>ha 2 meses</td>
                            <td>
                                <Status statusColor = "red">Concluido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>ha 2 meses</td>
                            <td>
                                <Status statusColor = "red">Concluido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>ha 2 meses</td>
                            <td>
                                <Status statusColor = "red">Concluido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>ha 2 meses</td>
                            <td>
                                <Status statusColor = "red">Concluido</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>ha 2 meses</td>
                            <td>
                                <Status statusColor = "red">Concluido</Status>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </HistoryList>

        </HistoryContainer>
    )
}