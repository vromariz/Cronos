import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';

import { CountdowContainer, FormContainer, HomeConteiner, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
    //register = recebe o nome do input e retorna metodos de monitoraçao de valores dos input
    const { register, handleSubmit , watch} = useForm()

    function handleCreateNewCycle(data: unknown){
        console.log(data)
    }

    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeConteiner>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                    id="task" 
                    list="task-suggestions"
                    placeholder="De um nome para o seu projeto" 
                    {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Banana"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00"
                    step={5}
                    min={5}
                    max={60}
                    {...register('minutsAmount',{ valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormContainer>


                <CountdowContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdowContainer>
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
            </form>
        </HomeConteiner>
    )
}