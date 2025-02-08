import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'

import { CountdowContainer, FormContainer, HomeConteiner, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

const newCycleFormValidationSchema =  zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    minutesAmount: zod
    .number()
    .min(5, 'o ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'o o ciclo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
    //register = recebe o nome do input e retorna metodos de monitoraçao de valores dos input
    const { register, handleSubmit , watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    function handleCreateNewCycle(data: NewCycleFormData){
        console.log(data)
        reset();
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
                    {...register('minutesAmount',{ valueAsNumber: true })}
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