import { HistoryContainer, HistoryList, Status } from "./style";

export function History() {
  return (
  <HistoryContainer>
    <h1>History Page</h1> 

 
    <HistoryList>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Duration</th>
            <th>Start</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React Study</td> 
            <td>25 minutes</td>
            <td>About 2 hours ago</td>
            <td>
              <Status statusColor="red">Incomplete</Status>
            </td>
          </tr>
           <tr>
            <td>React Study</td> 
            <td>25 minutes</td>
            <td>About 2 hours ago</td>
            <td>
              <Status statusColor="yellow">Pendent</Status>
            </td>
          </tr>
           <tr>
            <td>React Study</td> 
            <td>25 minutes</td>
            <td>About 2 hours ago</td>
            <td>
              <Status statusColor="green">Completed</Status>
            </td>
          </tr>
           <tr>
            <td>React Study</td> 
            <td>25 minutes</td>
            <td>About 2 hours ago</td>
            <td>
              <Status statusColor="green">Completed</Status>
            </td>
          </tr>
        </tbody>
      </table>

    </HistoryList>


  </HistoryContainer>
)}