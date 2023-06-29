import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou Trabalhar em</label>
          <TaskInput
            id="task"
            list="suggestion"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="suggestion">
            <option value="projeto1"></option>
            <option value="projeto2"></option>
            <option value="projeto3"></option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled type="submit">
          Começar
          <Play size={24} />
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
