
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5,'O intervalo precisa ser de no máximo 60 minutos').max(60, 'O intervalo precisa ser de no máximo 60 minutos')
})

// interface newCycleFormData {
//   task: string
//   minutesAmount: number
// }

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
const {register, handleSubmit, watch, formState, reset} = useForm<newCycleFormData>({
  resolver: zodResolver(newCycleFormValidationSchema),
  defaultValues:{
    task:'',
    minutesAmount: 0
  }
})

const task = watch('task')
const isSubmitDisabled = !task

console.log(formState.errors)

function handleCreateNewCycle(data : newCycleFormData){
  console.log(data)
  reset()
}

return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
          id="task" 
          list='task-suggestions' 
          placeholder="Dê um nome para o seu projeto" 
          {...register('task')}
  
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
            {...register('minutesAmount', {valueAsNumber:true})}
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

        
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}