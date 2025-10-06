import { useState } from 'react'

import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './style'


export function Home() {
const [task, setTask] = useState('')



return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
          id="task" 
          list='task-suggestions' 
          placeholder="Dê um nome para o seu projeto" 
          onChange={(e) => setTask(e.target.value)}
          value={task}
          />

          <datalist id='task-suggestions'>
            <option value="Estudar" />
            <option value="Descansar" />
            <option value="Treinar" />
            <option value="Jogar" />
          </datalist>



          <label htmlFor="minutesAmount">durante</label>
                        
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        
        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}