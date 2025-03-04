import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from 'zod'
import { useContext } from "react";
import {
    HomeConteiner,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./components/Countdown/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'o ciclo precisa ser de no minimo 5 minutos')
        .max(60, 'o o ciclo precisa ser de no maximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {

    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

    //register = recebe o nome do input e retorna metodos de monitoraçao de valores dos input
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    const { handleSubmit, watch, reset } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData){
        createNewCycle(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeConteiner>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )}

            </form>
        </HomeConteiner>
    )
}